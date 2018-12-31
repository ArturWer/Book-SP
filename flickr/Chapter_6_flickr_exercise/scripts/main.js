"use strict";
let request = new XMLHttpRequest();
let para = document.querySelector('p');
let url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=fireworks&format=json&jsoncallback=?";

$.getJSON(url, (data)=>{
	let imgs = data.items;
	imgs.forEach((img)=>{
		console.log(img.media);
		let photo = document.createElement("img");
		photo.src = img.media.m;
		para.appendChild(photo);
	});
});