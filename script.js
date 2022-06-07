const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
/* Smooth Scrolling */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/*Sticky Navbar*/

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
}
