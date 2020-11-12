console.log("Testing")
// Jquery button alert message
// $(document).ready(function(){
//     $("button").click(function(){
//         alert("Sending you to our awesome movie search page");
//      });
// });
console.log("Testing")
d3.json("/movies").then(function(data){
    console.log(data)
    title = data["title"]
    titles = []
    Object.entries (title).forEach(([key,value])=>{
        titles.push(value)
    })
    console.log(titles)
    imdb = data["imdb"]
    imdb_review = []
    Object.entries (imdb).forEach(([key,value])=>{
        imdb_review.push(value)
    })
    console.log(imdb_review)
    rotten_tm = data["rotten_tomatoes"]
    // title = title.map(obj=>obj.)
    review_rotten = []
    Object.entries (rotten_tm).forEach(([key,value])=>{
        review_rotten.push(value/10)
    })
    console.log(review_rotten)
var trace1 = {
    y:imdb_review.slice(0,10),
    x:titles.slice(0,10),
    type:"bar",
    orientaton: "h",
    name: "IMDB"
}
var trace2 = {
    y:review_rotten.slice(0,10),
    x:titles.slice(0,10),
    type:"bar",
    orientaton: "h",
    name: "Rotten Tomatoes"
}
var layout ={
// width: 800,
// height: 500,
barmode: "group",
title: "Movie Ratings",
xaxis: {
    title: "Top Ten Movies by Rotten Tomatoes",
    automargin: true
    },
yaxis: {
    title: "Corresponding IMDB Rating",
    automargin: true,
    }
}
var barData =[trace1, trace2]
Plotly.newPlot("bar", barData, layout)
var bubbleData = {
    y:imdb_review.slice(0,10),
    x:titles.slice(0,10),
    marker:{
    size:review_rotten.slice(0,10),
    color:imdb_review.slice(0,10)
    },
    mode:"markers"
}
var bubbleLayout ={
width: 500,
height: 500
}
var bubbleTrace =[bubbleData]
Plotly.newPlot("bubble", bubbleTrace, bubbleLayout)
})





