'use strict';


let objData = {
	width: 1920,
	height: 1080,
	model: 'AOS',
	gpu: 'Nvidia 2080S',
	cpu: 'Intel 9900K',
}



// Вывод значения 
console.log(objData.gpu);
console.log(objData.model);

// Добавить значение 
objData.ssd = 'M2 Kingstoon';
console.log(objData.ssd);

// Удалим значение 
delete objData.ssd;
console.log(objData);

// Вывести все свойства и значения 
for (let key in objData) {
	console.log('Свойство ' + key + ' имеет значение ' + objData[key]);
}



let message,
		login;

if (login == 'Сотрудник') {
	message = 'Привет';
} else if (login == 'Директор') {
	message = 'Здравствуйте';
} else if (login == '') {
	message = 'Нет логина';
} else {
	message = '';
}
message = (login == 'Сотрудник') ? 'Привет' : 
					(login == '') ? 'Здравствуйте' : 
					(login == '') ? 'Нет логина' : 
					'';
console.log(message);


let arr = [1,2,3,4];

arr.pop();
arr.push(4);
arr.shift();
arr.unshift(1);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

/*

item  название элемента
i 	 номер
arr  массив

*/ 
arr.forEach(function (item, i, mass) { 
	console.log(i + ': ' + item + ' (массив: ' + mass + ')');
});


console.log(arr);

let mass = [1,3,4,5];


// Получение ключа
for (let key in mass) {
	console.log();
};

// Получение значение
for (let key of mass) {
	console.log();
};


let ans = prompt('',''),
		arrAns = [];

arrAns = ans.split(',');
console.log(arrAns);		

// join берет массив и записывает в строку
// let arrColors = ['red', 'green', 'blue', 'orange'];
// 		arrNum = arrColors.join(': ');

// console.log(arrNum);		


// sort сортировка 
// let arrColors = ['red', 'green', 'blue', 'orange'];
// arrNum = arrColors.sort();

// console.log(arrNum);		


let arrColors = [1, 15, 4, 2];
		arrNum = arrColors.sort(sortNumber);

function sortNumber(a,b) { 
	return a-b;
 }

console.log(arrNum);