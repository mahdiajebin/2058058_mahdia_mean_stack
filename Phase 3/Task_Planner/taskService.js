//load the fs modoule 
let fs = require("fs");

let taskArray = [];



function addTask(task) {

    let result = taskArray.find((t) => t.taskId === task.taskId)

    if (result) return false


    taskArray.push({ empId: task.empId, taskId: task.taskId, task: task.task, deadline: task.deadline });
    let taskString = JSON.stringify(taskArray);

    fs.writeFileSync("AllTask.json", taskString);
    return true

}


function getAllTask() {
    const taskString = fs.readFileSync("AllTask.json");

    if (taskString) {
        taskArray = JSON.parse(taskString);
    } else {
        taskArray = [];
    }

    return taskArray;

}


function deleteTask(taskId) {
    //to delete sometiiiing or not keep then its !== 
    let result = taskArray.find((t) => t.taskId === taskId)

    if (!result) return false

    taskArray = taskArray.filter((task) => task.taskId !== taskId)
    let taskString = JSON.stringify(taskArray);

    fs.writeFileSync("AllTask.json", taskString);

    return true;
}


getAllTask();
console.log("loaded all task ");
module.exports = {
    addTask, getAllTask, deleteTask
};

