if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}
else {
    ready();
}
var itemsobj = [];
// function storeData(image,name,price) {
//    // clearBox();
//   //getData();
//  // var diva = document.getElementsByClassName('thecard')[0];
//     let obj: Product= {
//         //  itemImages: (<HTMLInputElement>document.getElementsByName("itemImage")).src,
//         itemImages:(<HTMLInputElement>document.getElementsByClassName('itemImage')[0]).src,
//         itemNames: (<HTMLInputElement>document.getElementsByClassName("name")[0]).value,
//         itemPrices: parseFloat( (<HTMLInputElement>document.getElementsByClassName('price')[0]).value),
//      }
// // for(let i = 0; i < itemNames.length; i++) {
// //     itemsobj.push(itemNames[i].value);
// // }
//         itemsobj.push(obj);
//     // itemsobj.push(obj);
//     localStorage.setItem("proObj", JSON.stringify(itemsobj)) ;
//     console.log(itemsobj);
//    console.log("Data stored in local storage");
//   }
function getData() {
    var retrivedData = localStorage.getItem("proObj");
    if (retrivedData != null)
        itemsobj = JSON.parse(retrivedData);
}
function displayData() {
    getData();
    var tbl = document.getElementById("myTable");
    var x = tbl.rows.length;
    while (--x) {
        tbl.deleteRow(x);
    }
    for (var i = 0; i < itemsobj.length; i++) {
        var r = tbl.insertRow();
        var cell2 = r.insertCell();
        var cell3 = r.insertCell();
        //images.src= objects[i].image;
        //  const images = document.createElement('img') as HTMLImageElement;
        // images.src= itemsobj[i].itemImages;
        cell2.innerHTML = itemsobj[i].itemNames;
        cell3.innerHTML = "$" + itemsobj[i].itemPrices;
    }
    calcTotalPrice();
    var totatBudget2 = "Total Budget is : $" + totalBudget;
    var r2 = tbl.insertRow();
    r2.innerHTML = totatBudget2;
}
var totalBudget = 0;
function calcTotalPrice() {
    totalBudget = itemsobj.reduce(function (a, b) { return +a + +b.itemPrices; }, 0);
}
var count = [];
function displaycount() {
    var table = document.getElementById('itemsInCart');
    console.log(table);
    for (var i = 0; i < itemsobj.length; i++) {
        function cartitems() {
            count = itemsobj.length;
            return count;
        }
        table.append(cartitems());
    }
}
function ready() {
    var addToCartButton = document.getElementsByClassName('add-to-cart-button');
    for (var i = 0; i < addToCartButton.length; i++) {
        var button = addToCartButton[i];
        button.addEventListener('click', addToCartClicked);
    }
}
function addToCartClicked(event) {
    getData();
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var obj = {
        //  itemImages: (<HTMLInputElement>document.getElementsByName("itemImage")).src,
        itemImages: shopItem.getElementsByClassName('itemImage')[0].src,
        itemNames: shopItem.getElementsByClassName('name')[0].value,
        itemPrices: parseFloat(shopItem.getElementsByClassName('price')[0].value)
    };
    itemsobj.push(obj);
    // itemsobj.push(obj);
    localStorage.setItem("proObj", JSON.stringify(itemsobj));
    console.log(itemsobj);
    console.log("Data stored in local storage");
    // var image = shopItem.getElementsByClassName('itemImage')[0].src as HTMLInputElement;
    // var name = shopItem.getElementsByClassName('name')[0].value as HTMLInputElement;
    // var price = shopItem.getElementsByClassName('price')[0].value as HTMLInputElement;
    //displayData(itemImages,itmeNames,itemPrices);
}
// function clearBox()
// {
//     var diva =(<HTMLInputElement>document.getElementById('counter'));
//     while(diva.Child){
//         diva.removeChild(diva.firstChild);
//     }
// }
