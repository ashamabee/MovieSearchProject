CREATE TABLE netflix_stream (
	index INT,
  	id INT PRIMARY KEY,
  	title TEXT,
  	year INT,
	age TEXT,
	imdb FLOAT,
	rotten_tomatoes INT,
	netflix BOOLEAN,
	hulu BOOLEAN,
	prime_video BOOLEAN,
	directors TEXT,
	genres TEXT,
	language TEXT,
	runtime FLOAT
		
);

SELECT * FROM netflix_stream;