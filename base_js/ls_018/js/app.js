'use strict';


let generalBtn = document.querySelectorAll('button'),
		link       = document.querySelector('a');

// generalBtn[0].onclick = function (param) { 
// 	console.log('some action');
// };


// generalBtn[0].addEventListener('click', function (params) {
// 	console.log(2);
// 	console.log(3);
// });

// generalBtn[0].addEventListener('mouseenter', function (params) {
// 	console.log(4);
// 	console.log(5);
// });

// generalBtn[0].addEventListener('DblClick', function (params) {
// 	console.log(6);
// 	console.log(7);
// });

link.addEventListener('click', function(param) {
	param.preventDefault();
});


generalBtn.forEach(function(param) {
	param.addEventListener('mouseleave', function(event) {
		let eventType = event.target;
		console.log('some | some ' +  eventType);
	});
});