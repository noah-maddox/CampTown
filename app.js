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


// this is the port needed for testing not production
// app.listen(8080, function(){
//     console.log("Yelpcamp server has started on port 8080!");
// });


// possible fix to bad port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
