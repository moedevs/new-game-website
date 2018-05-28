import markovify
import src.server.database.models.messages as message


class Chain:
	@staticmethod
	def load_messages(client_id, user_id):
		return message.Message.query.filter(client_id=client_id, user_id=user_id)

	@staticmethod
	def generate_message(messages):
		pass


with open('corpus/test.txt', 'r', encoding='utf-8') as f:
	text = f.read()

	text_model = markovify.Text(text)

	for i in range(3):
		print(text_model.make_short_sentence(140))