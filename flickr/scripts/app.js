var main = function () {
	"use strict";
	let url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?";
	$.getJSON(url, function (flickrResponse) {
		flickrResponse.items.forEach(function(photo){
			console.log(photo.media.m);
		});
	});
};
$(document).ready(main);