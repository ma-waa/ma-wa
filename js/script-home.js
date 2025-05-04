const contentConatiner = document.getElementById("content-container");
const navbarContainer = document.getElementById("navbar-container");
const mobMenuContainer = document.getElementById("mob-menu-container");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const prevScroll = window.pageYOffset;
const logoNavbar = document.getElementById("logo-navbar");
const aboutUS = document.getElementById("about-us-btn");
const features = document.getElementById("features-btn");
const app = document.getElementById("application-btn");
const contact = document.getElementById("contact-us-btn");
const scrollButtons = document.querySelectorAll(".scroll-btn");
const scrollToTopBtn = document.getElementById("scroll-to-top");

// change navbar background color on scroll
window.addEventListener("scroll", function () {
  if (this.scrollY > 600) {
    navbarContainer.style.position = "fixed";
    navbarContainer.classList.add("nav-bar-scroll");
    logoNavbar.src = "images/logo no bg.png";
  } else {
    navbarContainer.style.position = "absolute";
    logoNavbar.src = "images/logo no bg white.png";
    navbarContainer.classList.remove("nav-bar-scroll");
  }
});

// when click on menu button, show mobile menu and hide navbar and content container
menuBtn.addEventListener("click", function () {
  mobMenuContainer.classList.remove("none");
  mobMenuContainer.classList.add("flex");
  navbarContainer.classList.add("none");
  contentConatiner.classList.add("none");
});
closeBtn.addEventListener("click", function () {
  mobMenuContainer.classList.add("none");
  mobMenuContainer.classList.remove("flex");
  navbarContainer.classList.remove("none");
  contentConatiner.classList.remove("none");
});

// function called in html pass the value of scrollY i need to scroll to it
function scrollToPosition(s) {
  window.scrollTo({
    top: s,
    left: 0,
    behavior: "smooth",
  });
}

// scroll to top button show/hide
window.addEventListener("scroll" , function(){
  if(this.scrollY >600){
    scrollToTopBtn.style.display = "block";
  }else{
    scrollToTopBtn.style.display = "none";
  }
})
// scroll to top button
scrollToTopBtn.onclick = () =>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
