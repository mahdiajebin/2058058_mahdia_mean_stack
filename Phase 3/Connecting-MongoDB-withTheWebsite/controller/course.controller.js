//load the module file that is userdefined module //like import
let courseModel = require("../model/course.model")


let getAllCourse = (request, response) => {

    courseModel.find({}, (err, data) => {
        if (!err) {
            response.json(data)
        } else {
            response.status(500).send(err.message);
        }
    }).select('cname description amount')

}

//recieve data from body part considered post method 
let addCourse = (request, response) => {

    let course = request.body;
    courseModel.insertMany(course, (err, result) => {

        if (!err) {
            response.send("record stored successfully")
        } else {
            response.status(500).send(err.message);
        }
    })

}


let deleteCourse = (request, response) => {
    let id = request.params.id;
    console.log(id);
    courseModel.deleteOne({ _id: id }, (err, result) => {
        if (!err) {
            response.send(result)
        } else {
            response.status(500).send(err.message);
        }
    })
}

let updateCourse = (request, response) => {
    let course = request.body;
    console.log(course);

    courseModel.updateOne({ _id: course.id }, { $set: { amount: course.amount } }, (err, result) => {
        if (!err) {
            response.send(result);
        } else {
            response.status(500).send(err.message);
        }
    })
}

module.exports = { getAllCourse, addCourse, deleteCourse, updateCourse }





