// Home work
/* 
		1. ADD Script Path
 		2. Create 2 variables
		3. Create obj appData
*/


let money = prompt('Ваш бюджет на месяц?', ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
}

for (let i = 0; i < 2; i++) {
	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
		b = prompt('Во сколько обойдется?', '');

	if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
		appData.expenses[a] = b;
		console.log('Миссия успешна')
	}
	else {
		console.log('Введите данные еще раз. Произошла ошибка.')
	}
}

appData.moneyPerDay = appData.budget / 30;
console.log('Ваш бюджет составляет: ' + appData.moneyPerDay)


if (appData.moneyPerDay > 0 && appData.moneyPerDay < 2000) {
	console.log('Низкий достаток');
} else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 3000) {
	console.log('Средний достаток');
} else if (appData.moneyPerDay > 3000) {
	console.log('Высокий достаток');
} else {
	console.log('Произшла ошибка, вы либо не ввели данные, либо еще что. Повторите процесс еще раз.')
}




// let i = 0; 
// while (i < 2) {
// 	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
// 			b = prompt('Во сколько обойдется?', '');

// 	if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
// 		&& a != '' && b != '' && a.length < 50 )	{
// 		console.log('done');
// 		appData.expenses[a] = b;
// 	} else {
// 		console.log('error mudila');
// 	};
// 	i++;
// }

// let i = 0; 
// do {
// 	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
// 			b = prompt('Во сколько обойдется?', '');

// 	if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
// 		&& a != '' && b != '' && a.length < 50 )	{
// 		console.log('done');
// 		appData.expenses[a] = b;
// 	} else {
// 		console.log('error mudila');
// 	};
// 	i++;
// } while(i < 2);




/*
	1.Сколько типов данных существует в JS?
		Существует 7 типов данных:
		number        ->  1, NaN, Infinity (5/0), -infinity;
		string        -> 'Text';
		boolean       -> true, false;
		symbol        -> let symbolData = {"#id"};
		object        -> let objData = {};
		null          -> можно получить к примеру если обьявить переменную
										и до нее ее вызвать;
		underfined    -> можно получить к примеру если обьявить переменную
										и ничего ей не присвоить,вызвать;

	2.Как вывести информацию в консоль?
		console.log('some info');

	3.Какая функция операторов || и &&?
		- || -или проверяет если один один из аргементов истена вернет true,
		- && -и проверяет если оба аргемента истена вернет true
*/

