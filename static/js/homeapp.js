console.log("Testing")

d3.json("/movies").then(function(data){
    console.log(data)
    title = data["title"]
   
    titles = []
    Object.entries (title).forEach(([key,value])=>{
        titles.push(value)
    })
    console.log(titles)

    runtime = data["runtime"]
    runTimes = []
    Object.entries (runtime).forEach(([key,value])=>{
        runTimes.push(value)
    })
    console.log(runTimes)

    rotten_tm = data["rotten_tomatoes"]
    // title = title.map(obj=>obj.)
    review_rotten = []
    Object.entries (rotten_tm).forEach(([key,value])=>{
        review_rotten.push(value)
    })
    console.log(review_rotten)
var barData = {
    y:runTimes.slice(0,10),
    x:titles.slice(0,10),
    type:"bar", 
    orientaton: "h"
}
var layout ={
width: 500, 
height: 500
}

var trace =[barData]
Plotly.newPlot("bar", trace, layout)

var bubbleData = {
    y:runTimes.slice(0,100),
    x:titles.slice(0,100),
    marker:{
    size:review_rotten.slice(0,100),
    color:runTimes.slice(0,100)
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