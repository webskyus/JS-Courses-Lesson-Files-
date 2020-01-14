'use strict';



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

	while (isNaN(money) || money === '' || money === null) {
		money = prompt('Ваш бюджет на месяц?', '');
	}
}

start();



let appData = {
	budget: money,
	dayBudget: dayMoney,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	detectDayBudget: function() {
		dayMoney = prompt('Расчет дневного бюджета', '');

		while (isNaN(dayMoney) || dayMoney === '' || dayMoney === null) {
			dayMoney = prompt('Расчет дневного бюджета', '');
		}
	},
	chooseExpenses: function() {
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
	},
	chooseOptExpenses: function() { 
		for (let i = 0; i < 3; i++) {
			let optionalExpensesMoney = prompt('Статья необязательных расходов?', '');
			if ((typeof (optionalExpensesMoney)) === 'string' && (typeof (optionalExpensesMoney)) != null && (typeof (optionalExpensesMoney)) != '') {
				optionalExpensesMoney = prompt('Статья необязательных расходов?', '');
				appData.optionalExpenses[i] = optionalExpensesMoney;
			} else {
				i--;
			}

		}
	},
	detectLevel: function() { 
		if (appData.moneyPerDay > 0 && appData.moneyPerDay < 2000) {
			console.log('Низкий достаток');
		} else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 3000) {
			console.log('Средний достаток');
		} else if (appData.moneyPerDay > 3000) {
			console.log('Высокий достаток');
		} else {
			console.log('Произшла ошибка, вы либо не ввели данные, либо еще что. Повторите процесс еще раз.')
		}
	},
	checkSaving: function() { 
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накопления', ''),
				percent = +prompt('Под какой процент?');
			appData.monthIncome = (save / 100 / 12 * percent).toFixed(1);
			alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
		}
	},
	chooseIncome: function() { 
		let items = prompt('Что принесет дополнительный доход? Пиши через зяпятую', '');
				appData.income = items.split(', ');
				appData.income.push(prompt('Что то еще?'));
				appData.income.sort();

		while (items === '' || items === null) {
			let items = prompt('Что принесет дополнительный доход? Пиши через зяпятую', '');
		}		

		appData.income.forEach(function (item, i, arr) { 
			console.log("Способы доп. заработка: " + ++i + ' и полученные способы ' + item );
		});

	}
};





appData.moneyPerDay = (appData.budget / 30).toFixed(1);

console.log('Ваш бюджет составляет: ' + appData.moneyPerDay);


for (let key1 in appData) {
	console.log( "Наша программа включает в себя данные: " + key1);
}





