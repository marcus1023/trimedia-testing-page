

$( document ).ready(function() {

// $('#form').on('submit', function() {

	
	
// 	let name = $('#form input[name=name]');
// 	let email = $('#form input[name=email]');
// 	let message = $('#form textarea');

// 	// START emailjs
// 	var service_id = 'my_mandrill'; MAILGUN
// 	var template_id = 'feedback'; WHATEVER
// 	var template_params = {
// 		name: name,
// 		reply_email: email,
// 		message: message
// 	};

// 	emailjs.send(service_id,template_id,template_params);
// 	// END emailjs


// 	return false;
// });


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


});
