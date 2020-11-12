d3.json("/movies2").then(function(data){
    // console.log(data)

    function filterMovies() {
        // hard-coded filters for testing purposes - all working except for streaming platform
        var filters = {
            // netflix: 'true',
            genres: 'Comedy',
            age: '16+'
            // movieFilter: ''
        };
        // creates list: filteredMovies based on the above filters
        filteredMovies = Object.values(data).filter(function(item) {
            // console.log(item)
            for (var key in filters) {
            if (item[key] === undefined || item[key] != filters[key])
                return false;
            }
            return true;
        });
    
        console.log(filteredMovies)
        // filteredMovies.forEach(item => console.log(item));

    }
    filterMovies();
});

// MOVIE CHOICE DROPDOWN
function movieChosenData(userinput){
    d3.json("/movies2").then(function(data){
        var selectMovie = data.filter(function(x){
            // console.log(x);
            return x.title == userinput;
        });
        var currentObject = selectMovie[0];
        var demobox = d3.select("#sample-metadata");
        demobox.html("");
        Object.entries(currentObject).forEach(function([x, y]){
            return demobox.append("h4").text(`${x}: ${y}`);
        });
    }); 
};
function genreChosenData(userinput){
    d3.json("/movies2").then(function(data){
        var selectGenre = data.filter(function(x){
            // console.log(x);
            return x.genres == userinput;
        });
        console.log(selectGenre)
        // var currentObject = selectGenre[0];
        // var demobox = d3.select("#sample-metadata");
        // demobox.html("");
        // Object.entries(currentObject).forEach(function([x, y]){
        //     return demobox.append("h4").text(`${x}: ${y}`);
        // });
    }); 
};

// ACTIVATE DROPDOWN MENU CHOICES
function init() {
    var genreSelector = d3.select("#selGenre");
    d3.json("/movies2").then(function(data){
        // const gList = Object.values(data.genres);
        // console.log(gList);
        Object.entries(data).forEach(function(userChoice){
            // var genreList = userChoice[1].genres;
            // console.log(genreList);
            // var uniqueGenres = Array.from(new Set(genreList));
            // console.log(uniqueGenres);
            // genreSelector
            // .append("option")
            // .text(uniqueGenres)
            // .property("value", uniqueGenres);
            // return genreList;
            // console.log(userChoice)
            var genreList = userChoice[1].genres;
            // console.log(typeof(genreList));
            genreSelector
            .append("option")
            .text(genreList)
            .property("value", genreList);
            // console.log(genreList);
        });
    var beginning = data[0];
    genreChosenData(beginning.genres);
    });

    var movieSelector = d3.select("#selMovie");
    d3.json("/movies2").then(function(data){
        
        Object.entries(data).forEach(function(userChoice){
            var titlesList = userChoice[1].title;
            movieSelector
            .append("option")
            .text(titlesList)
            .property("value", titlesList);
        });
    var beginning = data[0];
    // console.log(beginning);
    // console.log("that was beginning");
    movieChosenData(beginning.title);
    });
};
function optionMovieChanged(movieChosen){
    movieChosenData(movieChosen);
}
function optionGenreChanged(genreChosen){
    genreChosenData(genreChosen);
}

init();