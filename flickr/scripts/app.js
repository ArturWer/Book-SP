var main = function () {
	"use strict";
	let url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?";
	let ul = document.querySelector("ul");
	$.getJSON(url, function (flickrResponse) {
		flickrResponse.items.forEach(function(photo){
			console.log(photo.media.m);
			let el = document.createElement("img");
			el.setAttribute("src", photo.media.m);
			let li = document.createElement("li");
			li.appendChild(el);
			ul.appendChild(li);
		});
	});
};
$(document).ready(main);