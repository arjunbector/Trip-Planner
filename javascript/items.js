var path = window.location.pathname;
var page = path.split("/").pop();
let navbar = "";
if (page == "index.html") {
  navbar = `<ul>
    <li class="item"><a class="navbar_btn active" href="./index.html">Home</a></li>
    <li class="item"><a class="navbar_btn " href="./index.html#destinations">Trips</a></li>
    <li class="item"><a class="navbar_btn " href="./index.html#home_resorts">Resorts</a></li>
    <li class="item"><a class="navbar_btn " href="./index.html#page-footer">Contact</a></li>
    </ul>`;
    console.log("TRUEEEE")
}
 navbar = `<ul>
    <li class="item"><a class="navbar_btn active" href="../index.html">Home</a></li>
    <li class="item"><a class="navbar_btn " href="./index.html#destinations">Trips</a></li>
    <li class="item"><a class="navbar_btn " href="./index.html#home_resorts">Resorts</a></li>
    <li class="item"><a class="navbar_btn " href="./index.html#page-footer">Contact</a></li>
    </ul>`;

document.getElementById("navbar").innerHTML = navbar;
const footer = ``;
