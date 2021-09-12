// load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let routerCourse = require("./router/course.router");

// create the reference of express 
let app = express();


//which is use to enable post data recieving from html normal form
app.use(bodyParser.urlencoded({ extended: true }));

// add middleware 
app.use(cors());
app.use(bodyParser.json())


// //url database 
let url = "mongodb://localhost:27017/tcsmean"

// connect the database 
mongoose.connect(url).
    then(res => console.log("connected")).
    catch(error => console.log(error));

// middleware which help to match main path and pass the
// request to router file. 
//http://localhost:9090/api/product/getAllProducts
//http://localhost:9090/api/product/storeProduct

app.use(express.static("public"))

app.use("/api/course", routerCourse);







app.listen(9090, () => console.log("Server running on port number 9090"))