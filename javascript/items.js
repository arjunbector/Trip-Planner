import  navbar  from "./navbar.js";
import footer from "./footer.js";
import hamburger from "./hamburger.js";

function displayMenu(){
  console.log('Button clicked')
  document.getElementById("hamburger-button").style.display = "none";
  document.getElementById("hamburger-menu").style.transform = "translateY(0)";
}
function hideMenu(){
  console.log("Hide menu clicked");
  document.getElementById("hamburger-button").style.display = "block";
  document.getElementById("hamburger-menu").style.transform = "translateY(-100%)";


}

document.getElementById("navbar").innerHTML = navbar;
document.getElementById("hamburger-wrapper").innerHTML = hamburger;
document.getElementById('page-footer').innerHTML = footer;