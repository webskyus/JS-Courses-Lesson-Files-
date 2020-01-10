'use strict';


// while


// let num = 51;
// while (num < 55) {
// 	console.log(num);
// 	num++;
// }


let num = 51;

do {
	console.log(num);
	num++;
}
while (num < 55);


let numSecond = 50;

for (let i = 1; i < 10; i++) {
	if (i % 2) {
		continue;
	}
	console.log(i)
}

