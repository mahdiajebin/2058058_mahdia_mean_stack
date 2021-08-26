
let fs = require("fs");

let UserRecords = JSON.parse(fs.readFileSync("UserRecords.json").toString());


// employess.push(emp4);
// let employeeString = JSON.stringify(employess);

// fs.writeFileSync("employee.json",employeeString  )
// console.log("data stored in file ")
let readline = require("readline-sync");

let id = readline.questionInt("Enter the id: ")

// const idExists = employees.some(id => employees.id === employees.id);
// if(idExists) {

//   console.log("Id exists: please enter new one ")
//   id = readline.questionInt("Enter the id: ")

// }
let name = readline.question("Enter your name: ");
let age = readline.question("Enter your age: ");








//Date 
// current timestamp in milliseconds
let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();


// prints date & time in YYYY-MM-DD HH:MM:SS format
let currentDate = (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
console.log(currentDate);


let empNew = { id: id, name: name, age: age, currentDate };
UserRecords.push(empNew);
//let empString = JSON.stringify(emp4); //converting object to string 


fs.writeFileSync("UserRecords.json", JSON.stringify(UserRecords))

console.log("new data stored");
