'use strict';


function first() {
	console.log(1);
};

function second() {
	console.log(2);
};
 
first();
second();


function learnJS(lang, callback) {
	console.log('Я учу ' + lang);
	callback();
}

learnJS("JavaScript", function(){
	console.log('Я прошел третий урок')
})

