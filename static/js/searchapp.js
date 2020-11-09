

d3.json("http://127.0.0.1:5000/movies2").then(function(data){
    // console.log(data)

    function makeResponsive() {
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
    makeResponsive();
});

function AllData(userinput){
    d3.json("http://127.0.0.1:5000/movies2").then(function(data){
        var movieList = data.filter(function(x){
            // console.log(x);
            return x.title == userinput;
        });
        console.log(movieList)
        console.log("that was movieList");
        // console.log(data);
        // console.log("That was data");
        var currentrow = movieList[0];
        console.log(currentrow);
        console.log("that was current row");
        var demobox = d3.select("#sample-metadata");
        demobox.html("");
        Object.entries(currentrow).forEach(function([x, y]){
            return demobox.append("h4").text(`${x}: ${y}`);
        });       
    }); 
};
function init() {
    var selector = d3.select("#selMovie");
    d3.json("http://127.0.0.1:5000/movies2").then(function(data){
        // console.log(data.title);
        
        // var movieNames = data.title;
        Object.entries(data).forEach(function(userChoice){
            selector
            .append("option")
            .text(userChoice)
            .property("value", userChoice);
        });
    var beginning = data[0];
    console.log(beginning);
    console.log("that was beginning");
    AllData(beginning.title);
    });
};

// make movie dropdown first
// init, alldata, optionChanged
function optionMovieChanged(movieChosen){
    AllData(movieChosen);
}

init();