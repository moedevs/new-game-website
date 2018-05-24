from flask.views import MethodView
from flask import request, jsonify

from src.server.database.client_db import create_client, get_all_clients
from src.server.exceptions.exception import InvalidUsage


class UserAPI(MethodView):
	def get(self):
		pass

	def post(self):
		pass
