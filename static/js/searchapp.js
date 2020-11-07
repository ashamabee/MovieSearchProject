console.log("Testing")

d3.json("http://127.0.0.1:5000/movies").then(function(data){
    console.log(data)


    function makeResponsive() {
        var filters = {
            platformFilter: 'Netflix',
            genreFilter: 'Comedy'
            // ageFilter: '16+'
            // movieFilter: ''
        };
        // go through each key one at a time
        // for every positions that changes add a new movie record and store it into a list

        allMovies = Object.values(data).filter(function(item) {
            console.log(item)
            for (var key in filters) {
            if (item[key] === undefined || item[key] != filter[key])
                return false;
            }
            return true;
        });

        data.forEach(item => console.log(item));

        console.log(allMovies),
        console.log('hi')
        // console.log(allMovies)
    }
    makeResponsive();
})

// 4 events

// movie.filter().filter
