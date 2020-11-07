from flask import Flask, render_template, jsonify
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import numpy as np
import pandas as pd

# create engine
connection_string = "admin1:12345@localhost:5432/netflixproject"
engine = create_engine(f'postgresql://{connection_string}')
connection = engine.connect()

app = Flask(__name__)

@app.route("/")
def Homepage():
    return render_template("index.html")

@app.route("/search")
def SearchPage():
    return render_template("search.html")

@app.route("/backhome")
def ReturnHome():
    return render_template("index.html")

@app.route("/movies")
def movies():
    movies = pd.read_sql("select * from movie_search_project order by rotten_tomatoes desc", connection)

    return movies.to_json()




if __name__ == '__main__':
 app.run()