from src.server.database.models.messages import Message
from ..app import db


def create_message(client_id, user_id, content):
	if not client_id or not user_id or not content:
		raise ValueError("Parameter missing from arguments")
	message = Message(user_id=user_id, client_id=client_id, content=content)
	db.session.add(message)
	db.session.commit()
	return message
