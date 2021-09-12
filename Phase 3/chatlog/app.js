let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let cors = require("cors");
//load the module file that is userdefined module //like import
let chatModel = require("./model/chatlog.model")
//server
//emit: pass value 
//on to recieve value

//ref of express module
let app = express();


//which is use to enable post data recieving from html normal form
app.use(bodyParser.urlencoded({ extended: true }));

//load the http module and connect to express module with server property
let http = require("http").Server(app);

//load the client IO module and connect http module with IIFE features 
let io = require('socket.io')(http);
// //url database 
let url = "mongodb://localhost:27017/tcsmean"

// connect the database 
mongoose.connect(url).
    then(res => console.log("connected")).
    catch(error => console.log(error));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\index.html");
})


io.on("connection", (client) => {
    console.log("client connected");


    //recive message from client 
    client.on('send-chat-Message', function (data) {



        let name = data.name;
        let message = data.message;

        chatModel.insertMany({ name: name, message: message }, (err, result) => {

            if (!err) {
                console.log("record stored")
                response.send("record stored successfully")
            } else {
                console.log("record not stored")
                response.status(500).send(err.message);
            }
    
        })

    })
})


















//run the server
http.listen(9090, () => console.log("server running on port 9090"));
