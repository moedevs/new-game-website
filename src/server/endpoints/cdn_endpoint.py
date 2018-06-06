from flask.views import MethodView
from flask import request, jsonify, Response, send_from_directory, flash, redirect, url_for
import os

from src.server.utils.checksum import checksum

secret_key = 'test'

import src.server.app

def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in src.server.app.ALLOWED_EXTENSIONS


class CdnEndpoint(MethodView):
	"""
	For storing and retrieving images
	"""
	def get(self, path):
		print('getting cdn')
		paths = path.split('/')
		filename = paths.pop()
		path = os.path.join('cdn', ''.join(paths))
		return send_from_directory(path, filename)


class CdnPostEndpoint(MethodView):
	def post(self):
		# check if the post request has the file part
		upload_folder = src.server.app.app.config['UPLOAD_FOLDER']
		file = request.files['file']
		# if user does not select file, browser also
		# submit a empty part without filename
		if not file:
			return 'File not found'

		if file.filename == '':
			flash('No selected file')
			return redirect(request.url)

		if file and not allowed_file(file.filename):
			return 'Extension not allowed!'

		if 'user' not in request.headers:
			return "Value 'user' not found in headers"

		user = request.headers['user']

		folder_path = os.path.join('cdn', user)
		if not os.path.isdir(folder_path):
			os.mkdir(folder_path)

		temp_file = file.read()
		img_key = checksum(temp_file)
		file_extension = file.filename.split('.').pop()
		file_save_name = '{}.{}'.format(img_key, file_extension)
		# Gotta go back to the beginning of the file after
		# hashing it for it to read and save properly
		file.seek(0)
		file.save(os.path.join(folder_path, file_save_name))
		file.close()
		return redirect('https://cdn.hifumi.io/{}'.format(os.path.join(user, file_save_name)))
