// console.log("Testing")

// d3.json("http://127.0.0.1:5000/movies").then(function(data){
//     console.log(data)
// })


// d3.json("/movies2").then(function(data){
 
//     //console.log(`this is movied ${data}`)
//     function filterMovies() {
//         // hard-coded filters for testing purposes - all working except for streaming platform
//         var filters = {
//             // netflix: 'true',
//             genres: 'Comedy',
//             age: '16+'
//             // movieFilter: ''
//         };
//         // creates list: filteredMovies based on the above filters
//         filteredMovies = Object.values(data).filter(function(item) {
//             // console.log(item)
//             for (var key in filters) {
//             if (item[key] === undefined || item[key] != filters[key])
//                 return false;
//             }
//             return true;
//         });
    
//         //console.log(filteredMovies)
//         // filteredMovies.forEach(item => console.log(item));
//     }
//     filterMovies();
// });
// function ChosenData(userinput){
//     d3.json("/movies2").then(function(data){
//         var selectMovie = data.filter(function(x){
//             // console.log(x);
//             return x.title == userinput;
//         });
//         // console.log(selectMovie);
//         // console.log("that was selectMovie");
//         // console.log(data);
//         // console.log("That was data");
//         var currentObject = selectMovie[0];
//         // console.log(currentObject);
//         // console.log("that was currentObject");
//         var demobox = d3.select("#sample-metadata");
//         demobox.html("");
//         Object.entries(currentObject).forEach(function([x, y]){
//             return demobox.append("h4").text(`${x}: ${y}`);
//         });       
//     }); 
// };
//     // Activate dropdown menu choices
    
// function init() {
//     // loading Genres into Genres dropdown
    
//     var genreSelector = d3.select("#selGenre");
//     d3.json("/movies2").then(function(data){

//         genrelist = []
//         Object.entries(data).forEach(function(userChoice){
//             genrelist.push(userChoice[1].genres)
            
//         });

//         let glist = [...new Set(genrelist)];
//         for(var i = 0; i < glist.length; ++i){
//             genreSelector
//             .append("option")
//             .text(glist[i])
//             .property("value", glist[i]);    
//         }
        
        
//             //console.log(genreList)
//     });
//     // Loading age list into age dropdown.
//     var ageSelector = d3.select("#selAge");
//     d3.json("/movies2").then(function(data){

//         ageList = []
//         Object.entries(data).forEach(function(userChoice){
            
//             ageList.push(userChoice[1].age)
//         });
        
//         let alist = [...new Set(ageList)];
//         for(var a = 0; a < alist.length; ++a){

//             ageSelector
//             .append("option")
//             .text(alist[a])
//             .property("value", alist[a]);
//         }   
                     
        
//     });
//     // Loading Movie list into movie dropdown 
//     var movieSelector = d3.select("#selMovie");
//     d3.json("/movies2").then(function(data){
        
//         Object.entries(data).forEach(function(userChoice){
//             var titlesList = userChoice[1].title;
//             movieSelector
//             .append("option")
//             .text(titlesList)
//             .property("value", titlesList); 
//         });
//     var beginning = data[0];
    
//     ChosenData(beginning.title);
//     });
// };
// function optionMovieChanged(movieChosen){
//     ChosenData(movieChosen);
// }
// init();


var xhReq = new XMLHttpRequest();
xhReq.open("GET", "/movies2", false);
xhReq.send(null);
var myData = JSON.parse(xhReq.responseText);

console.log(myData);
console.log(myData[0].age)
console.log("BREAK")


window.onload = function(){
  
  // This waits for the window to render and then loads the movies based on the current
  // selections. The user never sees an empty movie list.
  
  initializePage();
};
function initializePage(){
   //genre is hard coded
   //age is hard coded
   //movies need to be generated
   rebuildMovieTitleList();
}

function rebuildMovieTitleList(){
    let selector = "selMovie";
    let ListOfMatchingMovies = buildMovieOptionList();
    // Need next 4 functions below to buildMovieOptionList
    // Next the list needs to live in the select dropdown menu 
    clearDropDown(selector);
    appendDropDownOptions( selector, ListOfMatchingMovies);
    displayCurrentMovieData();
}


function buildMovieOptionList(){
    let UserGenreChoice = getSelectedOption("selGenre");
    let UserAgeChoice = getSelectedOption("selAge");
    let MatchingMovieObjects = getListOfMoviesByGenreAndAge(UserGenreChoice.innerHTML, UserAgeChoice.innerHTML);
    return MatchingMovieObjects 
}


function getSelectedOption(selectID){
    let htmlElement = document.getElementById(selectID);
    for (let i = 0; i < htmlElement.options.length; i++){
        let option = htmlElement.options[i];
        if(option.selected == true){
            return option;
        }
    }
    return null
}
// Above function code was modified from stackoverflow

function getListOfMoviesByGenreAndAge(GenreChoice, AgeChoice){
    let allMovies = myData;
    let moviesMatchingGenre = filterList(allMovies, "genres", GenreChoice);
    let moviesMatchingGenreAndAge = filterList(moviesMatchingGenre, "age", AgeChoice);
    return moviesMatchingGenreAndAge;
}

function filterList(listdata, key, value){
    return listdata.filter(x => x[key] === value);

}

function clearDropDown(selectID){
    let htmlElement = document.getElementById(selectID);
    let size = htmlElement.options.length;
    for(i = size-1; i>=0; i--){
        htmlElement.options[i] = null;
    }
// This was found online by google searching how to clear a dropdown
}

function appendDropDownOptions( selectID, listofOptions){
    let selector = d3.select("#" + selectID);
    listofOptions.forEach(function(MovieObject){
        selector
        .append("option")
        .text(MovieObject.title)
        .property("value", MovieObject.title)
        .property("makeobjectliveinHTML", MovieObject)
    });

}
function displayCurrentMovieData(){
    let displaybox = d3.select("#movie-display");
    displaybox.html("")
    let userMovieChoice = getSelectedOption("selMovie").innerHTML;
    let MovieObject = getMovieObject(userMovieChoice)[0];
    console.log(MovieObject);
    
    Object.entries(MovieObject).forEach(function([key, value]){
        return displaybox.append("h4").text(`${key}: ${value}`);
    });
    

}

function getMovieObject(movieChoice){
    let allMovies = myData;
    let moviesMatchingMovieTitle = filterList(allMovies, "title", movieChoice);
    return moviesMatchingMovieTitle;
}
  