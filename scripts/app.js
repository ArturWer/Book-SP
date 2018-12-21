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
};
$(document).ready(main);