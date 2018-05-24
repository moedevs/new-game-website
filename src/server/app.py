from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from src.server.configuration.logger import configure_logger
from src.server.exceptions.exception import InvalidUsage, NotFound, Unauthorized


def create_app(db):
	app = Flask(__name__)
	db.app = app
	db.init_app(app)
	migrate.init_app(app, db)
	return app


configure_logger()
migrate = Migrate()
db = SQLAlchemy()

app = create_app(db)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/api_test'


# Circular import prevention
from src.server.endpoints.client_endpoint import ClientAPI
from src.server.endpoints.user_endpoint import UserAPI
from src.server.endpoints.message_endpoint import MessageAPI

app.add_url_rule('/clients', view_func=ClientAPI.as_view('clients'))
app.add_url_rule('/users', view_func=UserAPI.as_view('users'))
app.add_url_rule('/messages', view_func=MessageAPI.as_view('messages'))


@app.errorhandler(InvalidUsage)
@app.errorhandler(NotFound)
@app.errorhandler(Unauthorized)
def handle_invalid(error):
	response = jsonify(error.to_dict())
	response.status_code = error.status_code
	return response


if __name__ == '__main__':
	app.run(debug=True)
