var total_amount = 0;

var game1 = 700;
var game2 = 300;
var game3 = 500;
var game4 = 250;
var game5 = 750;
var game6 = 650;
var game7 = 400;
var game8 = 800;
var game9 = 500;
var game10 = 600;

var add_game1 = function(){
	total_amount += game1;
	sessionStorage.setItem("product1", "Watch Dogs 2");
	sessionStorage.setItem("amount1", "R700");
	var product1 = sessionStorage.getItem("product1");
	var amount1 = sessionStorage.getItem("amount1");
}

var add_game2 = function(){
	total_amount += game2;
	sessionStorage.setItem("product2", "Grand Theft Auto V");
	sessionStorage.setItem("amount2", "R300");
	var product2 = sessionStorage.getItem("product2");
	var amount2 = sessionStorage.getItem("amount2");
}

var add_game3 = function(){
	total_amount += game3;
	sessionStorage.setItem("product3", "Need For Speed");
	sessionStorage.setItem("amount3", "R500");
	var product3 = sessionStorage.getItem("product3");
	var amount3 = sessionStorage.getItem("amount3")
}

var add_game4 = function(){
	total_amount += game4;
	sessionStorage.setItem("product4", "Max Payne");
	sessionStorage.setItem("amount4", "R250");
	var product4 = sessionStorage.getItem("product4");
	var amount4 = sessionStorage.getItem("amount4");
}

var add_game5 = function(){
	total_amount += game5;
	sessionStorage.setItem("product5", "Call Of Duty: WWII");
	sessionStorage.setItem("amount5", "R750");
	var product5 = sessionStorage.getItem("product5");
	var amount5 = sessionStorage.getItem("amount5");
}

var add_game6 = function(){
	total_amount += game6;
	sessionStorage.setItem("product6", "Resident Evil");
	sessionStorage.setItem("amount6", "R650");
	var product6 = sessionStorage.getItem("product6");
	var amount6 = sessionStorage.getItem("amount6");
}

var add_game7 = function(){
	total_amount += game7;
	sessionStorage.setItem("product7", "Fallout 4");
	sessionStorage.setItem("amount7", "R400");
	var product7 = sessionStorage.getItem("product7");
	var amount7 = sessionStorage.getItem("amount7");
}

var add_game8 = function(){
	total_amount += game8;
	sessionStorage.setItem("product8", "WWE 2K19");
	sessionStorage.setItem("amount8", "R800");
	var product8 = sessionStorage.getItem("product8");
	var amount8 = sessionStorage.getItem("amount8");
}

var add_game9 = function(){
	total_amount += game9;
	sessionStorage.setItem("product9", "A Way Out");
	sessionStorage.setItem("amount9", "R500");
	var product9 = sessionStorage.getItem("product9");
	var amount9 = sessionStorage.getItem("amount9");
}

var add_game10 = function(){
	total_amount += game10;
	sessionStorage.setItem("product10", "Spider-man");
	sessionStorage.setItem("amount", "R600");
	var product10 = sessionStorage.getItem("product10");
	var amount10 = sessionStorage.getItem("amount10");
};

var calculate = function(){
	var length_of = sessionStorage.length / 2;
	while (length_of > 0){
		if (typeof sessionStorage.product1 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.product1);
			x.appendChild(a);
			document.getElementById("cart-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("product1");
			sessionStorage.removeItem("amount1");
		}
		else if(typeof sessionStorage.product2 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.product2);
			x.appendChild(a);
			document.getElementById("cart-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("product2");
			sessionStorage.removeItem("amount2");
		}
		else if(typeof sessionStorage.product3 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.product3);
			x.appendChild(a);
			document.getElementById("cart-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("product3");
			sessionStorage.removeItem("amount3");
		}
		else if(typeof sessionStorage.product4 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.product4);
			x.appendChild(a);
			document.getElementById("cart-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("product4");
			sessionStorage.removeItem("amount4");
		}
		else if(typeof sessionStorage.product5 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.product5);
			x.appendChild(a);
			document.getElementById("cart-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("product5");
			sessionStorage.removeItem("amount5");
		}
		else if(typeof sessionStorage.product6 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.product6);
			x.appendChild(a);
			document.getElementById("cart-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("product6");
			sessionStorage.removeItem("amount6");
		}
		else if(typeof sessionStorage.product7 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.product7);
			x.appendChild(a);
			document.getElementById("cart-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("product7");
			sessionStorage.removeItem("amount7");
		}
		else if(typeof sessionStorage.product8 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.product8);
			x.appendChild(a);
			document.getElementById("cart-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("product8");
			sessionStorage.removeItem("amount8");
		}
		else if(typeof sessionStorage.product9 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.product9);
			x.appendChild(a);
			document.getElementById("cart-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("product9");
			sessionStorage.removeItem("amount9");
		}
		else if(typeof sessionStorage.product10 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.product10);
			x.appendChild(a);
			document.getElementById("cart-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("product10");
			sessionStorage.removeItem("amount10");
		}
	};

	document.getElementById("confirm").style.display = "block";
	document.getElementById("total").innerHTML = "Total is: R" + localStorage.getItem("amount")
};



var save = function(){
	localStorage.setItem("amount", total_amount);
}

var total_amount = Number(localStorage.getItem("amount"));

var confirm = function(){

	var coupon = prompt("would you like a coupon");
	if (coupon == "yes"){
		alert("R125 has been removed of your purchase!");
		total_amount -= 125;
	}
	else {
		alert("Okay👍")
	};

var deliveries = prompt("Would you like your item to be delivered(150)");
	if (deliveries == "yes"){
		alert("You have selected delivery");
		total_amount += 150;
	}
	else {
		alert("You selected no delivery");
	};
	alert("Congratulations \nYour order is successful. \nYour total is: R" + total_amount)
	localStorage.clear();
	sessionStorage.clear();
	$("#cart-list").empty();
};