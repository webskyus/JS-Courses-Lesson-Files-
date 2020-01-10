'use strict';


// let someNum = 20;
// function showTextInConsole(text) {
// 	someNum = 10;
// 	console.log(text)
// };


// showTextInConsole('some text');
// console.log(someNum)


// function calc(a, b) {
// 	return (a + b / 5);
// }

// console.log(calc(10, 6))

// Function declaration
// function returnVar() {
// 	let num = 50; 
// 	return num; 
// }

// Function expration 
// let calcNew = function(a, b) {
// 	return (a + b);
// }

// Стрлочная функция
// let calcNew = (a, b) => {a + b}; 


// let anotherNum = returnVar();
// console.log(anotherNum);



let str = "si";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let strNumb = '13.3';
console.log(Math.round(strNumb));

let strNumb1 = '13.3px';
console.log(parseInt(strNumb1));
console.log(parseFloat(strNumb1));



let someCalc = (a,b) => {
	return a * b;
}
console.log(someCalc(50,50));