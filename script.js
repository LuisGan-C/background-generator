var h3 = document.querySelector('h3');
var color1 = document.querySelectorAll('input')[0];
var color2 = document.querySelectorAll('input')[1];
var body = document.querySelectorAll('body')[0];
var buttons = document.querySelectorAll('div')[0];

function setColors(){
	body.style.background = 'linear-gradient(to right,'+ color1.value +','+color2.value+')'	;
	printCSS();
}

function setgGradient(type){
	body.style.background = 'linear-gradient('+type+','+ color1.value +','+color2.value+')'	;
	printCSS();
}

function printCSS(){
	h3.textContent = body.style.background + ";";
}

function randColorGenerator(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	return randomColor;
}


function setOrientation(event){
	var element = event.target.textContent;
	if (element === "Diagonal") {
		setgGradient('to bottom right');
	}
	else if (element === "Horizontal"){
		setgGradient('to right');
	}
	else if (element === "Vertical"){
		body.style.background = 'linear-gradient('+ color1.value +','+color2.value+') ';
		printCSS();
	}
	else if (element === 'Random'){
		color1.value = "#" + randColorGenerator();
		color2.value = "#" + randColorGenerator();
	}
}

setColors();
printCSS();
color1.addEventListener('input', setColors);
color2.addEventListener('input', setColors);
buttons.addEventListener('click',setOrientation);