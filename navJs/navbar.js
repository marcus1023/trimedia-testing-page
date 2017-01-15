$( document ).ready(function() {
    console.log( "ready!" );
//

$("#ham-menu").click(function() {
$(".nav-bar-inner").toggleClass("show-nav");
$(".main-content-section").toggleClass("move-body");
$(".onepage-wrapper").toggleClass("move-main");
$(".onepage-pagination").toggleClass("scroll-nav-main");

});





});
