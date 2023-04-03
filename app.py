from flask import Flask, jsonify, request, send_from_directory

from flask_cors import CORS
import nlp_template_generator

app = Flask(__name__)
CORS(app)

def generate_templates(user_input):
    num_templates = 4
    prompt = f'Generate an HTML template for an {user_input}'
    response = nlp_template_generator.get_templates(prompt, n=num_templates)
    templates = [{'html': response[i]['text']} for i in range(num_templates)]
    print('Finished generating templates.')
    return templates
    
@app.route('/home', methods=['GET'])
def get_homepage():
    return send_from_directory('.','display_templates.html')

@app.route('/display_templates.js', methods=['GET'])
def get_script():
    return send_from_directory('.','display_templates.js')

@app.route('/styles.css', methods=['GET'])
def get_style():
    return send_from_directory('.','styles.css')
           
@app.route('/templates', methods=['GET', 'POST'])
def get_templates():
    if request.method == 'POST':
        # Retrieve the user input from the request body
        user_input = request.json['user-input']

        # Generate new website templates based on the user input
        templates = generate_templates(user_input)

        # Return the list of templates
        return jsonify({'templates': templates})

    # If the request method is GET, return a dummy list of templates
    else:
        templates = [{'html': '<h3>The templates will appear here</h3>'}] * 4
        return jsonify({'templates': templates})

if __name__ == '__main__':
    app.run(debug=True)