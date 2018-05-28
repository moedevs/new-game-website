from flask.views import MethodView
from flask import request, jsonify, Response

from src.server.database.client_db import create_client, get_all_clients
from src.server.database.message_db import create_message
from src.server.database.user_db import get_all_users, create_user
from src.server.exceptions.exception import InvalidUsage, NotFound, Unauthorized
from src.server.app import app
from src.server.utils.decorators import requires_headers


class MessageAPI(MethodView):
	"""
	POST -
		Saves a message in the database

	:arg Required headers:
		client - Client identifier
		user - User identifier

	GET -
		Creates a new message generated
		by markov chains

	:arg Required headers:
		None
	"""
	@requires_headers('test', 'test2')
	def get(self):
		return Response('1231')
		# load_messages()

	@requires_headers('user_id', 'api_key', 'content')
	def post(self):
		out = ""
		headers = request.headers

		client_id = headers['api_key']
		client_name = headers.get('client_name', None)
		user_name = headers.get('user_name', None)
		user_id = headers['user_id']

		clients = get_all_clients()
		if not any(True for client in clients if client['client_id'] == client_id):
			# out += "Auto created client identity with id '{}'\n".format(client_name)
			raise Unauthorized("Invalid API key")

		users = get_all_users()
		if not any(True for user in users if user['user_id'] == user_id):
			app.logger.info('User {} not found in database'.format(user_id))
			create_user(user_id=user_id, user_name=client_name, client_id=client_id)

			out += "Auto created user identity with id '{}'".format(user_id)

		content = headers['content']
		message = create_message(client_id, user_id, content)

		out_obj = {'success': 'Message added'}
		if out is not "":
			out_obj['info'] = out
		return jsonify(out_obj)
