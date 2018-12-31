"use strict";
let request = new XMLHttpRequest();
let para = document.querySelector('p');
let url = "";
let btn = document.querySelector('button');
let searchTag = document.getElementById('tag')

let searchIMG = (searchText)=>{
	para.innerHTML = "";
	url = `http://api.flickr.com/services/feeds/photos_public.gne?tags=${searchText}&format=json&jsoncallback=?`;
	$.getJSON(url, (data)=>{
		let imgs = data.items;
		imgs.forEach((img)=>{
			console.log(img.media);
			let photo = document.createElement("img");
			photo.src = img.media.m;
			para.appendChild(photo);
		});
	});
};

btn.addEventListener('click', (e)=>{
	e.preventDefault();
	let search = searchTag.value;
	//searchTag.value = "";
	searchIMG(search);
	console.log(search);
});

searchIMG("dog");