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



let message;

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