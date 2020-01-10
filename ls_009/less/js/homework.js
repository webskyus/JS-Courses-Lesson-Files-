// Home work
/* 
		1. ADD Script Path
 		2. Create 2 variables
		3. Create obj appData
		
		let money          = prompt('Ваш бюджет на месяц?', ''),
				time           = prompt('Введите дату в формате YYYY-MM-DD', ''),
				monthExpenses  = prompt('Введите обязательную статью расходов в этом месяце', ''),
				totalPrice     = prompt('Во сколько обойдется?', '');
		
		let appData = {
			userBudget: money,
			timeData: time,
			bindingExpenses:{
				askMonthExpenses: monthExpenses,
				askTotalPrice: totalPrice,
			},
			optionalExpenses:{},
			income: [{}],
			savings: false,
		};		
		
		let perDayExpenses = appData.userBudget / 30;
		
		alert(perDayExpenses);
*/



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




 
console.log(0 || "" || 2 || undefined || true || falsе)