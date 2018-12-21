var main = function () {
	"use strict";
	// getJSON сразу интерпретирует JSON, поэтому
	// нет необходимости вызывать JSON.parse
	$.getJSON("cards/aceOfSpades.json", function (card) {
	Глава 5. Мост
	163
	// вводим карту в консоль
	console.log(card);
	});
};
$(document).ready(main);