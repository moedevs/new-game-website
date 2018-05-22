from src.server.models.users import User
from src.server.app import db, app
def create_user(id: str, name: str=None):
	if not id:
		raise ValueError("User must have an 'id' attribute")
	user = User(user_id=id, user_name=name)
	db.session.add(user)
	db.session.commit()
	app.logger.info('Create a new user with id {} and name {}'.format(user.user_id, user.user_name))
	return user

def get_all_users(raw: bool=False):
	users = User.query.all()
	if raw:
		print(users)
		return users

	return [user.serialize for user in users]


def user_exists(**kwargs):
	keys = kwargs.keys()
	values = kwargs.values()
	users = get_all_users(raw=True)

	filtered = [user.serialize for user in users]
	print(filtered)
	return filtered