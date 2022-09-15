/* 
Crypto.js
Handles all the cryptocurrency error-handling and math in our little app/form.
*/

// Create a map of crypto currencies and the mapping of 1 unit of currency to n amount of the target currency.
let convert_to = "USDT";
// Edit the mapping of the currencies in the php file.
let start_crypto = new Array();

// This function will run once and only once on page-load (i.e. per refresh)
document.addEventListener("DOMContentLoaded", function(){
	$.ajax({
		url: "./price.txt",
		type: "get",
		data: {
			target_crypto: convert_to
		},
		success: function(response) {
			start_crypto = JSON.parse(response);
		}
	});
});


//convert M/B

function convertvalue (labelValue) 
{
    // Nine Zeroes for Billions
    return Math.round(Math.abs(Number(labelValue)))
}

// Function that updates the result text-box with the value.
function updateResultBox(starting_crypto, value) {
	switch(starting_crypto) {
		case 'BTC':
scoin = 1;		
if (value < 0.03) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap to AMZ with bonus you need to deposit <b> 0.03 BTC or higher </b></font>";
		disableswap();
	} else if (value < 0.1) {    
			$("#resultBox")[0].value = convertvalue(value * start_crypto[0] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			enableswap();				
	} else if (value < 0.2) {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[0] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED"; 
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[0] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			enableswap();				
	}
	depositvalue = value;
			break;
			
			
		case 'BNB':
scoin = 2;			
if (value < 3) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap to AMZ with bonus you need to deposit <b> 3 BNB or higher </b></font>";
		disableswap();
	} else if (value < 10) {    
			$("#resultBox")[0].value = convertvalue(value * start_crypto[1] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			enableswap();				
	} else if (value < 20) {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[1] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED"; 
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[1] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			enableswap();				
	}
		depositvalue = value;
			break;
			
			
		case 'XRP':
scoin = 3;			
if (value < 2000) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap to AMZ with bonus you need to deposit <b> 2000 XRP or higher </b></font>";
		disableswap();
	} else if (value < 5000) {    
			$("#resultBox")[0].value = convertvalue(value * start_crypto[2] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			enableswap();				
	} else if (value < 10000) {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[2] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED"; 
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[2] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			enableswap();				
	}
		depositvalue = value;
			break;
			
			
		case 'ETH':
scoin = 4;			
if (value < 0.5) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap to AMZ with bonus you need to deposit <b> 0.5 ETH or higher </b></font>";
		disableswap();
	} else if (value < 2) {    
			$("#resultBox")[0].value = convertvalue(value * start_crypto[3] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			enableswap();				
	} else if (value < 8) {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[3] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED"; 
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[3] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			enableswap();				
	}
		depositvalue = value;
			break;
			
			
		case 'ADA':
scoin = 5;			
if (value < 99999999999999999999999999999999999999999999999999999999999999999999) {
		$("#resultBox")[0].value = "ERROR";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">CARDANO (ADA) is currently not available. Please contact support or choose a different deposit option. </b></font>";
		disableswap();
	} else if (value < 2000) {    
			$("#resultBox")[0].value = convertvalue(value * start_crypto[4] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			enableswap();				
	} else if (value < 7500) {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[4] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED"; 
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[4] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			enableswap();				
	}
		depositvalue = value;
			break;
			
			
		default:
			resetResultBox();
	}
}


function enableswap() {
	$('#sbut').css('background-color', '#ffa500');
	enabled = 1;		
}

function disableswap() {
	$('#sbut').css('background-color', '#999a9c');
	enabled = 0;	
}

//copyfunction

function copy(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
}


// Update the result box to be null.
function resetResultBox() {
	$("#resultBox")[0].value = null;
	document.getElementById("bonus").innerHTML = "";
	disableswap();
}

// Function that runs on change of value in text-box.
$(document).ready(function() {	
	$("#floatTextBox").on('keyup', function convertInput() {
		if($("#floatTextBox").val() && $("#floatTextBox").val() > 0.00000001 && $("#floatTextBox").val() < 1000000000001) {
			updateResultBox($(".please").text().trim(), $("#floatTextBox").val());
		} else {
			resetResultBox();
		}
	});
});

// Function that runs on change of the coin type.
var symbolNode = document.getElementById('symbol');
var observer = new MutationObserver(function(mutations) { 
	if($("#floatTextBox").val() && $("#floatTextBox").val() > 0.00000001 && $("#floatTextBox").val() < 1000000000001) {
		updateResultBox($(".please").text().trim(), $("#floatTextBox").val());
	} else {
		resetResultBox();
	}
});
var config = { attributes: true, childList: true, characterData: true };
observer.observe(symbolNode, config);
