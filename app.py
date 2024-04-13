from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# This will store the counter value
counter = 0


@app.route("/counter", methods=["GET", "POST"])
def handle_counter():
    global counter
    if request.method == "POST":
        counter += 1
    return jsonify(counter=counter)


if __name__ == "__main__":
    app.run(debug=True)
