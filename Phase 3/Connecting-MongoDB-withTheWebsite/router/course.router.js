//navigate 
//load 
let express = require("express");
//this is used to create the router reference 
//which help to route to controller function base upon the path
let router = express.Router()
let courseController = require("../controller/course.controller")
//path  //routes                                   //functionname
router.get("/", courseController.getAllCourse)
router.post("/", courseController.addCourse)
router.delete("/:id", courseController.deleteCourse);
router.put("/", courseController.updateCourse);

module.exports = router;