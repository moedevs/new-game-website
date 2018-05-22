from ..models.messages import Message
from ..app import db


def create_message(client_name, user_id, content):
	if not client_name or user_id or content:
		raise ValueError("Parameter missing from arguments")
	message = Message(user_id=user_id, client_name=client_name, content=content)
	db.sessions.add(message)
	db.session.commit()
	return message