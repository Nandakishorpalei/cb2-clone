// cartData globally declared
let cartData;

//import cart middle & cart right
import cartMiddle from "./components/cartMiddle.js";

// import footer & append 
import footer from "./components/footer.js";
let footerDiv = document.getElementById("footerDiv");
footerDiv.innerHTML = footer();

// add below line in head section for footer style
{/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"> */}

//navbar Import section start 

import navbar from "./components/navbarImport.js";
let navbarDiv = document.getElementById("navbarDiv");
navbarDiv.innerHTML = navbar();

var script = document.createElement('script');         
script.src = "navbar.js";    
 document.head.appendChild(script)

// cart page display setting
let zeroContainer = document.getElementById("zeroCartContainer");
let cartContainer = document.getElementById("cartContainer");
let cartCarousel = document.getElementById("carouselExampleControls");
let rightContainer = document.getElementById("rightCartContainer");



cartDataSetting();
async function cartDataSetting(){
    try{

   cartData = await JSON.parse(localStorage.getItem("cbWishlistItem")) ;
    console.log('cartData:', cartData)

  let cartLength = cartData.length;

document.getElementById("cartCount").textContent=`(${cartLength} item)`;


if(cartData.length == 0){

    zeroContainer.style.display="flex";
    cartContainer.style.display="none";
    cartCarousel.style.display="none";
    rightContainer.style.display="none";
} 
else{
    zeroContainer.style.display="none";
    cartContainer.style.display="flex";
    cartCarousel.style.display="block";
    rightContainer.style.display="block";
}
    displayCartProducts(cartData);


}
catch(error){

}
finally{
    console.log("cart page designed");
}
}


// show cart products

async function displayCartProducts(products){

try{

let cartItems = products.length;
document.getElementById("cartCount").textContent=`(${cartItems} item)`;

// price calculate
let merchandiseValue = document.getElementById("merchandiseValue");
let shippingValue = document.getElementById("shippingValue");
let taxValue = document.getElementById("taxValue");
let totalEstValue = document.getElementById("totalEstValue");

shippingValue.textContent = "$120.00";
taxValue.textContent = "$33.00";

let totalItemValue = products.reduce((ac,el)=>{
    return  ac+el.price
    },0);

let cartProductContainer = document.getElementById("cartProductContainer");
cartProductContainer.innerHTML=null;

products.forEach((element,index) => {
   console.log(element)

        //create productContainer 
    let cartProductDetail = document.createElement("div");
    cartProductDetail.setAttribute("id","cartProductDetail");
   
    // product top section
    let cartProductTopSection = document.createElement("div");
    cartProductTopSection.setAttribute("id","cartProductTopSection");


   
    // product top left
    let topLeft = document.createElement("div");
    topLeft.setAttribute("id","topLeft");
    let productName = document.createElement("h5");
    productName.setAttribute("id","productName");
    productName.textContent=element.name;
 
    let sku = document.createElement("p");
    sku.setAttribute("id","sku");
    let skuRandom = Math.floor(Math.random()*10000)+10000;
    sku.textContent=`sku${skuRandom}`

    topLeft.append(productName,sku);

//     //product top middle
    let topMiddle = document.createElement("div");
    topMiddle.setAttribute("id","topMiddle");
    let quantity = document.createElement("input");
    quantity.setAttribute("id","quantity");
    quantity.defaultValue="1";
    quantity.setAttribute("type","number");
    let update = document.createElement("button");
    update.textContent = "update";
    update.setAttribute("id","update");
    update.textContent="update";

    //count update 
    let itemQuantity = +quantity.value;
    quantity.onchange = updateCount;

    function updateCount(){
        itemQuantity = quantity.value;
    }
   
    merchandiseValue.textContent = `$${((totalItemValue*itemQuantity)).toFixed(2)}`;
    totalEstValue.textContent = `$${((totalItemValue*itemQuantity)+ 153 ).toFixed(2)}`;
    update.addEventListener("click",function(){
        merchandiseValue.textContent = `$${((totalItemValue*itemQuantity)).toFixed(2)}`;
        document.getElementById("price").textContent = `$${((totalItemValue*itemQuantity)).toFixed(2)}`;
        totalEstValue.textContent = `$${((totalItemValue*itemQuantity)+ 153 ).toFixed(2)}`;

        let totalValueToSend = ((totalItemValue*itemQuantity)+ 153 ).toFixed(2);
        let cartPrice = {
            price:totalValueToSend
        }
        localStorage.setItem("cartPrice",JSON.stringify(cartPrice));

    })

    topMiddle.append(quantity,update);


        // //product top right
    let topRight = document.createElement("div");
    topRight.setAttribute("id","topRight");
    let price = document.createElement("price");
    price.setAttribute("id","price");
    price.textContent = `$${(totalItemValue*itemQuantity)}.00`;
    topRight.append(price);


    //     //product Bottom section
    let cartProductBottomSection = document.createElement("div");
    cartProductBottomSection.setAttribute("id","cartProductBottomSection");

//     //product bottom left
    let bottomLeft = document.createElement("div");
    bottomLeft.setAttribute("id","bottomLeft");
    let productImage = document.createElement("img");
    productImage.setAttribute("id","productImage");
    productImage.src = element.img1;
    bottomLeft.append(productImage);

    //product bottom middle 
    let bottomMiddle = document.createElement("div");
    bottomMiddle.setAttribute("id","bottomMiddle");
    bottomMiddle.innerHTML = cartMiddle();

    
   // product bottom right
    let bottomRight = document.createElement("div");
    bottomRight.setAttribute("id","bottomRight");
    bottomRight.style.width="200px";

    let cross = document.createElement("div");
    cross.setAttribute("class","bottomRightDiv");
    let crossImage = document.createElement("img");
    crossImage.setAttribute("id","imgCross");
    crossImage.src = "https://cdn-icons-png.flaticon.com/512/748/748122.png";
    let crossContent = document.createElement("p");
    crossContent.textContent="Remove";

    cross.append(crossImage,crossContent);

    cross.addEventListener("click",function(){
        cartData.splice(index,1);
        localStorage.setItem("cbWishlistItem",JSON.stringify(cartData));

        if(cartData.length == 0){
        
            zeroContainer.style.display="flex";
            cartContainer.style.display="none";
            cartCarousel.style.display="none";
            rightContainer.style.display="none";
        } 
        else{
            zeroContainer.style.display="none";
            cartContainer.style.display="flex";
            cartCarousel.style.display="block";
            rightContainer.style.display="block";
        }


        displayCartProducts(cartData);
    })

    let download = document.createElement("div");
    download.setAttribute("class","bottomRightDiv");
    let downloadImage = document.createElement("img");
    downloadImage.setAttribute("id","imgDownload");
    downloadImage.src = "https://cdn-icons-png.flaticon.com/512/318/318168.png";
    let downloadContent = document.createElement("p");
    downloadContent.textContent="Save for later";

    download.append(downloadImage,downloadContent);

    bottomRight.append(cross,download);

    let hr = document.createElement("hr");


    cartProductTopSection.append(topLeft,topMiddle,topRight);

    cartProductBottomSection.append(bottomLeft,bottomMiddle,bottomRight)

    cartProductDetail.append(cartProductTopSection,hr,cartProductBottomSection);

    cartProductContainer.append(cartProductDetail);
});
}
catch(error){
 console.log('error:', error)
}
finally{
    console.log("cart data appended");
}

}






document.getElementById("applyButton").addEventListener("click",function(){
  let inputPromo =  document.getElementById("promoCode").value;

  let totalItemValue = cartData.reduce((ac,el)=>{
    return  ac+el.price
    },0);

    let itemQuantity = document.getElementById("quantity").value;

   if(inputPromo == "Masai30"){
    document.getElementById("totalEstValue").textContent = `$${((((totalItemValue*itemQuantity)+ 153) * 70 ) /100).toFixed(2) }`;
   }
})


document.getElementById("checkOutButton").addEventListener("click",function(){
    window.location.href = "checkoutshipping.html";
})