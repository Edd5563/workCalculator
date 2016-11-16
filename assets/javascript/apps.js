// Connected
$(document).ready(function(){
var dataCount = 0;

var callCount = 0;
var callTotal = 0;

var chatCount = 0;
var chatTotal = 0;

var installCount = 0;
var installTotal = 0;

var total = 0;


// Future patch RPH purposes.
//var call_Money_Total = 0;




function rph(callCount, chatCount, installCount, hours) {
var num = ((callCount + chatCount)* (8.36) / hours) + ((installCount * 13.83) / hours);
	$('.totalCount').text(rph());
}




$(".call_Btn").on("click", function(){
	callCount = callCount + 1;
	$(".callText").text("Calls: " + callCount);
	var total = callCount + chatCount + installCount;
	$(".totalCount").text("Total count " + total);
});


$(".chat_Btn").on("click", function(){
	chatCount = chatCount + 1;
	$(".chatText").text("Chats: " + chatCount);
	var total = callCount + chatCount + installCount;
	$(".totalCount").text("Total count " + total);
});


$(".install_Btn").on("click", function(){
	installCount = installCount + 1;
	$(".installText").text("Installs: " + installCount);
	var total = callCount + chatCount + installCount;
	$(".totalCount").text("Total count " + total);
});



// Future patch RHP calculator




// $(".rphValue").on("click", function(){
// 	var hours = prompt("How many hours have you worked");

//  var displayRph= rph(callCount, chatCount, installCount, hours);
// });






//future table implmentation
/*
table
for week
			Mon Tues Wed Thur Fri
Calls 		 4	  7	  3	   5   6
Chats 		 6	  4	  2    2   3
Install 	 8	  2	  1    1   8
*/







//Storage Area.

$(".storeBtn").on("click", function(){
	localStorage.clear();
	localStorage.setItem('calls',callCount);
	localStorage.setItem('chats', chatCount);
	localStorage.setItem('installs', installCount);
	return false;
	$(".restoreCalls").text("Data Stored");
	$(".restoreChats").text("Data Stored");
	$(".restoreInstalls").text("Data Stored");
});

// data stores : ok




//Nuke All data
$(".clearBtn").on("click", function(){
	callCount = 0;
	chatCount = 0;
	total = 0;
	$(".chatCount").text("Data Cleared");
	$(".callCount").text("Data Cleared");
	$("#totalCount").text("Data Cleared");
	localStorage.clear();
});

// Nukes all data: ok




function checkTotals() {
		$(".restoreCalls").text("No saved Data").append(localStorage.getItem('calls'));
		$(".restoreChats").text("No saved Data").append(localStorage.getItem('chats'));
		$(".restoreInstalls").text("No saved Data").append(localStorage.getItem('installs'));
	}





checkTotals();




//features to hide and show menus.

$('.totalArea').hide();
$('.totalArea').hide();

$(".infoImg").on("click", function(){
	$('.container').toggle();
	$('.totalArea').toggle();
	//$('.totalArea').toggle();
	//$('.totalArea').toggle();
});









}); // document ready closer