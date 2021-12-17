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


document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    register()
});

async function register(){
let desc = (Math.floor(Math.random()*1000000)).toString();

    let registeredData = {
    name : document.getElementById('fullName').value,
   email :document.getElementById('email').value,
   password :document.getElementById('password').value,
   username :document.getElementById('username').value,
   mobile :document.getElementById('phone').value,
   description:desc
    }

    registeredData = JSON.stringify(registeredData);
    console.log('data:', registeredData)

    let registerApi = "https://masai-api-mocker.herokuapp.com/auth/register";

   let response = await fetch(registerApi,{
        method:"POST",

        body:registeredData,
        headers:{
            "Content-Type":"application/json"
        },

    });

    let data = await response.json();
    console.log('data:', data)

    if(data.error===false){
        window.location.href="login.html";
    }
}