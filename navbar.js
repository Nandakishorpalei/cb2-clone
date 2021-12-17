//Menu button hover functionality for sidebar

let x = 1;
let menuBtn = document.getElementById("menuBtn");
let sidebar = document.getElementById("sidebar");
let menuicon = document.getElementById("menuicon");

menuBtn.addEventListener("click", () => {
if (x === 1) {
  sidebar.style.left = "0";
  menuicon.innerText = "close";
  x += 1;
} else {
  sidebar.style.left = "-350px";
  menuicon.innerText = "menu";
  x -= 1;
}
});

//location button functionality
locationBtn.addEventListener("mouseover", () =>{
  locationBtn.style.borderBottom = "4px solid black";

  accDetails.style.display = "none";
  profileBtn.style.borderBottom = "none";

  cartDetails.style.display = "none";
  cartBtn.style.borderBottom = "none";
})
locationBtn.addEventListener("mouseleave", () =>{
  locationBtn.style.borderBottom = "none";
})


//Profile button hover functionality

let profileBtn = document.getElementById("profileBtn");
let accDetails = document.getElementById("accDetails");

profileBtn.addEventListener("mouseover", () =>{
    accDetails.style.display = "flex";
    profileBtn.style.borderBottom = "4px solid black";
})

accDetails.addEventListener("mouseenter", () =>{
  accDetails.style.display = "flex";
  profileBtn.style.borderBottom = "4px solid black";  
  
  cartDetails.style.display = "none";
  cartBtn.style.borderBottom = "none";
})

accDetails.addEventListener("mouseleave", () =>{
  accDetails.style.display = "none";
  profileBtn.style.borderBottom = "none";
})

//wishlist button hover functionality
wishBtn.addEventListener("mouseover", () =>{
  wishBtn.style.borderBottom = "4px solid black";

  accDetails.style.display = "none";
  profileBtn.style.borderBottom = "none";

  cartDetails.style.display = "none";
  cartBtn.style.borderBottom = "none";
})
wishBtn.addEventListener("mouseleave", () =>{
  wishBtn.style.borderBottom = "none";
})

//cart button functionality
let cartBtn = document.getElementById("cartBtn");
let cartDetails = document.getElementById("cartDetails");

cartBtn.addEventListener("mouseover", () =>{
  cartDetails.style.display = "flex";
  cartBtn.style.borderBottom = "4px solid black";

  accDetails.style.display = "none";
  profileBtn.style.borderBottom = "none";
})

cartDetails.addEventListener("mouseenter", () =>{
  cartDetails.style.display = "flex";
  cartBtn.style.borderBottom = "4px solid black";    
})

cartDetails.addEventListener("mouseleave", () =>{
  cartDetails.style.display = "none";
  cartBtn.style.borderBottom = "none";
})

