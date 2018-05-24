from datetime import datetime

from src.server.app import db


class Message(db.Model):
	__tablename__ = 'messages'

	sent = db.Column(db.DateTime, default=datetime.utcnow)
	message_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
	client_id = db.Column(db.String(24), db.ForeignKey('clients.client_id'))
	user_id = db.Column(db.String(200), db.ForeignKey('users.user_id'))
	content = db.Column(db.Text, nullable=False)


	def __str__(self):
		return self.client_name