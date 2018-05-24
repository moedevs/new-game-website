import binascii
import os
from functools import wraps
from src.server.exceptions.exception import Unauthorized


def generate_token():
	# We want the tokens to be a specific length
	return binascii.hexlify(os.urandom(12)).decode()


def requires_token(func):
	@wraps(func)
	def check_token(*args, **kwargs):
		# Check to see if it's in their session
		if 'api_token' not in '':
			# If it isn't return our access denied message (you can also return a redirect or render_template)
			raise Unauthorized()

		# Otherwise just send them where they wanted to go
		return func(*args, **kwargs)
	return check_token
