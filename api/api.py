import time
import requests
import json
import sys
from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from flask_cors import cross_origin



app = Flask(__name__)
CORS(app)




# dict(resume=resume)
@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/parse', methods=['GET','POST'])
def parse_resume():
    resume = request.files['file']
    print(resume,file=sys.stderr)
    response = requests.post('https://jobs.lever.co/parseResume', files=dict(resume=resume))
    return response.json()