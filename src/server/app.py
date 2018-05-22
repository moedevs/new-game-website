from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand, Manager

from src.server.configuration.logger import configure_logger
from src.server.exceptions.exception import InvalidUsage

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
from src.server.models import clients, messages, users
# from src.server.models.clients import Client
from src.server.db.client_endpoint import create_client, get_all_clients
from src.server.db.user_endpoint import get_all_users, user_exists, create_user
from src.server.db.message_endpoint import create_message


@app.route('/clients', methods=['GET', 'POST'])
def clients():
	if request.method == 'POST':
		data = request.headers
		if not data['name']:
			raise InvalidUsage("Missing field name 'name'", status_code=400)

		client_name = data['name']
		create_client(client_name)
		return jsonify({'result': 'Client created'})
	elif request.method == 'GET':
		return jsonify(get_all_clients())



@app.route('/message', methods=['POST', 'GET'])
def messages():
	"""
	POST -
		Saves a message in the database

	:arg Required headers:
		client - Client identifier
		user - User identifier

	GET -
		Gets an auto-generated message generated
		by markov chains

	:arg Required headers:
		None
	"""
	if request.method == 'POST':
		out = ""
		headers = request.headers

		if not 'client' in headers:
			raise InvalidUsage("Missing 'client' header", status_code=400)

		if not 'user_id' in headers:
			raise InvalidUsage("Missing 'user_id' header", status_code=400)

		if not 'content' in headers:
			raise InvalidUsage("Missing 'content' header", status_code=400)

		client_id = headers['client_id']
		client_name = headers['client_name']
		user_id = headers['user_id']

		clients = get_all_clients()
		print(clients)
		client = [c for c in clients if c['client_id'] == client_id][0]
		if client['client_name'] != client_name:
			client = create_client(id name=client_name)
			out += "Auto created client identity with id '{}'\n".format(client.client_name)


		users = get_all_users()
		user = [u for u in users if u['user_id'] == user_id][0]
		if user['user_id'] != user_id:
			app.logger.info('User not found in database')
			create_user(id=user_id)
			out += "Auto created user identity with id '{}'".format(user_id)


		content = headers['content']
		message = create_message(client_name, user_id, content)
		print(client_name)
		out_obj = {'success': 'Message added'}
		if out is not "":
			out_obj['info'] = out
		return jsonify(out_obj)
		# user_name = headers['user']
	elif request.method == 'GET':
		pass


@app.errorhandler(InvalidUsage)
def handle_invalid(error):
	response = jsonify(error.to_dict())
	response.status_code = error.status_code
	return response

if __name__ == '__main__':
	app.run(debug=True)
