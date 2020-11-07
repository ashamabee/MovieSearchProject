# MovieSearchProject
MovieSearchProject

Req's:
-A dashboard page with multiple charts that update from the same data
-Your project should include at least one JS library that we did not cover. -
-Your project must be powered by a data set with at least 100 records.
-Your project must include some level of user-driven interaction (e.g., menus, dropdowns, textboxes).
-Your final visualization should ideally include at least three views

Data:
https://www.kaggle.com/ruchi798/movies-on-netflix-prime-video-hulu-and-disney

Cleaning data:
-USA only
-Get rid of disney plus IN CSV
-Dropna to see what's missing
-Should we narrow down to 2019+2020? -No
-Get rid of plus sign in age
-Get rid of percentage sign and

Research Topics
-put it in a database - PGAdmin
-flask app
-html and bootstrap
-Javascript, Plotly & Leaflet

Setup of website:
-we will have a homepage with vizualizations that describe the types of movies we have
-the homepage will have a button that will take the user to a search page with dropdown options
      Link for making multiple filters
      https://stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions

-Dropdown for streaming site, genre, age, movie title
-once a movie is selected, it's information will be populated on the search page
-Links to streaming services at the bottom of the pages?

Visualizations for home page-- (decide on these later, after we connect everything)
-Original HTML page will have bar chart of top 10 movies - display only, not interactive.
-Scatterplot to display IMDb vs. Rotten Tomatoes with streaming services in different colors?
-Pie chart, representing the volume of movies per streaming service.
-Top 5 popular directors

Logistics
-Using flask(app.py), we will call html files and data
-
