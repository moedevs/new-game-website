import os


def setup_env():
	database_uri = os.environ.get('DATABASE_URI', 'postgresql:///api_test')
	port = os.environ.get('PORT', 5000)
	host = os.environ.get('HOST', 'testhifumi.io:8080')
	return database_uri, port, host
