# save this as app.py
from flask import Flask, Response
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

def event_stream():
    count = 0
    while True:
        count += 1
        time.sleep(1)
        yield 'data: %s\n\n' % count

@app.route("/")
def hello():
    return Response(event_stream(), mimetype="text/event-stream")
