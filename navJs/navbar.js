$( document ).ready(function() {
    console.log( "ready!" );
//

$("#ham-menu").click(function() {
$(".nav-bar-inner").toggleClass("show-nav");
$(".main-content-section").toggleClass("move-body");
$(".onepage-wrapper").toggleClass("move-main");
console.log("done")

});

//
// $( "#test" ).click(function() {
//   $('.side-menu').toggleClass( "shower");
//   $('.main-header-container').toggleClass("show-me-200");
//   $('.burger-li').toggleClass("orange-background");
//   $('.scroller-nav').toggleClass("hide-me");
// });
//
//
// $("#test").hover(function(){
//     $('.burger-li').css("background-color", "#e37401");
//     }, function(){
//     $('.burger-li').css("background-color", "white");
// });
//
// $( ".digitales-options-one" ).click(function() {
//   $('.digitales-catigories-two').toggleClass( "shower");
//   $('.digitales-catigories-one').toggleClass( "hider");
//   $('.digitales-options-one').toggleClass( "digitales-b-border");
//   $('.digitales-options-two').toggleClass( "digitales-b-border");
// });
//
// $( ".digitales-options-two" ).click(function() {
//
//   $('.digitales-catigories-two').toggleClass( "shower");
//   $('.digitales-catigories-one').toggleClass( "hider");
//   $('.digitales-options-two').toggleClass( "digitales-b-border");
//   $('.digitales-options-one').toggleClass( "digitales-b-border");
// });

});
