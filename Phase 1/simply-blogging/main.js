function clearFormData(){
    // localStorage.clear();
    document.form.reset();
 }
 

let objects = [];

function storeData() {
  // clearBox("card");
 //getData();
 clearBox();

 let obj = {
     title: document.getElementById("blogTitle").value,
     article :document.getElementById("article").value,
     image: document.getElementById("addImage").value
  
 }
objects.push(obj);

localStorage.setItem("proObj", JSON.stringify(objects)) ;


//console.log(test);

console.log(objects);
console.log("Data stored in local storage");

displayData();

}


function getData(){

    let retrivedData = localStorage.getItem("proObj");
    if(retrivedData != null)
    objects = JSON.parse(retrivedData);

  
}
// empty the div
function clearBox()
{
    var diva = document.getElementsByClassName('thecard')[0];
    while(diva.firstChild){
        diva.removeChild(diva.firstChild);
    }
}


function displayData(){ 

  //  clearBox("card");
//get data()
const table = document.getElementsByClassName('thecard')[0];
console.log(table);
    



for (let i = 0; i < objects.length; i++) {
  

 //   clearBox("card");

    function createCard(){


    const card =  document.createElement('div');
      card.className = " cardm bg-dark text-light m-5";
            //children 
            //card image 
            const images = document.createElement('img');
            images.className = "img rounded img-fluid myImage"
            images.src= objects[i].image;

            //card title 
            const topnumber = document.createElement('div');
            topnumber.className ="card-title h4 text-warning p-2 "
                //CHILD name 
                topnumber.innerHTML = objects[i].title;
            //card text
            const bottomnumber = document.createElement('div');
            //giving bottomnumber a class 
           bottomnumber.className = "card-text text-over";
            bottomnumber.innerHTML = objects[i].article;
    
    card.append(images)
    card.append(topnumber);
    card.append(bottomnumber);
  
    
    return card;
    }
    
        
    table.appendChild(createCard());


}
  
 

     
    
}







// <!-- 
// <div class="container" id="1">
//     <div class="row text-center" id="div">

//         <div class="col-md">
//             <div class="card" style="width: 18rem;">
//                 <img src="..." class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk
//                         of the card's content.</p>
//                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>

//         </div>


//     </div>
// </div> -->









// function createCard(title,article,image){



// const card = document.createElement('div');
// card.className = "col-md";
// const card2 = document.createElement('div');
// card2.className = "card";
// //img
// const img = document.createElement('img');
// img.src = image;

// //body
// const card3 = document.createElement('div');
// card3.className = "card-body";

// const blogT = document.createElement('h5');
// blogT.className = "card-title";
// blogT.innerText = title;

// const bArticle = document.createElement('p');
// bArticle.className = "card-text";
// bArticle.innerText = article;

// card.append(bArticle);
// card.append(blogT);
// card.append(img);

// return card,card2,card3;

// }

