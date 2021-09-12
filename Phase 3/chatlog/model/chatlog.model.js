let mongoose = require("mongoose")


mongoose.pluralize(null);
//create the schema

let chatSchema = mongoose.Schema({
    _id: Number,
    name: String,
    message: String,

})


//using schema creating model
//1st parameter collection name 
//2nd prarameter schema reference 
let chatModel = mongoose.model("chatlog", chatSchema);


module.exports = chatModel; //if we export this we can import this in another file as require