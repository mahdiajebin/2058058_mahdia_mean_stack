//load the fs modoule 
let fs = require("fs");

//this way data wont ovveride it will add new one

let readline = require("readline-sync");

let id = readline.questionInt("Enter the id: ")
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
console.log("current date and time " + currentDate);





// console.log("your name is " + name);
// console.log("your anme is " + id);

let UserRecords = [];
let emp = {id:id, name:name, age:age, currentDate};


UserRecords.push(emp);

let userString = JSON.stringify(UserRecords);


fs.writeFileSync("UserRecords.json",userString  )


console.log("data stored in file ")

//

// fs.writeFile("fileName",whattostore,(err)=> {
//     if(!err) { //if no error
//         console.log("Data stored in file sucessfully");
//     }
// })