// Home work
/* 
		1. ADD Script Path
 		2. Create 2 variables
		3. Create obj appData
*/

let money, time, dayMoney;

function start() { 
	money = prompt('Ваш бюджет на месяц?', '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	
	while(isNaN(money) || money === '' || money === null){
		money = prompt('Ваш бюджет на месяц?', '');
	}
}

start();

function detectDayBudget() {
	dayMoney = prompt('Расчет дневного бюджета', '');

	while (isNaN(dayMoney) || dayMoney === '' || dayMoney === null) {
		dayMoney = prompt('Расчет дневного бюджета', '');
	}
}

detectDayBudget();

let appData = {
	budget: money,
	dayBudget: dayMoney,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
};


function chooseExpenses()	{
	for (let i = 0; i < 2; i++) {
		let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
			b = prompt('Во сколько обойдется?', '');

		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != ''
			&& b != '' && a.length < 50) {
			appData.expenses[a] = b;
			console.log('Миссия успешна');
		} else {
			i = i - 1;
		}
	}
};

chooseExpenses();

function chooseOptExpenses() { 
	for (let i = 0; i < 3; i++) {
		let optionalExpensesMoney = prompt('Статья необязательных расходов?', '');
		if ((typeof (optionalExpensesMoney)) === 'string' && (typeof (optionalExpensesMoney)) != null && (typeof (optionalExpensesMoney)) != '') {
			optionalExpensesMoney = prompt('Статья необязательных расходов?', '');
			appData.optionalExpenses[i] = optionalExpensesMoney;
		} else {
			i--;
		}
		
	}
}

chooseOptExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed(1);

console.log('Ваш бюджет составляет: ' + appData.moneyPerDay);

function detectLevel() {
	if (appData.moneyPerDay > 0 && appData.moneyPerDay < 2000) {
		console.log('Низкий достаток');
	} else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 3000) {
		console.log('Средний достаток');
	} else if (appData.moneyPerDay > 3000) {
		console.log('Высокий достаток');
	} else {
		console.log('Произшла ошибка, вы либо не ввели данные, либо еще что. Повторите процесс еще раз.')
	}
}

detectLevel();

function checkSaving() {
	if(appData.savings == true) {
		let save = +prompt('Какова сумма накопления', ''),
				percent = +prompt('Под какой процент?');
		appData.monthIncome = (save/100/12 * percent).toFixed(1); 
		alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
	}
}

checkSaving();


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

