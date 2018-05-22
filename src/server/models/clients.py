from src.server.app import db

class Client(db.Model):
	__tablename__ = 'clients'

	client_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
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
			'name': self.client_name
		}