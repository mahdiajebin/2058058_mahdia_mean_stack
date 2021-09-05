let fs = require("fs");
let readline = require("readline-sync");

let taskArray = JSON.parse(fs.readFileSync("AllTask.json").toString());

let empId = readline.questionInt("Enter the emp id : ")
let taskId = readline.question("Enter your taskId: ");
let task = readline.question("Enter your task: ");
let deadline =  readline.question("Enter your deadline: ");

let taskNew = {empId:empId, taskId:taskId, task:task, deadline:deadline};

taskArray.push(taskNew);

fs.writeFileSync("AllTask.json",JSON.stringify(taskArray))

console.log("new data stored");

