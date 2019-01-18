"use strict"
let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
let hand = getRandomHand();
let btn = document.querySelector(".newCards");
let cards = document.querySelectorAll(".cards img");
let msg = document.querySelector(".msg");

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
			hand.forEach(oldCard=>{
				if (oldCard.suit === card.suit) {
					if (oldCard.rank === card.rank) {
						console.log("Need new card");
						card = getRadomCard();
					}
				}
			});
		} 
		hand.push(card);
	};
	return hand;
};

function drawCards(){
	for (let i = 0; i < hand.length; i++){
		let src = `img/${hand[i].suit}/${hand[i].rank}_${hand[i].suit}.png`;
		cards[i].src = src;
	}

};
/* array strings n-times exercise*/
function arrayContainsNTimes (array, nTimes, string){
	let count = 0;
	array.forEach((value)=>{
		if (value === string) {
			count++;
		}
	});
	if (count >= nTimes) {
		console.log("Is a pair");
		return true;
	} else return false;
}

function findPairs(ranks){
	let isPair = false;
	ranks.forEach(rank=>{
		if (!isPair) 
			isPair = arrayContainsNTimes(ranks, 2, rank);
	});
			
	
		let para = document.createElement("p");
	if (isPair) {
		para.textContent = "You have a pair cards";	
	} else para.textContent = "No game \:\( Try again";	
	msg.appendChild(para);
}

function checkCards(){
	if (hand.length === 5) {
		let ranks = hand.map((card)=>{
			return card.rank;
		});
		findPairs(ranks);
	}
};

btn.addEventListener("click", ()=>{
	msg.innerHTML = "";
	hand = getRandomHand();
	drawCards();
	checkCards();
});

drawCards();
checkCards();