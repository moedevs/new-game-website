from flask.views import MethodView
from flask import request, jsonify

from src.server.database.client_db import create_client, get_all_clients
from src.server.exceptions.exception import InvalidUsage


class ClientAPI(MethodView):
	def get(self):
		return jsonify(clients=get_all_clients())

	def post(self):
		data = request.headers
		if not data['name']:
			raise InvalidUsage("Missing field name 'name'", status_code=400)

		client_name = data['name']
		client = create_client(client_name)
		return jsonify({'user_name': client.client_name, 'api_key': client.client_id})
