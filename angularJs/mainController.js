angular.module('trimobile').controller('mainController', function($scope){

$scope.test = "this app is working"

$scope.contactEmail = function(emailer){

  let name = emailer.name;
  let userEmail = emailer.userEmail;
  let userMessage = emailer.body;
  let company = "marcus@userlite.com"
  console.log(emailer)

emailjs.send("mailgun","trimobile",{
  name: name,
  email: userEmail,
  notes: userMessage,
  company: company
});

}






})
