'use strict'



//  Получить кнопку "Начать расчет" через id
let startCalcBtn = document.getElementById('start');



/*
		Получить все блоки в правой части программы через классы 
		(которые имеют класс название-value, начиная с и заканчивая

*/ 

let dayBudgetValue = document.querySelector('.daybudget-value'),
		budgetValue = document.querySelector('.budget-value'),
		incomeLevelValue = document.querySelector('.level-value'),
		incomeValue = document.querySelector('.income-value'),
		requiredExpensesValue = document.querySelector('.expenses-value'),
		optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
		monthSavingsValue = document.querySelector('.monthsavings-value'),
		yearSavingsValue = document.querySelector('.yearsavings-value');



// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let requiredExpensesInputNameFirst = document.getElementById('expenses_1'),
		requiredExpensesInputPriceFirst = document.getElementById('expenses_2'),
		requiredExpensesInputNameSecond = document.getElementById('expenses_3'),
		expensesItem = document.getElementsByClassName('expenses-item'),
		requiredExpensesInputPriceSecond = document.getElementById('expenses_4');



// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
let requiredApproveBtn = document.getElementsByTagName('button')[0],
		optionExpensesBtn = document.getElementsByTagName('button')[1],
		dailyBudgetCalcBtn = document.getElementsByTagName('button')[2];


// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionExpensesInput = document.querySelectorAll('.optionalexpenses-item');




/*

	Получить оставшиеся поля через querySelector 
	(статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

	*/

let possibleIncomeInput = document.getElementById('income'),
		accumulationMoneyCheckbox = document.getElementById('savings'),
		totalSumInput = document.getElementById('sum'),
		sumProcentInput = document.getElementById('percent'),
		yearInput = document.querySelector('.year-value'),
		monthInput = document.querySelector('.month-value'),
		dayInput = document.querySelector('.day-value');



let time,
		dayMoney,
		money;


// budget calc btn click 
startCalcBtn.addEventListener('click', function() {
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = prompt('Ваш бюджет на месяц?', '');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет на месяц?', '');
	}

	appData.budget = money; 
	appData.timeData = time; 
	budgetValue.textContent = parseInt(money).toFixed(); 
	yearInput.value = new Date(Date.parse(time)).getFullYear();
	monthInput.value = new Date(Date.parse(time)).getMonth() + 1;
	dayInput.value = new Date(Date.parse(time)).getDay();
});


// Required expenses 
requiredApproveBtn.addEventListener('click', function() {

	let sum = 0; 

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
				b = expensesItem[++i].value;

		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != ''
			&& b != '' && a.length < 50) {
			appData.expenses[a] = b;
			sum += +b; 
		} else {
			i = i - 1;
		}

		requiredExpensesValue.textContent = sum;
	};


});

// Option expenses 
optionExpensesBtn.addEventListener('click', function() {

	for (let i = 0; i < optionExpensesInput.length; i++) {

		let optionalExpensesMoney = optionExpensesInput[i].value;

		appData.optionalExpenses[i] = optionalExpensesMoney;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + '';

	}

});

// Daily budget 
dailyBudgetCalcBtn.addEventListener('click', function() {

	if(appData.budget != undefined) {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay > 0 && appData.moneyPerDay < 2000) {
			incomeLevelValue.textContent = 'Низкий достаток';
		} else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 3000) {
			incomeLevelValue.textContent = 'Средний достаток';
		} else if (appData.moneyPerDay > 3000) {
			incomeLevelValue.textContent = 'Высокий достаток';
		} else {
			incomeLevelValue.textContent = 'Произшла ошибка, вы либо не ввели данные, либо еще что. Повторите процесс еще раз.';
		}

	} else {
		dayBudgetValue.textContent = 'Хм... Что то пошло не так. Для расчета нажмите кнопку "Начать расчет"';
	}



});

// Income 
possibleIncomeInput.addEventListener('input', function() { 
	let items = possibleIncomeInput.value;
	appData.income = items.split(', ');

	incomeValue.textContent = appData.income;

});

// Check saving 
accumulationMoneyCheckbox.addEventListener('click', function() {
	if(appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

// Sum result 
totalSumInput.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +totalSumInput.value,
				percent = +sumProcentInput.value;

		appData.monthIncome = (sum / 100 / 12 * percent).toFixed(1);
		appData.yearIncome = (sum / 100  * percent).toFixed(1);

		monthSavingsValue.textContent = appData.monthIncome;
		yearSavingsValue.textContent = appData.yearIncome;

	} else {
		
	}
});

sumProcentInput.addEventListener('input', function() {
	if (appData.savings == true) {

		let sum = +totalSumInput.value,
			percent = +sumProcentInput.value;

		appData.monthIncome = (sum / 100 / 12 * percent).toFixed(1);
		appData.yearIncome = (sum / 100 * percent).toFixed(1);

		monthSavingsValue.textContent = appData.monthIncome;
		yearSavingsValue.textContent = appData.yearIncome;

	} else {
		
	}
});


let appData = {
	budget: money,
	dayBudget: dayMoney,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};





