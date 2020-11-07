console.log("Testing")

d3.json("http://127.0.0.1:5000/movies").then(function(data){
    console.log(data)
})
