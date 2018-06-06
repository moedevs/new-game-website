import hashlib


def checksum(file):
	return hashlib.md5(file).hexdigest()
