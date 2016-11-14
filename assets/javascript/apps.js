// Connected
$(document).ready(function(){
var dataCount = 0;
var callCount = 0;
var chatCount = 0;
var total = 0;

$(".callButton").on("click", function(){
	callCount = callCount + 1;
	$("#callCount").text("Total calls are " + callCount);
	var total = callCount + chatCount;
	$("#totalCount").text("Total count " + total);
});




$(".chatButton").on("click", function(){
	chatCount = chatCount + 1;
	$("#chatCount").text("Total chats are " + chatCount);
	var total = callCount + chatCount;
	$("#totalCount").text("Total count " + total);
});



// $(".total").on("click", function(){
// 	var total = callCount + chatCount;
// 	$("#totalCount").text("Your total so far is " + total);
// });



$(".storeBtn").on("click", function(){
	localStorage.clear();
	localStorage.setItem('calls',callCount);
	localStorage.setItem('chats', chatCount);
	return false;
});


$(".clearBtn").on("click", function(){
	callCount = 0;
	chatCount = 0;
	total = 0;
	$("#chatCount").text("Chats Cleared");
	$("#callCount").text("Calls Cleared");
	localStorage.clear();
});


function checkTotals() {
		$("#chatCount").text("Previous Count ").append(localStorage.getItem('chats'));
		$("#callCount").text("Previous Count ").append(localStorage.getItem('calls'));
	}


checkTotals();




}); // document ready closer