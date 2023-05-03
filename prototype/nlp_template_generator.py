import os
import openai

# Load your API key from an environment variable or secret management service
openai.api_key = os.getenv("OPENAI_API_KEY")

def get_templates(prompt, n):
    print('Getting templates...')
    response = openai.Completion.create(model="text-davinci-003", 
    prompt=prompt, 
    temperature=1,
    n=n,
    max_tokens=2000)
    return response['choices']

if __name__ == '__main__':
    test_prompt = 'Generate an HTML template for an e-commerce site'
    templates = get_templates(test_prompt, n=2)
    for i in range(2):
        print(templates[i]['text'])