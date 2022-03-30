// const sideBtn = document.querySelector(".side-btn")
// const sideNavLink = document.querySelector(".side-nav-links")
// const HIDDEN_CLASSNAME = "hidden"
// sideNavLink.classList.remove(HIDDEN_CLASSNAME)
// function slideToggle (event) {
// sideBtn.classList.toggle("change")
// sideNavLink.classList.toggle(HIDDEN_CLASSNAME)
// }
// sideBtn.addEventListener("click", slideToggle)
$(document).ready(function(){
    $('.side-btn').click(function () {
        $('.side-nav-links').slideToggle(3000);
        $('.side-btn').toggleClass('change')
    })
    $('.nav-btn').click(function () {
        $('.side-nav').toggleClass("margin");
        $('.nav-btn').toggleClass('change');
        $('main').toggleClass('max-width')
    })


    $('.songs-center').owlCarousel({
        loop:true,
        margin:10,
        smartSpeed:4000,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })



})