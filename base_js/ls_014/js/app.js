'use strict';


let arr = [1,15,4],
		i = arr.sort(sortNumber);

function sortNumber(a,b) { 
	return a-b;
}		

console.log(arr);

let soldier = {
	health: 400,
	armor: 100, 
};

 let john = {
	 health: 400,
 };

 john.__proto__ = soldier;

 console.log(john);
 console.log(john.armor);

// let a,
// 		b;
		 
// function arrowFunct(a, b) {
// 	return a - b;
// };

let newFunc = (a, b) => a + b;


console.log(newFunc(10, 7));