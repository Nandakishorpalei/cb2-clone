//sidebar imported
import sidebar from "./components/sidebar.js";
    let sideDiv = document.getElementById("sideBar");
    sideDiv.innerHTML= sidebar();

//product data array imported
import data from "./components/cb2_data.js";

data.forEach(el=>{
    console.log(el.name);
})


//sort items
let selectedItem = document.getElementById("sortByPrice");
selectedItem.onchange=sortByPrice;

function sortByPrice(){
    let selectedItemIs =  document.getElementById('sortByPrice').value;

   console.log('selectedItemIs:', selectedItemIs)

}


//product section
let productData = JSON.parse(localStorage.getItem("cbProductData")) || [];

if(data.length > productData.length){
    data.forEach(element=>{
        productData.push(element);
    })
}

localStorage.setItem("cbProductData",JSON.stringify(productData))
displayItem(productData)

function displayItem(productData){
    
    document.getElementById("totalItem").textContent=`${productData.length} ITEMS`;

    let productContainer = document.getElementById("productContainer");
    productContainer.innerHTML=null;

    productData.forEach((item,index)=>{

        var div = document.createElement("div");

        var image = document.createElement("img");
        image.src=item.img1;

        var bottomDiv = document.createElement("div");
        bottomDiv.setAttribute("id","bottomDiv");

        var name = document.createElement("p");
        name.setAttribute("id","productName");
        name.textContent=item.name;

        var category = document.createElement("p");
        category.setAttribute("id","productCategory");
        category.textContent=item.category;

        var price = document.createElement("p");
        price.setAttribute("id","productPrice");
        price.textContent=`$${item.price}`;

        var ship = document.createElement("p");
        ship.setAttribute("id","productShip");
        ship.textContent = "free";

        bottomDiv.append(name,category,price,ship)

        div.append(image,bottomDiv)
        
        productContainer.append(div);
    })
}
