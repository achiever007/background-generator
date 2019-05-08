var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombutton = document.querySelector("#random");

setGradient();


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

function randomGradient() {
	var randomColor1 = getRandomColor();
	var randomColor2 = getRandomColor();

	//var direction = randomDirection();

	body.style.background = 
	"linear-gradient(to right, "
	+ randomColor1
	+ ", " 
	+ randomColor2
	+ ") fixed";

	css.textContent = body.style.background + ";";

	color1.value = randomColor1;
	color2.value = randomColor2;
}

function copyText(element) {
	var range, selection;
  
	if (document.body.createTextRange) {
	  range = document.body.createTextRange();
	  range.moveToElementText(element);
	  range.select();
	} else if (window.getSelection) {
	  selection = window.getSelection();        
	  range = document.createRange();
	  range.selectNodeContents(element);
	  selection.removeAllRanges();
	  selection.addRange(range);
	}
	
	try {
	  document.execCommand('copy');
	  alert('CSS Copied to clipboard!');
	}
	catch (err) {
	  alert('unable to copy text');
	}
  }


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randombutton.addEventListener("click", randomGradient);

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);




// Caching
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");
// var randombutton = document.querySelector("#random");
// var right = document.querySelector("#right");
// var left = document.querySelector("#left");
// var top1 = document.querySelector("#top");
// var bottom = document.querySelector("#bottom");

// changeBg();

// function checkDirection() {
// 	if (right.checked === true) {return "right";}
// 	else if (left.checked === true) {return "left";}
// 	else if (top1.checked === true) {return "top";}
// 	else {return "bottom";}
// }

// function randomDirection() {
// 	var directions = ["right","left","top","bottom"];
// 	var randi = directions[Math.floor(Math.random()*directions.length)];
// 	if (randi === "right") {right.checked = true}
// 	else if (randi === "left") {left.checked = true}
// 	else if (randi === "top") {top1.checked = true}
// 	else {bottom.checked = true}

// 	return randi;
// }

// function changeBg() {
// 	var direction = checkDirection();
// 	body.style.background = 
// 	"linear-gradient(to "
// 	+ direction
// 	+ ", " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ") fixed";

// 	css.textContent = "background: " + body.style.background + ";";
// }

// function randomGradient() {
// 	var randomColor1 = getRandomColor();
// 	var randomColor2 = getRandomColor();

// 	var direction = randomDirection();

// 	body.style.background = 
// 	"linear-gradient(to "
// 	+ direction 
// 	+ ", "
// 	+ randomColor1
// 	+ ", " 
// 	+ randomColor2
// 	+ ") fixed";

// 	css.textContent = body.style.background + ";";

// 	color1.value = randomColor1;
// 	color2.value = randomColor2;
// }

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// function copyText(element) {
// 	var range, selection, worked;
  
// 	if (document.body.createTextRange) {
// 	  range = document.body.createTextRange();
// 	  range.moveToElementText(element);
// 	  range.select();
// 	} else if (window.getSelection) {
// 	  selection = window.getSelection();        
// 	  range = document.createRange();
// 	  range.selectNodeContents(element);
// 	  selection.removeAllRanges();
// 	  selection.addRange(range);
// 	}
	
// 	try {
// 	  document.execCommand('copy');
// 	  alert('CSS Copied to clipboard!');
// 	}
// 	catch (err) {
// 	  alert('unable to copy text');
// 	}
//   }


// color1.addEventListener("input", changeBg);
// color2.addEventListener("input", changeBg);
// randombutton.addEventListener("click", randomGradient);
// right.addEventListener("click", changeBg);
// left.addEventListener("click", changeBg);
// top1.addEventListener("click", changeBg);
// bottom.addEventListener("click", changeBg);
 