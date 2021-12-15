//sidebar imported
import sidebar from "./components/sidebar.js";
    let sideDiv = document.getElementById("sideBar");
    sideDiv.innerHTML= sidebar();

//product data array imported
import data from "./components/cb2_data.js";


//product section
let productData = JSON.parse(localStorage.getItem("cbProductData")) || [];

if(data.length > productData.length){
    data.forEach(element=>{
        productData.push(element);
    })
}

localStorage.setItem("cbProductData",JSON.stringify(productData))
displayItem(productData);


//product sort

//sort items
let selectedItem = document.getElementById("sortByPrice");
selectedItem.onchange=sortByPrice;

function sortByPrice(){
    var selectedOption = document.getElementById("sortByPrice").value;
    console.log(selectedOption); 
   if(selectedOption == "low"){
     productData = productData.sort(function (a,b){
         if(a.price > b.price) return 1;
         if(a.price < b.price) return -1;
         return 0;
     })
   }
  
   if(selectedOption == "high"){
    productData = productData.sort(function (a,b){
        if(a.price > b.price) return -1;
        if(a.price < b.price) return 1;
        return 0;
    })
  }
  
  if(selectedOption == "new"){
    productData = productData.sort(function (a,b){
        if(a.added > b.added) return -1;
        if(a.added < b.added) return 1;
        return 0;
    })
  }
  
  
  if(selectedOption == "normal"){
    let productNormal = JSON.parse(localStorage.getItem("cbProductData"))
    productData = productNormal;
  }
  
  displayItem(productData);
  }
  

  
// filter 
var gender="";
var manCount = 0;
var mensProduct = document.getElementById("men");
mensProduct.addEventListener("click",function(){
    manCount++;
    gender = "men";
    filterbyman(gender);
});
var womanCount = 0;
var womensProduct = document.getElementById("women");
womensProduct.addEventListener("click",function(){
    womanCount++;
    gender = "women";
    filterbywoman(gender);
});

function filterbyman(gender){
    var product = allProducts.filter(item => {
        if(item.gender== gender){
           return item;
        }  
    })
    
    if(manCount % 2 == 1){
        displayItem(product,1);
    }
    else{
        displayItem(allProducts,1); 
    }
}

function filterbywoman(gender){
    var product = allProducts.filter(item => {
        if(item.gender== gender){
           return item;
        }  
    })
  
    if(womanCount % 2 == 1){
        displayItem(product,1);
    }
    else{
        displayItem(allProducts,1); 
    }
}






function displayItem(productData){
    
    document.getElementById("totalItem").textContent=`${productData.length} ITEMS`;

    let productContainer = document.getElementById("productContainer");
    productContainer.innerHTML=null;

    productData.forEach((item,index)=>{

        console.log(item.img1);

        var div = document.createElement("div");

        var image = document.createElement("img");
        image.src= `${item.img1}`;
        image.addEventListener("mouseover",function(){
            image.src= `${item.img2}`;
        })
        image.addEventListener("mouseout",function(){
            image.src= `${item.img1}`;
        })

        var bottomDiv = document.createElement("div");
        bottomDiv.setAttribute("id","bottomDiv");

        var name = document.createElement("p");
        name.setAttribute("id","productName");
        name.textContent=item.name;

        var category = document.createElement("p");
        category.setAttribute("id","productCategory");
        category.textContent=item.catagory;

        var price = document.createElement("p");
        price.setAttribute("id","productPrice");
        price.textContent=`$${item.price}`;

        var ship = document.createElement("p");
        ship.setAttribute("id","productShip");
        ship.textContent = "ships free";
        ship.style.color="red";
        ship.style.marginTop = "20px"

        bottomDiv.append(name,category,price,ship)

        div.append(image,bottomDiv)
        
        productContainer.append(div);
    })
}
