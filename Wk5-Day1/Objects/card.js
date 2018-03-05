function Card (point, suit, url) {
    this.point = point;
    this.suit = suit;
    this.url = url;
}

var myArray = [];

function Hand (card) {
    
}



Hand.prototype.addCard = function(card) {
    myArray.push(card);
};

Hand.prototype.getPoints = function() {
    var sum = 0;
    for (i = 0; i <= myArray.length -1; i++) {
        console.log("debug");
        sum += myArray[i].point;
        
        console.log(myArray[i]);
    };
    return sum;
};

var myCard = new Card(5, "diamonds", "images/5_of_diamonds.png")

console.log(myCard.point);
console.log(myCard.suit);

Card.prototype.getImageUrl = function() {
    return this.url; 
};

console.log(myCard.getImageUrl());

var myHand = new Hand();
myHand.addCard(myCard);
myHand.addCard(new Card(13, "spades", "images/ace_of_spades.png"));
console.log(myHand.getPoints());
