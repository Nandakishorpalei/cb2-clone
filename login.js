//user authentication



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

// navbar import section end

document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    login()
})

let currentUser;

async function login(){

    currentUser = document.getElementById("username").value;

    let loginData = {
        username:document.getElementById("username").value,
        password:document.getElementById("password").value
    }

   loginData = JSON.stringify(loginData);

   let loginApi = "https://masai-api-mocker.herokuapp.com/auth/login";



  let response = await fetch(loginApi,{
       method:"POST",

       body:loginData,
       headers:{
           "Content-Type":"application/json"
       }
   })

let data = await response.json();
console.log('data:', data)
let user = document.getElementById("username").value;
getData(user,data.token)
}


async function getData(username,token){
console.log(username,token)
try{


    let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

    let response =await fetch(api,{
        headers:{
            "Content-Type": "application/json",
            
            Authorization: `Bearer ${token}`,
        },
       
    });
    
    let data = await response.json();
    console.log('data:', data)

    if(currentUser == data.username){
        let user={
            authenticated:true
        }
      localStorage.setItem("authenticate",JSON.stringify(user));
      window.location.href = "newPage.html";
        
    }else{
        alert("invalid credentials! check again");
    }
}
catch(error){
    console.log('error:', error)

}
}








