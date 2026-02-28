from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def load_json(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)


def save_json(filepath, data):
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


@app.route('/api/portfolio', methods=['GET'])
def get_portfolio():
    """Return all portfolio data."""
    data = load_json(os.path.join(BASE_DIR, 'data', 'portfolio.json'))
    return jsonify(data), 200


@app.route('/api/contact', methods=['POST'])
def contact():
    """Receive and store a contact form submission."""
    body = request.get_json()

    if not body:
        return jsonify({'error': 'Request body is required'}), 400

    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    message = body.get('message', '').strip()

    if not name or not email or not message:
        return jsonify({'error': 'Name, email, and message are all required'}), 400

    messages_path = os.path.join(BASE_DIR, 'messages.json')
    messages = load_json(messages_path)
    messages.append({
        'name': name,
        'email': email,
        'message': message,
        'timestamp': datetime.now().isoformat()
    })
    save_json(messages_path, messages)

    return jsonify({'success': True, 'message': 'Message received! Thank you.'}), 201


if __name__ == '__main__':
    app.run(debug=True, port=5000)
