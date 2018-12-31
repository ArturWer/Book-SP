"use strict"
let h1 = document.querySelector("h1");
h1.textContent = "Hi";
let words = ["I'm just", "want to say", "Happy New Year!!!", "My friend:D"];
let counter = 0;

setInterval(()=>{
	h1.textContent = words[counter++];
	if (counter > words.length-1) counter = 0;
}, 1500);