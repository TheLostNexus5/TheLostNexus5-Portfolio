
const parallax = document.getElementById("parallaxImage");

document.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = "translateY(" + (scrollPosition * 0.67) + "px)";
});