//#ReadMe....
// Calculator for work
// Implementing a storage for daily count


$("#addUser").on("click", function() {

	// Capture User Inputs and store into variables
var name = $("#nameinput").val();
var email = $("#emailinput").val();
var age = $("#ageinput").val();
var comment = $("#commentinput").val();


	// Console log each of the user inputs to confirm you are receiving them correctly
console.log(name);
console.log(email);
console.log(age);
console.log(comment);


	// Output all of the new information into the relevant HTML sections
$('#namedisplay').text(name);
$('#emaildisplay').text(email);
$('#agedisplay').text(age);
$('#commentdisplay').text(comment);

localStorage.clear();

localStorage.setItem('name', name);
localStorage.setItem('email', email);
localStorage.setItem('age', age);
localStorage.setItem('comment', comment);

	// Don't refresh the page!
	return false;
	})
localStorage.getItem('name');
localStorage.getItem('email');
localStorage.getItem('age');
localStorage.getItem('comment');
$('#recentMember').empty();
$('#recentMember').append(localStorage.getItem('name'));
$('#recentMember').append(localStorage.getItem('email'));
$('#recentMember').append(localStorage.getItem('age'));
$('#recentMember').append(localStorage.getItem('comment'));


})