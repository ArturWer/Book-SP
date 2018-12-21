var main = function () {
	"use strict";
	// getJSON сразу интерпретирует JSON, поэтому
	// нет необходимости вызывать JSON.parse
	$.getJSON("cards/aceOfSpades.json", function (card) {
	// вводим карту в консоль
	console.log(card);
	let para = document.querySelector('p');
	para.textContent = `${card.rank} of ${card.suit}`;
	});
	$.getJSON("cards/hand.json", function (hand) {
		var $list = $("<ul>");
		// hand — массив, поэтому мы можем применить к нему итерационный процесс
		// с помощью цикла forEach
		hand.forEach(function (card) {
		// создаем элемент списка для хранения карты
		// и присоединяем его к списку
		var $card = $("<li>");
		$card.text(card.rank + " of " + card.suit);
		$list.append($card);
		});
		// присоединяем список к элементу main
		$("main").append($list);
	});
};
$(document).ready(main);