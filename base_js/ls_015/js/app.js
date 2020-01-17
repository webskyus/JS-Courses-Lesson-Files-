'use strict';


let box = document.getElementById('box'),
		btn = document.getElementsByTagName('button'),
		circle = document.getElementsByClassName('circle'),
		heart = document.querySelectorAll('.heart'),
		oneHeart = document.querySelector('.heart'),
		wrapper = document.querySelector('.wrapper')

box.style.backgroundColor = '#473dd8';
btn[1].style.borderRadius = '5px';
// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'yellow';
// circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
// 	heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts) {
// 	item.style.backgroundColor = '#821da2';
// });

let div = document.createElement('div'),
		text = document.createTextNode('some tex'),
		elementCount = document.querySelectorAll('.wrapper div');

div.classList.add('black');

// document.body.appendChild(div);

wrapper.appendChild(div);
document.body.replaceChild(btn[1], circle[1]);



console.log(div);
console.log(text);
console.log(elementCount.length);