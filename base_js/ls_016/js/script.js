'use strict'

let menuItem = document.createElement('li'),
		menuWrapper = document.querySelector('.menu'),
		menuItems = document.querySelectorAll('.menu-item'),
		menuItemsSecond = document.querySelectorAll('.menu-item')[2],
		menuText = document.createTextNode('Пятый элемент'),
		bodyWall = document.getElementsByTagName('body'),
		productName = document.querySelector('.title'),
		adsBox = document.querySelector('.adv'),
		appleAskBox = document.querySelector('.prompt'),
		appleAsk = prompt('Как вы относитесь к продукции apple', ''),
		menuTextSecond = document.createTextNode('Второй элемент');

// Добавить класс
menuItem.classList.add('menu-item');
// bodyWall.classList.add('body-main');

// Добавить текст 
menuItem.appendChild(menuText);

// Добавить элемент в конец списка меню 
menuWrapper.appendChild(menuItem);

// Сортировка 
menuWrapper.insertBefore(menuItemsSecond, menuItems[1]);

// Поменять фон у body
document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

// Поменять текст 
productName.innerHTML = ('Мы продаем только подлинную технику Apple');
// document.productName.innerHTML.replace(/Мы продаем только технику Apple/g, 'Мы продаем только подлинную технику Apple ');


// Удалить блок 
adsBox.remove();

// Вопрос
appleAskBox.innerHTML = appleAsk;


console.log(productName);

