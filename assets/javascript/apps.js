// Connected
$(document).ready(function(){

var callCount = 0;
var chatCount = 0;
var total = 0;

$(".callButton").on("click", function(){
	callCount = callCount + 1;
	$("#callCount").text("Total calls are " + callCount);
});




$(".chatButton").on("click", function(){
	chatCount = chatCount + 1;
	$("#chatCount").text("Total chats are " + chatCount);
});



$(".total").on("click", function(){
	var total = callCount + chatCount;
	$("#totalCount").text("Your total so far is " + total);
});



}); // document ready closer