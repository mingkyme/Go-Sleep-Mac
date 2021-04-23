const express = require('express');
const { exec } = require("child_process");
var app = express();

app.get('/',function(req,res){
    exec("pmset sleepnow",function(error,stdout,stderr){
    });
    res.send("Done");
});
app.listen(3001,function(){
    console.log("Run gosleep Server");
});