-- Step - 1 Create Database "netflixproject"

-- id                   int64
-- title               object
-- year                 int64
-- age                 object
-- imdb               float64
-- rotten_tomatoes      int64
-- netflix               bool
-- hulu                  bool
-- prime_video           bool
-- directors           object
-- genres              object
-- language            object
-- runtime            float64
-- dtype: object

CREATE TABLE netflix_stream (
  	id INT PRIMARY KEY,
  	title VARCHAR(200) NOT NULL,
  	year INT,
	age VARCHAR(10),
	imdb FLOAT,
	rotten_tomatoes INT,
	netflix BOOLEAN,
	hulu BOOLEAN,
	prime_video BOOLEAN,
	directors VARCHAR(200),
	genres VARCHAR(200),
	language VARCHAR(250),
	runtime FLOAT
		
);

SELECT * FROM netflix_stream;