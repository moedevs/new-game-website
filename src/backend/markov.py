import markovify


class Chain:
	@staticmethod
	def load_messages(client_id):
		pass

	@staticmethod
	def generate_message(messages):
		pass


with open('corpus/test.txt') as f:
	text = f.read()

	text_model = markovify.Text(text)


	for i in range(3):
		print(text_model.make_short_sentence(140))