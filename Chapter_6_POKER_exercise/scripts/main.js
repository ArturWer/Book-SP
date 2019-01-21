"use strict"
let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
let hand = getRandomHand();
let btn = document.querySelector(".newCards");
let cards = document.querySelectorAll(".cards img");
let msg = document.querySelector(".msg");

	hand = [
	{suit:"Diamonds",rank:10},
	{suit:"Hearts",rank:"King"},
	{suit:"Diamonds",rank:"Queen"},
	{suit:"Spades",rank:"Ace"},
	{suit:"Hearts",rank:"Jack"}];

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
		return true;
	} else return false;
};

function checkTwoPairs(ranks){
	let firstCard = ranks.shift();
	let pairsArray = [];

	function searchPairs(array){
		array.forEach((item, index)=>{
			if (firstCard === item) {
				pairsArray.push(firstCard);
				ranks.splice(index, 1);
			}
		});
	};
	for (var i = ranks.length - 1; i > 0; i--) {
		searchPairs(ranks);
		firstCard = ranks.shift();
	}
	
	if (pairsArray.length === 2) {
		return pairsArray;
	} else return false;
};

function checkStraight(ranks){
	let  isStraight = true;
	ranks = ranks.sort();
	let newArr = ranks.map(card=>{
		if (card === "Jack") return 11;
		else if (card === "Queen") return 12;
		else if (card === "King") return 13;
		else if (card === "Ace") return 14;
		else return Number(card);
	});
	/* Ace is 1 or 14 */
	if ((Number(newArr[0]) === 2) && newArr[4] === 14) 
		newArr[4] = 1;

	newArr = newArr.sort();
	for (var i = 0; i < newArr.length; i++) {
		if ((i >= 0) && (i <= 3)) {
			if((newArr[i]+1) !== newArr[i+1])
				isStraight = false;
		}
	}
	return isStraight;
};

function find(ranks){
	let isPair = false;
	let isTwoPairs = false;
	let isTrio = false;
	let is4Cards = false;
	let twoPairs = false;
	let isStraight = false;
	ranks.forEach(rank=>{
		if (!isPair) 
			isPair = arrayContainsNTimes(ranks, 2, rank);
		if (!isTrio) 
			isTrio = arrayContainsNTimes(ranks, 3, rank);
		if (!is4Cards) 
			is4Cards = arrayContainsNTimes(ranks, 4, rank);
	});
	if (isPair && !isTrio) 
		twoPairs = checkTwoPairs(ranks);
	if (!isPair && !isTrio && !is4Cards)
		isStraight = checkStraight(ranks);		
	console.log(isStraight);
	
	let para = document.createElement("p");
	if (is4Cards) para.textContent = "You have FOUR cards";
	else if (isStraight) para.textContent = "You have the STRAIGHT";	
	else if (isTrio) para.textContent = "You have THREE cards";	
	else if (twoPairs) para.textContent = `You have TWO pairs: ${twoPairs[0]}\'s and ${twoPairs[1]}\'s`;
	else if (isPair && !twoPairs) para.textContent = "You have ONE pair cards";	
	else {
		para.className = "red";
		para.textContent = "No game \:\(   Try again";
	}
	msg.appendChild(para);
}

function checkCards(){
	if (hand.length === 5) {
		let ranks = hand.map((card)=>{
			return card.rank;
		});
		find(ranks);
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