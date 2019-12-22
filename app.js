var express = require("express");
var app = express();

app.set("view engine", "ejs");

/*this is our root route*/
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds");
})

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Yelpcamp server has started!");
// });

app.listen(8080, function(){
    console.log("Yelpcamp server has started on port 8080!");
});

// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// http.createServer( function (request, response) {
//   var pathname = url.parse(request.url).pathname;
//   console.log("Trying to find '" + pathname.substr(1) + "'...");

//   fs.readFile(pathname.substr(1), function (err, data) {
//     if (err) {
//       response.writeHead(404, {'Content-Type': 'text/html'});
//       response.write("ERROR: Cannot find '" + pathname.substr(1) + "'.");
//       console.log("ERROR: Cannot find '" + pathname.substr(1) + "'.");
//     } else {
//       console.log("Found '" + pathname.substr(1) + "'.");
//       response.writeHead(200, {'Content-Type': 'text/html'});
//       response.write(data.toString());
//     }
//     response.end();
//   });
// }).listen(8080, 'localhost'); // Or 8081 or 8082 instead of 8080. Or '127.0.0.1' instead of 'localhost'.