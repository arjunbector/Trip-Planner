var path = window.location.pathname;
var page = path.split("/").pop();

 const navbar = `<ul>
    <li class="item"><a class="navbar_btn active" href="./index.html">Home</a></li>
    <li class="item"><a class="navbar_btn " href="./index.html#destinations">Trips</a></li>
    <li class="item"><a class="navbar_btn " href="./index.html#home_resorts">Resorts</a></li>
    <li class="item"><a class="navbar_btn " href="./index.html#page-footer">Contact</a></li>
    </ul>`;

document.getElementById("navbar").innerHTML = navbar;

const footer = `<div class="wrapper-social-media-links" style="min-width: 200px;">
<h6 class="footer-heading bold center" style="margin-left: 7px;">Follow Us</h6>
<div class="social-media-links">
    <a href="" class="footer-link"><i class="fa-brands fa-facebook-f social-media-icon"></i> </a>
    <a href="" class="footer-link"><i class="fa-brands fa-instagram social-media-icon"></i></a>
    <a href="" class="footer-link"><i class="fa-brands fa-twitter social-media-icon"></i></a>
    <a href="" class="footer-link"><i class="fa-brands fa-youtube social-media-icon"></i></a>
</div>
</div>
<div class="support"style="min-width: 200px;">
<h6 class="footer-heading bold center">Support</h6>
<ul class="footer-list">
    <a href="" class="footer-link">
        <li class="footer-list-items center">Contact us</li>
    </a>
    <a href="" class="footer-link">
        <li class="footer-list-items center">FAQ</li>
    </a>
    <a href="" class="footer-link">
        <li class="footer-list-items center">Customer Care</li>
    </a>
</ul>
</div>
<div class="get-in-touch"style="min-width: 300px;">
<h6 class="footer-heading bold center">Get In Touch</h6>
<ul class="footer-list">
    <a href="" class="footer-link">
        <li class="footer-list-items center">examplemail1@email.com</li>
    </a>
    <a href="" class="footer-link">
        <li class="footer-list-items center">examplemail2@email.com</li>
    </a>
</ul>
</div>
<div class="signup"style="min-width: 400px;">
<h6 class="footer-heading bold center">Stay up to the date from us &nbsp<span><i
    class="fa-sharp fa-regular fa-envelope"></i></span></h6>
    <input class="footer-email-input center" type="email" name="email" id="email" placeholder="Enter your e-mail address">
    <span class="animated-underline"></span>
    <button class="btn bold no-border">Sign Up</button>
</div>`;

document.getElementById('page-footer').innerHTML = footer;
function displayMenu(){
  console.log('Button clicked')
  document.getElementById("hamburger-button").style.display = "none";
  document.getElementById("hamburger-menu").style.display = "flex";
}
function hideMenu(){
  console.log("Hide menu clicked");
  document.getElementById("hamburger-button").style.display = "block";
  document.getElementById("hamburger-menu").style.display = "none";

}