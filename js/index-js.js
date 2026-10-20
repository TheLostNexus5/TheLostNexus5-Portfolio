const surprisetext = document.getElementById("surprisetext");
const content1 = document.getElementById("content1");
const navlinkcontainer = document.getElementById("nav-link-container");
const wavewrapper = document.getElementById("wave-wrapper");
const dgaf = document.getElementById("dgaf");
const cardsection = document.getElementById("card-section");


document.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition > 350) {
        dgaf.classList.add('is-visible');
    }
    if (scrollPosition > 550) {
        cardsection.classList.add('is-visible');
    }
    if (scrollPosition > 1100) {
        surprisetext.classList.add('is-visible');
    }
    if (scrollPosition > 1200) {
        content1.classList.add('is-visible');
        navlinkcontainer.classList.add('is-visible');
        wavewrapper.classList.add('is-visible');
    }
});
