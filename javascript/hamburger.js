const hamburger = `<button id="hamburger-button"  onclick="displayMenu()"><i class="fa-solid fa-bars"></i></button>
<div id="hamburger-menu">
    <ul>
        <li class="item"><a href="./index.html" onclick="hideMenu()">Home</a></li>
        <span class="underline"></span>
        <li class="item"><a href="./index.html#destinations" onclick="hideMenu()">Trips</a></li>
        <span class="underline"></span>
        <li class="item"><a href="./index.html#home_resorts"onclick="hideMenu()">Resorts</a></li>
        <span class="underline"></span>
        <li class="item"><a href="./index.html#page-footer"onclick="hideMenu()">Contact</a></li>
        <button id="xmark-button" onclick="hideMenu()">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </ul>
</div>`
function displayMenu(){
    document.getElementById("hamburger-button").style.display = "none";
    document.getElementById("hamburger-menu").style.transform = "translateY(0)";
  }
  function hideMenu(){
    document.getElementById("hamburger-button").style.display = "block";
    document.getElementById("hamburger-menu").style.transform = "translateY(-100%)";
  }
export {hamburger, displayMenu, hideMenu};