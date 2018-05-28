from flask import render_template
from ..app import app


@app.route('/')
def send_welcome():
	return render_template('home/index.html')


@app.route('/commands', methods=['GET', 'POST'])
def commands():
	return render_template('commands/commands.html')


@app.route('/home', methods=['GET', 'POST'])
def home():
	return render_template('home/index.html')


@app.route('/clients', methods=['GET', 'POST'], subdomain='')
def test():
	return "Damn"