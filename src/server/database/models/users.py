from src.server.app import db


class User(db.Model):
	__tablename__ = 'users'

	user_id = db.Column(db.String, primary_key=True)
	user_name = db.Column(db.String(200), nullable=True)
	client_id = db.Column(db.String(24), db.ForeignKey('clients.client_id'))

	@property
	def serialize(self):
		return {
			'user_id': self.user_id,
			'user_name': self.user_name
		}

	@property
	def id(self):
		return self.user_id