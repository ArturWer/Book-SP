var main = function () {
	"use strict";
	let url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?";
	$.getJSON(url, function (flickrResponse) {
	//пока мы просто выводим ответ в консоль
	console.log(flickrResponse);
	});
};
$(document).ready(main);