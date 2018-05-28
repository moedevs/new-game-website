from functools import wraps
from flask import request

from src.server.exceptions.exception import InvalidUsage


def requires_headers(*required_headers):
	def wrap(f):
		def wrapped_f(*args, **kwargs):
			for header in required_headers:
				if header not in request.headers:
					raise InvalidUsage("Missing header '{}'".format(header))
			return f(*args, **kwargs)
		return wrapped_f
	return wrap
"""
def authorized(func):
	@wraps(func)
	def check_token(*args, **kwargs):
		# Check to see if it's in their session
		if 'api_key' not in request.headers:
			# If it isn't return our access denied message (you can also return a redirect or render_template)
			raise Unauthorized("Missing header 'api_key'")

		find = Client.query.filter(client_id=request.headers['api_key'])
		print(find)
		# Otherwise just send them where they wanted to go
		return func(*args, **kwargs)
	return check_token
"""