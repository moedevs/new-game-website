from flask import Flask, request, jsonify, send_file, url_for, send_from_directory, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from src.server.configuration.env import setup_env
from src.server.configuration.logger import configure_logger
from src.server.endpoints.cdn_endpoint import CdnEndpoint, CdnPostEndpoint

UPLOAD_FOLDER = 'cdn'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

configure_logger()
app = Flask(__name__, template_folder='templates')
database_uri, port, host = setup_env()


app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SQLALCHEMY_DATABASE_URI'] = database_uri
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['SERVER_NAME'] = 'testhifumi.io:8080'
db = SQLAlchemy(app)
migrate = Migrate(app, db)


# Circular import prevention
from src.server.exceptions.exception import InvalidUsage, NotFound, Unauthorized
from src.server.endpoints.client_endpoint import ClientAPI
from src.server.endpoints.user_endpoint import UserAPI
import src.server.endpoints.message_endpoint as message_endpoint
import src.server.routes.website
MessageAPI = message_endpoint.MessageAPI

app.add_url_rule('/clients', view_func=ClientAPI.as_view('clients'), subdomain='api')
app.add_url_rule('/users', view_func=UserAPI.as_view('users'), subdomain='api')
app.add_url_rule('/messages', view_func=MessageAPI.as_view('messages'), subdomain='api')
app.add_url_rule('/<path:path>', view_func=CdnEndpoint.as_view('cdn'), subdomain='cdn', methods=['GET'])
app.add_url_rule('/upload', view_func=CdnPostEndpoint.as_view('upload'), subdomain='cdn', methods=['POST'])


@app.errorhandler(InvalidUsage)
@app.errorhandler(NotFound)
@app.errorhandler(Unauthorized)
def handle_invalid(error):
	response = jsonify(error.to_dict())
	response.status_code = error.status_code
	return response


if __name__ == '__main__':
	app.secret_key = 'test'
	app.config['SESSION_TYPE'] = 'filesystem'
	app.run()
