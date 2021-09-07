let express = require("express");
//server
//emit: pass value 
//on to recieve value

//ref of express module
let app = express();

//load the http module and connect to express module with server property
let http = require("http").Server(app);

//load the socket IO module and connect http module with IIFE features 
let io = require('socket.io')(http);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\index.html");
})


io.on("connection", (socket) => {
    console.log("client connected");
    //recieve the messge from cleint application
    socket.on("chat message", (msg) => {
        //  console.log(msg);

        io.emit('chat message', msg);
    })
   

    //sending data to client
    socket.emit("obj1", "hello user client connected server...");
})












//run the server
http.listen(9090, () => console.log("server running on port 9090"));
