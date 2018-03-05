function Card (name, value, suit, img) {
    this.name = name;
    this.value = value;
    this.suit = suit;
    this.img = img;
}

var myArray = [];

function Hand (card) {
    
};

Hand.prototype.addCard = function(card) {
    myArray.push(card);
};

Hand.prototype.getPoints = function() {
    var sum = 0;
    for (i = 0; i <= myArray.length -1; i++) {
        console.log("debug");
        sum += myArray[i].value;
        
        console.log(myArray[i]);
    };
    return sum;
};

function Deck () {
    var number = Math.floor(Math.random()*(myArray.length - 1));
    return myArray[number];
    myArray.splice(myArray[number], 1);

};

var myDeck = new Deck();

Deck.prototype.shuffle = function(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
};
};


Card.prototype.getImageUrl = function() {
    return this.img; 
};

var FiveD = new Card(5, "diamonds", "images/5_of_diamonds.png")
var myHand = new Hand();
myHand.addCard(FiveD);
myHand.addCard(new Card(13, "spades", "images/ace_of_spades.png"));

console.log(myHand.getPoints());
