(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("h1");t.textContent="Contact Us",e.appendChild(t)},t=()=>{const e=document.getElementById("content"),t=document.createElement("h1");t.textContent="Our Menu",e.appendChild(t)},n=(e,t)=>{const n=document.createElement("button");return n.textContent=e,n.addEventListener("click",(()=>(e=>{document.getElementById("content").innerHTML="",e()})(t))),n},d=()=>{const d=document.getElementById("content"),o=document.createElement("h1"),c=document.createElement("p"),a=document.createElement("div");o.textContent="Welcome to SisBrew!",c.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, dolorem veniam dolorum ex, ipsa explicabo magnam accusamus aspernatur repellendus ut vero ducimus. Magni, illum qui incidunt error libero ex cupiditate!",a.appendChild(n("Our Menu",t)),a.appendChild(n("Contact Us",e)),d.appendChild(o),d.appendChild(c),d.appendChild(a)};document.body.onload=()=>{(()=>{const o=document.getElementById("navbar");o.appendChild(n("Home",d)),o.appendChild(n("Menu",t)),o.appendChild(n("Contact Us",e))})(),d()}})();