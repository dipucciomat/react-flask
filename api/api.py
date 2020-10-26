import time
import requests
from flask import Flask
from flask import request
from flask import jsonify



app = Flask(__name__)



@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/parse', methods=['POST'])
def parse_resume():
    print(request.form)
    resume = request.files['file']
    response = requests.post('https://jobs.lever.co/parseResume', files=dict(resume=resume))

    return response.json()