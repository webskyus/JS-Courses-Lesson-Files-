'use strict';


// IF ELSE  
let num = 51;

if (num > 49) {
	console.log('Верно');
}
else if(num > 100) {
	console.log('Не Верно');
};



// SWITCH 
switch (num) {
	case num < 49: 
		console.log('Не Верно');
		break;
	case num > 100: 
		console.log('Много');
		break;
	case 51: 
		console.log('Верно');
		break;
	default: 
		console.log('Упс');
		break;
}