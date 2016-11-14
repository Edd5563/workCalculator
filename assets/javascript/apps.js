// Connected
$(document).ready(function(){
var dataCount = 0;
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



$(".storeBtn").on("click", function(){
	localStorage.clear();
	localStorage.setItem('calls',callCount);
	localStorage.setItem('chats', chatCount);
	localStorage.setItem('total', total);
	return false;
});


$(".clearBtn").on("click", function(){
	callCount = 0;
	chatCount = 0;
	total = 0;
	$("#totalCount").text("Total Cleared");
	$("#chatCount").text("Chats Cleared");
	$("#callCount").text("Calls Cleared");
	localStorage.clear();
});


function checkTotals() {
	if (callCount == 0 && chatCount == 0 && total == 0) {
		$("#totalCount").text("").append(localStorage.getItem('total'));
		$("#chatCount").text("Press a button to start").append(localStorage.getItem('chats'));
		$("#callCount").text("Press a button to start").append(localStorage.getItem('calls'));
		
		} else {

		$("#totalCount").text("Previous Count ").append(localStorage.getItem('total'));
		$("#chatCount").text("Previous Count ").append(localStorage.getItem('chats'));
		$("#callCount").text("Previous Count ").append(localStorage.getItem('calls'));
		}
	}


checkTotals();




}); // document ready closer