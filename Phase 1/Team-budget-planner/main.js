let objects = [];

function storeData() {

    getData();
 
 let obj = {
    clientName: document.getElementById("cname").value,
    projectName :document.getElementById("pname").value,
     Budget: document.getElementById("budget").value
  
 }
objects.push(obj);

localStorage.setItem("proObj", JSON.stringify(objects)) ;


//console.log(test);

console.log(objects);
console.log("Data stored in local storage");
//displayData();
}

function getData(){

    let retrivedData = localStorage.getItem("proObj");
    if(retrivedData != null)
    objects = JSON.parse(retrivedData);

  
}

function clearFormData(){
   // localStorage.clear();
   document.form.reset();
}

function displayData(){
    getData();


var tbl = document.getElementById("myTable");



var x = tbl.rows.length;
while(--x){
    tbl.deleteRow(x);

}



 for (let i = 0; i < objects.length; i++) {
    
     var r = tbl.insertRow();
     var cell1= r.insertCell();
     var cell2= r.insertCell();
     var cell3= r.insertCell();

     cell1.innerHTML = objects[i].clientName;
     cell2.innerHTML = objects[i].projectName;
     cell3.innerHTML = "$"+ objects[i].Budget;

 
 }
 calcTotalBudget();
 let totatBudget2 = "Total Budget is : $" +totalBudget ;
 var r2 =tbl.insertRow();
 r2.innerHTML = totatBudget2 ;
 
}
let totalBudget=0;

function calcTotalBudget(){

totalBudget = objects.reduce((a,b)=> + a + +b.Budget,0);

}
 



  