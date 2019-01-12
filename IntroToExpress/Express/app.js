var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there! Welcome to my assignment");
});

app.get("/speak/:animals", function(req,res){
    
    var sounds = {
        pig: "Oink",
        cow: "ambbaaa",
        dog: "woooff wooff",
        
    }
    var animals = req.params.animals;
    var sound = sounds[animals];
    
    res.send("The " + animals + " says " + sound);
    
    
});

app.get("/repeat/:message/:times", function(req,res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    
    for(var i=0;i<times;i++){
        result+= message + " ";
    }
    
    res.send(result);
});
app.get("*", function(req,res){
    res.send("Sorry, Page Not Found!!");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Started"); 
});
