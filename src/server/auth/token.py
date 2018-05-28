import binascii
import os


def generate_token():
	# We want the tokens to be a specific length
	return binascii.hexlify(os.urandom(12)).decode()


