from flask import Flask
from flask import Blueprint
from flask.ext.cors import CORS
import pymongo
import json
from bson.json_util import dumps

client=pymongo.MongoClient()
db=client.grab



app = Blueprint('API_v1', __name__)
CORS(app)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/get/<int:num>")
def get(num):
	# client=pymongo.MongoClient()
	# db=client.grab
	c=db.orders.find_one({"_id":num})
	return dumps(c)
	# return json.dumps(c)
	# return json.(user="joe")


if __name__ == "__main__":
	api=Flask(__name__)
	api.register_blueprint(app)
	api.run(debug=True)
    #{"customer":"Bill","_id":001,"status":"42","order_complete":42,"items":[{"item":"burger","qty":1,"price":7,"comments":"","item_completed":42}]}
    