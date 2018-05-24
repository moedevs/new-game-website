from src.server.app import db
from src.server.auth.token import generate_token


class Client(db.Model):
	__tablename__ = 'clients'

	client_id = db.Column(db.String(24), primary_key=True, default=generate_token)
	client_name = db.Column(db.String(200))
	
	# def __init__(self, client_name):
	# 	self.client_name = client_name
	# 	self.client_id = uuid4()
	# 	print(self.client_id)

	def __repr__(self):
		return '{}'.format(self.client_name)

	@property
	def serialize(self):
		return {
			'name': self.client_name,
			'client_id': self.client_id
		}