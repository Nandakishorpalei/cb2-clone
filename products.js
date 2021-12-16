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

let selectedFilter;
let buttonContent = document.getElementById("containerSortButton");
let count = 0;

buttonContent.addEventListener("click",function(){
    count++;
if(count % 2 == 0){
document.getElementById("dropdownList").style.display="none";
}else{
    document.getElementById("dropdownList").style.display="block";
}
})

 document.getElementById("sequence").addEventListener("click",function(){
    selectedFilter= this.value;
       buttonContent.textContent = selectedFilter;
       sortByPrice(selectedFilter)
       document.getElementById("dropdownList").style.display="none";
 });

 document.getElementById("priceLowToHigh1").addEventListener("click",function(){
    selectedFilter= this.value;
       buttonContent.textContent = selectedFilter;
       sortByPrice(selectedFilter)
       document.getElementById("dropdownList").style.display="none";
});

document.getElementById("priceHighToLow2").addEventListener("click",function(){
    selectedFilter= this.value;
     buttonContent.textContent = selectedFilter;
     sortByPrice(selectedFilter)
     document.getElementById("dropdownList").style.display="none";
});

document.getElementById("newestFirst3").addEventListener("click",function(){
    selectedFilter= this.value;
   buttonContent.textContent = selectedFilter;
   sortByPrice(selectedFilter)
   document.getElementById("dropdownList").style.display="none";
});

function sortByPrice(selectedOption){

   if(selectedOption == "price, Low To High"){
     productData = productData.sort(function (a,b){
         if(a.price > b.price) return 1;
         if(a.price < b.price) return -1;
         return 0;
     })
   }
  
   if(selectedOption == "price, High To Low"){
    productData = productData.sort(function (a,b){
        if(a.price > b.price) return -1;
        if(a.price < b.price) return 1;
        return 0;
    })
  }
  
  if(selectedOption == "new"){
    productData = JSON.parse(localStorage.getItem("cbProductData"))
    productData = productData.reverse();
  }
  
  
  if(selectedOption == "Most Relevant"){
    let productNormal = JSON.parse(localStorage.getItem("cbProductData"))
    productData = productNormal;
  }
  
  displayItem(productData);
  }
  

//additional page

let hidenSort = true;
document.getElementById("categoryButton").addEventListener("click",()=>{
  if(hidenSort){
       document.getElementById("dropDownListcategory").style.display="block";
       hidenSort =false;
    }
  else{
       document.getElementById("dropDownListcategory").style.display="none";
       hidenSort =true;
  }
})

let hidenColor = true;
document.getElementById("categoryColor").addEventListener("click",()=>{
    if(hidenColor){
        document.getElementById("dropDownListcolor").style.display="block";
        hidenColor = false;
    }
    else{
        document.getElementById("dropDownListcolor").style.display="none";
        hidenColor = true;
    }
 })


 let hidenMaterial = true;
 document.getElementById("categoryMaterial").addEventListener("click",()=>{
     if(hidenMaterial){
        document.getElementById("dropDownListmaterial").style.display="block";
        hidenMaterial = false;
     }
     else{
        document.getElementById("dropDownListmaterial").style.display="none";
        hidenMaterial = true;
     }
    
 
 })


 let hidenPrice = true;
 document.getElementById("categoryPrice").addEventListener("click",()=>{
     if(hidenPrice){
        document.getElementById("dropDownListprice").style.display="block";
        hidenPrice = false;
     }
     else{
        document.getElementById("dropDownListprice").style.display="none";
        hidenPrice = true;
     }
 
 
 })


 let hidenType = true;
 document.getElementById("categoryType").addEventListener("click",()=>{
     if(hidenType){
        document.getElementById("dropDownListtype").style.display="block";
        hidenType = false;
     }
 else{
    document.getElementById("dropDownListtype").style.display="none";
    hidenType = true;
 }
 
 })


 let hidenDesign = true;
 document.getElementById("categoryDesign").addEventListener("click",()=>{
     if(hidenDesign){
        document.getElementById("dropDownListdesign").style.display="block";
        hidenDesign = false;
     }
     else{
        document.getElementById("dropDownListdesign").style.display="none";
        hidenDesign = true;
     }
    
 
 })


 let hidenFabric = true;
 document.getElementById("categoryFabric").addEventListener("click",()=>{
     if(hidenFabric){
        document.getElementById("dropDownListFabric").style.display="block";
        hidenFabric = false;
     }
else{
    document.getElementById("dropDownListFabric").style.display="none";
    hidenFabric = true;
}
 })

 
 document.getElementById("filterButton").addEventListener("click",function(){
     document.getElementById("additionalPageDiv").style.display="flex";
  document.getElementById("productPageContainer").style.opacity="0.5";

 });

 document.getElementById("closeAdditionalPage").addEventListener("click",function(){
    document.getElementById("additionalPageDiv").style.display="none";
    document.getElementById("productPageContainer").style.opacity="1";
 });
 
//sort section

// let selectedFilter;
// let buttonContent = document.getElementById("containerSortButton");
// let count = 0;

// buttonContent.addEventListener("click",function(){
//     count++;
// if(count % 2 == 0){
// document.getElementById("dropdownList").style.display="none";
// }else{
//     document.getElementById("dropdownList").style.display="block";
// }
// })

//  document.getElementById("sequence").addEventListener("click",function(){
//     selectedFilter= this.value;
//        buttonContent.textContent = selectedFilter;
//        document.getElementById("dropdownList").style.display="none";
//  });
//  document.getElementById("priceLowToHigh1").addEventListener("click",function(){
//     selectedFilter= this.value;
//        buttonContent.textContent = selectedFilter;
//        document.getElementById("dropdownList").style.display="none";
// });
// document.getElementById("priceHighToLow2").addEventListener("click",function(){
//     selectedFilter= this.value;
//      buttonContent.textContent = selectedFilter;
//      document.getElementById("dropdownList").style.display="none";
// });
// document.getElementById("newestFirst3").addEventListener("click",function(){
//     selectedFilter= this.value;
//    buttonContent.textContent = selectedFilter;
//    document.getElementById("dropdownList").style.display="none";
// });





// filter 
// var gender="";
// var manCount = 0;
// var mensProduct = document.getElementById("men");
// mensProduct.addEventListener("click",function(){
//     manCount++;
//     gender = "men";
//     filterbyman(gender);
// });
// var womanCount = 0;
// var womensProduct = document.getElementById("women");
// womensProduct.addEventListener("click",function(){
//     womanCount++;
//     gender = "women";
//     filterbywoman(gender);
// });

// function filterbyman(gender){
//     var product = allProducts.filter(item => {
//         if(item.gender== gender){
//            return item;
//         }  
//     })
    
//     if(manCount % 2 == 1){
//         displayItem(product,1);
//     }
//     else{
//         displayItem(allProducts,1); 
//     }
// }

// function filterbywoman(gender){
//     var product = allProducts.filter(item => {
//         if(item.gender== gender){
//            return item;
//         }  
//     })
  
//     if(womanCount % 2 == 1){
//         displayItem(product,1);
//     }
//     else{
//         displayItem(allProducts,1); 
//     }
// }






function displayItem(productData){
    
    document.getElementById("totalItem").textContent=`${productData.length} ITEMS`;

    let productContainer = document.getElementById("productContainer");
    productContainer.innerHTML=null;

    productData.forEach((item,index)=>{
        let selectedData = {
            data:item
        }
        var div = document.createElement("div");
        div.addEventListener("click",function(){
           localStorage.setItem("selectedData",JSON.stringify(selectedData)); 
        })

        console.log(item.img1);

        

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
