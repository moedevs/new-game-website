from src.server.models.clients import Client
from src.server.app import db, app
from typing import List

def create_client(name: str) -> Client:
	if not name:
		raise ValueError("Client must have 'name' attribute")

	newClient = Client(client_name=name)
	db.session.add(newClient)
	db.session.commit()
	app.logger.info('Created new user {}'.format(name))
	return newClient

def get_all_clients(raw=False):
	clients = Client.query.order_by(Client.client_name).all()
	if raw:
		return clients
	return [client.serialize for client in clients]



# def client_exists(client_name):
# 	if len(kwargs.keys()) > 1:
# 		raise Exception('Can only search for a single item at a time')
# 	key, value = kwargs.items()
# 	print(key)
# 	print(value)
# 	clients = get_all_clients()
# 	filtered = [client[key] for client in clients]
# 	print(filtered)filtered
