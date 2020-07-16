const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var port = process.env.PORT || "127.0.0.1";
var ip = process.env.IP || 8080

//routes
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/mercury", function(req,res){
    res.render("mercury.html");
});

app.get("/venus", function(req,res){
    res.render("venus.html");
});

app.get("/earth", function(req,res){
    res.render("earth.html");
});

//Starting server
app.listen(port, ip, function(){
    console.log("Rimmomg Express Server...")
});
