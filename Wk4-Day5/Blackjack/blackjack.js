
function Card(name, value, suit, img) {
    this.name = name;
    this.value = value;
    this.suit = suit;
    this.img = img;
};

var name = "";
var suit = "";
var img = "";
var imgAcro = "";
var path = "Card-Images/";


// Builds deck of card objects, stores them in array, and returns the array.
function Deck() {
    this.deck = [];
    for (var j = 0; j <= 3; j++) {
        if (j == 0) {
            suit = "hearts";
            imgAcro = "H.jpg";
        }
        else if (j == 1) {
            suit = "spades";
            imgAcro = "S.jpg";
        }
        else if (j == 2) {
            suit = "clubs";
            imgAcro = "C.jpg";
        }
        else if (j == 3) {
            suit = "diamonds";
            imgAcro = "D.jpg";
        }
        for (var i = 1; i <= 13; i++) {
            var value = i;
            img = path + i.toString() + imgAcro;
            switch (i) {
                case (1):
                    name = "Ace";
                    value = 13;
                    img = path + "A" + imgAcro;
                    break;
                case (2):
                    name = "Two";
                    break;
                case (3):
                    name = "Three";
                    break;
                case (4):
                    name = "Four";
                    break;
                case (5):
                    name = "Five";
                    break;
                case (6):
                    name = "Six";
                    break;
                case (7):
                    name = "Seven";
                    break;
                case (8):
                    name = "Eight";
                    break;
                case (9):
                    name = "Nine";
                    break;
                case (10):
                    name = "Ten";
                    break;
                case (11):
                    name = "Jack";
                    value = 10;
                    img = path + "J" + imgAcro;
                    break;
                case (12):
                    name = "Queen";
                    value = 10;
                    img = path + "Q" + imgAcro;
                    break;
                case (13):
                    name = "King";
                    value = 10;
                    img = path + "K" + imgAcro;
                    break;
                default:
                    break;
            }
            this.deck.push(new Card(name, value, suit, img));
        };
    };
   return this.deck; 
};

//Instantiation of a new deck of cards.
var deckOne = new Deck();
// console.log(deckOne);

//Draws two cards from whatever deck is passed as a parameter and returns it as an array.
function Hand(selectedDeck) {
    this.selectedDeck = selectedDeck.splice(0, 2);
    return this.selectedDeck;
};

//Instantion of two new hands consisting of two cards each. Cards objects are removed from the deck passed as a parameter in the Hand function.
var dealerHand = new Hand(deckOne);
var playerHand = new Hand(deckOne);

console.log(dealerHand);
console.log(playerHand);






// var card = Math.floor(Math.random()*(deck.length - 1));


document.getElementById("deal-button").addEventListener("click", function() {
    // document.getElementById("dealerCardOne").src = dealerHand[0].img;
    document.getElementById("dealerCardTwo").src = dealerHand[1].img;
    document.getElementById("playerCardOne").src = playerHand[0].img;
    document.getElementById("playerCardTwo").src = playerHand[1].img;
});

// document.getElementById("hit-button").addEventListener("click", function() {
//     var hitCard = document.createElement('img');
//     // hitCard.setAttribute("src", selectCard().toString());
//     document.getElementById("player-hand").appendChild(hitCard);
//     hitCard.src = selectCard();
// });

