"use strict"
let h1 = document.querySelector("h1");
h1.textContent = "Hi";
let words = ["I'm just", "want to say", "Happy New Year!!!", "My friend:D"];
let counter = 0;

function randomColor(num) {
	return `rgb(${(Math.random()*num)}, ${(Math.random()*num)}, ${(Math.random()*num)})`;
}
setInterval(()=>{
	h1.style.color = randomColor(255);
	h1.textContent = words[counter++];
	if (counter > words.length-1) {
		counter = 0;
	}
}, 1000);