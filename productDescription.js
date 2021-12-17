// appending data script=========>

// let sampleData = {
//   img1: "https://cb2.scene7.com/is/image/CB2/BalanceTkSkPllwCvr20X20inSHF21/$web_plp_card$/210409182016/20-balance-turkish-silk-pillow.jpg",
//   img2: "https://cb2.scene7.com/is/image/CB2/TurkishSilkPillowGroupFHF21?$web_pdp_main_carousel_thumb_md$",
//   img3: "https://cb2.scene7.com/is/image/CB2/BalanceTkSkPllwCvr20X20inSSF21?$web_pdp_main_carousel_thumb_md$",
//   img4: "https://cb2.scene7.com/is/image/CB2/BalanceTkSkPllwCv20X20inAV2SSF21?$web_pdp_main_carousel_thumb_md$",
//   name: "20 Balance Turkish Silk Pillow",
//   catagory: "Bedding and Bath",
//   price: 149.0,
// };

let sampleData = JSON.parse(localStorage.getItem("selectedData"));
console.log("sampleData:", sampleData);

let leftBox = document.getElementById("leftBox");
let middlebox = document.getElementById("middleBox");
let rightBox = document.getElementById("rightBoxContent");
let body = document.querySelector("body");

const appendData = ({ img1, img2, img3, img4, name, catagory, price }) => {
  console.log("catagory:", catagory);
  console.log("name:", name);
  // for leftBox section
  let lImg1 = document.createElement("img");
  lImg1.src = img1;

  let lImg2 = document.createElement("img");
  lImg2.src = img2;

  let lImg3 = document.createElement("img");
  lImg3.src = img3;

  let lImg4 = document.createElement("img");
  lImg4.src = img4;

  leftBox.append(lImg1, lImg2, lImg3, lImg4);

  //     for middleBox section
  let mImg1 = document.createElement("img");
  mImg1.src = img1;

  let mImg2 = document.createElement("img");
  mImg2.src = img2;

  let mImg3 = document.createElement("img");
  mImg3.src = img3;

  let mImg4 = document.createElement("img");
  mImg4.src = img4;

  middlebox.append(mImg1, mImg2, mImg3, mImg4);

  // for rightBox section

  let rightTitle = document.getElementById("name");
  rightTitle.innerHTML = name;

  let rightPrice = document.getElementById("price");
  rightPrice.innerHTML = `$${price}`;

  let dragTitle = document.getElementById("dragTitle");
  dragTitle.innerHTML = name;

  let cat = document.getElementById("category");
  cat.innerHTML = catagory;

  //   product count script ===================>

  let btn = document.getElementById("addToCartBtn");
  btn.addEventListener("click", () => {
    addDragDetail({ price, img1 }, count);
  });

  //setting default attribute to disabled of minus button
  document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

  let count = 1;

  document.querySelector(".plus-btn").addEventListener("click", () => {
    count = document.getElementById("quantity").value;

    count++;

    document.getElementById("quantity").value = count;

    if (count > 1) {
      document.querySelector(".minus-btn").removeAttribute("disabled");
      document.querySelector(".minus-btn").classList.remove("disabled");
    }
    countFunction({ price }, count);
  });

  document.querySelector(".minus-btn").addEventListener("click", () => {
    count = document.getElementById("quantity").value;

    count--;

    document.getElementById("quantity").value = count;

    if (count == 1) {
      document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
    }
    countFunction({ price }, count);
  });

  // addDragDetail({ price }, count);
};
appendData(sampleData);

let newCount;
function countFunction(price, count) {
  newCount = count;
}

// script for dragdown cartdetail box

function addDragDetail({ price, img1 }, count) {
  if (newCount !== undefined) {
    count = newCount;
  }

  console.log("count:", count);
  console.log("price:", price);
  let cartDiv = document.getElementById("cartDiv2");
  cartDiv.style.display = "block";

  let remove = document.getElementById("remove");
  remove.addEventListener("click", () => {
    cartDiv.style.display = "none";
  });

  let imgBox = document.getElementById("leftImgBox");
  let img = document.createElement("img");
}

// script for dragdown

// let detailOne = document.getElementsByClassName("detailOne");
let hiddenBox1 = document.getElementById("hiddenBox1");

function showBtn() {
  hiddenBox1.style.display = "block";
  hiddenBox1.style.maxHeight = "fit-content";
  hiddenBox1.style.transition = "all 0.5s ease";
  //     hiddenBox1.style.backfaceVisibility = "hidden";
  //     hiddenBox1.style.willChange = "maxHeight";
}

function hiddenBtn() {
  hiddenBox1.style.display = "none";
  hiddenBox1.style.transition = "all 0.5s ease";
}

let hiddenBox2 = document.getElementById("hiddenBox2");

function showBtn2() {
  hiddenBox2.style.display = "block";
  hiddenBox2.style.maxHeight = "fit-content";
  hiddenBox2.style.transition = "all 0.5s ease";
  //     hiddenBox2.style.backfaceVisibility = "hidden";
  //     hiddenBox2.style.willChange = "maxHeight";
}

function hiddenBtn2() {
  hiddenBox2.style.display = "none";
  hiddenBox2.style.transition = "all 0.5s ease";
}

let hiddenBox3 = document.getElementById("hiddenBox3");

function showBtn3() {
  hiddenBox3.style.display = "block";
  hiddenBox3.style.maxHeight = "fit-content";
  hiddenBox3.style.transition = "all 0.5s ease";
  //     hiddenBox3.style.backfaceVisibility = "hidden";
  //     hiddenBox3
  style.willChange = "maxHeight";
}

function hiddenBtn3() {
  hiddenBox3.style.display = "none";
  hiddenBox3.style.transition = "all 0.5s ease";
}

// showCartData();
// btn.addEventListener("click", showCartData);
