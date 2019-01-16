"use strict"
let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Quin", "King"];

function random(num){
  return Math.random()*num;
}

function getRadomCard(){
	let randomSuit = Math.floor(random(suits.length));
	let randomRank = Math.floor(random(ranks.length));
	console.log(`${suits[randomSuit]} ${ranks[randomRank]}`);
};


getRadomCard();

