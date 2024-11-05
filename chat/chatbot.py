from flask import Flask, request, jsonify
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app) 


# Initialisation du chatbot
chatbot = ChatBot(
    'M2IBot',
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    logic_adapters=[
        'chatterbot.logic.BestMatch',
        'chatterbot.logic.TimeLogicAdapter'
    ],
   database_uri='sqlite:///new_m2i_database.db'

)

# Conversations personnalisées en français
custom_conversations = [
    "Qu'est-ce que M2I ?", "Le M2I est un master en ingénierie informatique qui se concentre sur les technologies de l'information.",
    "Quels sont les cours proposés dans le programme M2I ?", "Le programme comprend des cours sur l'intelligence artificielle, le développement web, la gestion de bases de données, etc.",
    "Qui sont les professeurs dans ce programme ?", "Nous avons plusieurs professeurs experts dans leurs domaines respectifs.",
    "Comment s'inscrire au programme ?", "Les inscriptions se font en ligne via notre site web.",
    "Quels sont les débouchés professionnels après le master M2I ?", "Les diplômés peuvent travailler dans divers secteurs tels que la technologie, le développement logiciel, et l'analyse de données.",
    "Bonjour", "Salut ! Comment puis-je vous aider aujourd'hui ?",
    "Ça va ?", "Ça va bien, merci ! Et vous ?",
    "Merci !", "De rien ! Si vous avez d'autres questions, n'hésitez pas.",
    "Peux-tu m'aider ?", "Bien sûr ! De quoi avez-vous besoin ?",
    "Au revoir", "À bientôt ! N'hésitez pas à revenir si vous avez d'autres questions.",
    "Quel temps fait-il ?", "Je ne suis pas sûr, mais vous pouvez vérifier un site météo.",
    "Ok", "Avez-vous d'autres questions ?"
]

# Entraîner uniquement avec les conversations personnalisées
custom_trainer = ListTrainer(chatbot)
custom_trainer.train(custom_conversations)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    response = chatbot.get_response(user_input)
    return jsonify({'response': str(response)})

if __name__ == '__main__':
    app.run(debug=True)
