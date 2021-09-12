let mongoose = require("mongoose")


mongoose.pluralize(null);
//create the schema

let courseSchema = mongoose.Schema({
    _id:Number,
    cname:String,
    description:String,
    amount:Number
})


//using schema creating model
//1st parameter collection name 
//2nd prarameter schema reference 
let courseModel = mongoose.model("Course", courseSchema);


module.exports = courseModel; //if we export this we can import this in another file as require