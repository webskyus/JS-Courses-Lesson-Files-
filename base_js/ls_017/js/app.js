'use strict'



//  Получить кнопку "Начать расчет" через id
let startCalcBtn = document.getElementById('start');



/*
		Получить все блоки в правой части программы через классы 
		(которые имеют класс название-value, начиная с и заканчивая

*/ 
let dayBudgetValue = document.querySelector('.daybudget-value'),
		incomeLevelValue = document.querySelector('.level-value'),
		requiredExpensesValue = document.querySelector('.expenses-value'),
		optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
		monthSavingsValue = document.querySelector('.monthsavings-value'),
		yearSavingsValue = document.querySelector('.yearsavings-value');



// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let requiredExpensesInputNameFirst = document.getElementById('expenses_1'),
		requiredExpensesInputPriceFirst = document.getElementById('expenses_2'),
		requiredExpensesInputNameSecond = document.getElementById('expenses_3'),
		requiredExpensesInputPriceSecond = document.getElementById('expenses_4');



// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
let requiredApproveBtn = document.getElementsByTagName('button')[0],
		optionExpensesBtn = document.getElementsByTagName('button')[1],
		dailyBudgetCalcBtn = document.getElementsByTagName('button')[2];


// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionExpensesInputFirst = document.querySelectorAll('.optionalexpenses-item')[0],
		optionExpensesInputSecond = document.querySelectorAll('.optionalexpenses-item')[1],
		optionExpensesInputThird = document.querySelectorAll('.optionalexpenses-item');



/*

	Получить оставшиеся поля через querySelector 
	(статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

	*/
let possibleIncomeInput = document.getElementById('income'),
		accumulationMoneyCheckbox = document.getElementById('savings'),
		totalSumInput = document.getElementById('sum'),
		sumProcentInput = document.getElementById('percent'),
		yearInput = document.querySelector('.year-value'),
		monthInput = document.querySelector('.month'),
		dayInput = document.querySelector('.day');
