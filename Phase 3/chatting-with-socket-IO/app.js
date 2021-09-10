let express = require("express");
//server
//emit: pass value 
//on to recieve value

//ref of express module
let app = express();

//load the http module and connect to express module with server property
let http = require("http").Server(app);

//load the client IO module and connect http module with IIFE features 
let io = require('socket.io')(http);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\index.html");
})


io.on("connection", (client) => {
    console.log("client connected");
    let name = " "
    const messageArray = ["Hello there", "Welcome", "Good to see you "];


    const responses = {
        "hello": "How can I help?",
        "bye": "Nice chatting!"
    }

    client.on('client-name', uname => {
        name = uname;
        console.log(uname);
        const random = Math.floor(Math.random() * messageArray.length);

        //new
        client.emit('server-message', "Server says: " + messageArray[random] + " " + uname);

    })


    //recive message from client 
    client.on('send-chat-Message', msg => {
        //data from client 
        //    console.log(msg)
        //checking if input is string 
        if (typeof msg === "string") {
            client.emit('server-message', name + " says: " + msg);
            const response = responses[msg.toLowerCase()]

            if (!response) {
                client.emit('server-message', "Server says: Someone will contact you soon ")

            } else {
                client.emit('server-message', "Server says: " + response);
            }
        } else {

            client.emit('server-error', "input must be a string ");


        }



    })


})










//run the server
http.listen(9090, () => console.log("server running on port 9090"));
