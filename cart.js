// cartData globally declared
let cartData;

//import cart middle & cart right
import cartMiddle from "./components/cartMiddle.js";
import cartRight from "./components/cartRight.js";

// cart page display setting

cartDataSetting();
async function cartDataSetting(){
    try{

   cartData = await JSON.parse(localStorage.getItem("cbWishlistItem")) ;
    console.log('cartData:', cartData)

  let cartLength = cartData.length;

document.getElementById("cartCount").textContent=`(${cartLength} item)`;

let zeroContainer = document.getElementById("zeroCartContainer");
let cartContainer = document.getElementById("cartContainer");
let cartCarousel = document.getElementById("carouselExampleControls");

if(cartData.length == 0){

    zeroContainer.style.display="flex";
    cartContainer.style.display="none";
    cartCarousel.style.display="none";

} 
else{
    zeroContainer.style.display="none";
    cartContainer.style.display="flex";
    cartCarousel.style.display="block";

    displayCartProducts(cartData);
}


}
catch(error){

}
finally{
    console.log("cart page designed");
}
}


// show cart products

function displayCartProducts(products){



let cartProductContainer = document.getElementById("cartProductContainer");
cartProductContainer.innerHTML=null;

    products.forEach((element,index) => {

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
    

    //product top middle
    let topMiddle = document.createElement("div");
    topMiddle.setAttribute("id","topMiddle");
    let quantity = document.createElement("input");
    quantity.setAttribute("id","quantity");
    quantity.value=1;
    let update = document.createElement("button");
    update.setAttribute("id","update");
    update.textContent="update"
    topMiddle.append(quantity,update);
    console.log(quantity,update)

    //product top right
    let topRight = document.createElement("div");
    topRight.setAttribute("id","topRight");
    let price = document.createElement("price");
    price.setAttribute("id","price");
    price.textContent = element.price;
    topRight.append(price);
    console.log(price);

    cartProductTopSection.append(topLeft,topMiddle,topRight);


    //product Bottom section
    let cartProductBottomSection = document.createElement("div");
    cartProductBottomSection.setAttribute("id",);

    //product bottom left
    let bottomLeft = document.createElement("div");
    bottomLeft.setAttribute("id","bottomLeft");
    let productImage = document.createElement("img");
    productImage.setAttribute("id","productImage");
    productImage.src = element.img1;
    bottomLeft.append(productImage);

    // //product bottom middle 
    // let bottomMiddle = document.createElement("div");
    // bottomMiddle.setAttribute("id","bottomMiddle");
    // bottomMiddle = cartMiddle();
    
    // // product bottom right
    // let bottomRight = document.createElement("div");
    // bottomRight.setAttribute("id","bottomRight");
    // bottomRight = cartRight();


    cartProductBottomSection.append(bottomLeft);
  document.body.append(cartProductTopSection)
    cartProductDetail.append(cartProductTopSection,cartProductBottomSection);

    cartProductContainer.append(cartProductDetail);
    
    });

}