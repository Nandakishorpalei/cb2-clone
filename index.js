

import navbar from "./components/navImport.js"
let navImport = document.getElementById("navImport");
navImport.innerHTML=navbar();
console.log(navbar)

var script = document.createElement('script');
          
        script.src = "navbar.js";
          
   document.head.appendChild(script)