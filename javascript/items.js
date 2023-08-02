import  navbar  from "./navbar.js";
import footer from "./footer.js";
import {hamburger, displayMenu, hideMenu} from "./hamburger.js";
document.getElementById("navbar").innerHTML = navbar;
document.getElementById("hamburger-wrapper").innerHTML = hamburger;
document.getElementById('page-footer').innerHTML = footer;
window.displayMenu = displayMenu;
window.hideMenu = hideMenu;