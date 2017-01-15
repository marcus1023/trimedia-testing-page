$( document ).ready(function() {

	$('#emailSuccessMess').hide();

	$(".hamburger-menu").hover(function(){
	    $('.burger-li').css("background-color", "#e37401");
		}, function(){
	    $('.burger-li').css("background-color", "white");
	});



$(".main").onepage_scroll({
   sectionContainer: "section",
   easing: "ease",

   animationTime: 1000,
   pagination: true,
   updateURL: false,
   beforeMove: function(index) {

      let $pane = $('#phone-slider .pane-' + index);
      let $track = $('#phone-slider .track');
      let paneHeight = $pane.height();
      let top = paneHeight * (index - 1) * -1;
      $track.css('top', top);

   },
   loop: false,
   keyboard: true,
   responsiveFallback: false,


   direction: "vertical"
});





$( ".digitales-options-one" ).click(function() {
  $('.digitales-catigories-two').toggleClass( "shower");
  $('.digitales-catigories-one').toggleClass( "hider");
  $('.digitales-options-one').toggleClass( "digitales-b-border");
  $('.digitales-options-two').toggleClass( "digitales-b-border");
});

$( ".digitales-options-two" ).click(function() {

  $('.digitales-catigories-two').toggleClass( "shower");
  $('.digitales-catigories-one').toggleClass( "hider");
  $('.digitales-options-two').toggleClass( "digitales-b-border");
  $('.digitales-options-one').toggleClass( "digitales-b-border");
});

$('#emailerSubmit').click(function(){
	let name = $('#emailerName');
  let userEmail = $('#emailerUser');
  let userMessage = $('#emailerMessage');
  let company = "marcus@userlite.com"
  console.log("partial email")

emailjs.send("mailgun","trimobile",{
  name: name,
  email: userEmail,
  notes: userMessage,
  company: company
});


	console.log('email test success!!!')

	$('#emailerName').hide()
	$('#emailerUser').hide()
	$('#emailerMessage').hide()
	$('#emailerSubmit').hide()
	$('#emailSuccessMess').show()
})


});
