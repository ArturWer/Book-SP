"use strict"
let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Quin", "King"];
let hand = getRandomHand();
let btn = document.querySelector(".newCards");

function random(num){
  return Math.random()*num;
};

function getRadomCard(){
	let randomSuit = Math.floor(random(suits.length));
	let randomRank = Math.floor(random(ranks.length));
	return {suit:suits[randomSuit], rank:ranks[randomRank]};
};

function getRandomHand(){
	let hand = [];
	for (var i = 0; i < 5; i++) {
		let card = getRadomCard();
		/* check if it's new card or no */
		if (hand.length>0) {
			while (hand.indexOf(card) >= 0) {
				console.log("Need new card");
				card = getRadomCard();
			}
		} 
		hand.push(card);
	};
	return hand;
};

function drawCards(hand){

};

btn.addEventListener("click", ()=>{
	hand = getRandomHand();
	console.table(hand);
});

