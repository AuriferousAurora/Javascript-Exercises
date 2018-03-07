//Card constructor: builds object with name, value, suit, and an image url string.
function Card(name, value, suit, img) {
    this.name = name;
    this.value = value;
    this.suit = suit;
    this.img = img;
};

//Variables allow for Deck constructor to build a deck.
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
    //Shuffles deck.
    this.deck = Shuffle(this.deck);
    console.log(this.deck);
    return this.deck;
};

//Shuffles whatever deck array is passed as a parameter and returns the array.
function Shuffle(selectedDeck) {
    var currentIndex = selectedDeck.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor( Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = selectedDeck[currentIndex];
        selectedDeck[currentIndex] = selectedDeck[randomIndex];
        selectedDeck[randomIndex] = temporaryValue;
    }
    return selectedDeck;
};

function add(a, b) {
    return (a + b);
}
function getPoints(selectedHand, value) {
    var removePoints = [];
    for (var i = 0; i < selectedHand.length; i++) {
        removePoints.push(selectedHand[i][value]);
    }
    var sumPoints = removePoints.reduce(add, 0);
    console.log(sumPoints);
    return sumPoints;
};

//Draws two cards from whatever deck is passed as a parameter and returns it as an array.

function Hand(selectedDeck) {
    // Splice removes a certain number of objects (2) from an array beginning at a certain index (0) and returns a new array containing those objects without deleting the old array and its remaining objects. 
    this.selectedDeck = selectedDeck.splice(0, 2);
    return this.selectedDeck;
};

function Hit(selectedHand, selectedDeck) {
    var hitCard = selectedDeck.shift();
    selectedHand.push(hitCard);
};


//Instantiation of a new deck of cards.

var deckOne = new Deck();

// console.log(deckOne);

//Instantion of two new hands consisting of two cards each. Cards objects are removed from the deck passed as a parameter in the Hand function.
let dealerHand = new Hand(deckOne);
let playerHand = new Hand(deckOne);

// console.log(dealerHand);
// console.log(playerHand);
// console.log(deckOne);
let dealerPoints = getPoints(dealerHand, "value");
let playerPoints = getPoints(playerHand, "value");


document.getElementById("deal-button").addEventListener("click", function() {
    // document.getElementById("dealerCardOne").src = dealerHand[0].img;
    document.getElementById("dealerCardTwo").src = dealerHand[1].img;
    document.getElementById("playerCardOne").src = playerHand[0].img;
    document.getElementById("playerCardTwo").src = playerHand[1].img;
    while (dealerPoints < 17) {
        Hit(dealerHand, deckOne);
        var hitCardImage = document.createElement('img');
        hitCardImage.classList.add("hitCard");
        hitCardImage.setAttribute("src", dealerHand[dealerHand.length -1].img.toString());
        document.getElementById("dealer-hand").appendChild(hitCardImage);
        dealerPoints = getPoints(dealerHand, "value");
    };
    if (dealerPoints > 21) {
        console.log("You win!");
    }
});

document.getElementById("hit-button").addEventListener("click", function() {
    Hit(playerHand, deckOne);
    getPoints(playerHand, "value");
    // console.log(playerHand);
    var hitCardImage = document.createElement('img');
    hitCardImage.classList.add("hitCard");
    hitCardImage.setAttribute("src", playerHand[playerHand.length -1].img.toString());
    document.getElementById("player-hand").appendChild(hitCardImage);
    playerPoints = getPoints(playerHand, "value");
    if (playerPoints > 21) {
        console.log("You lose!");
    }
});

document.getElementById("stand-button").addEventListener("click", function() {
    if (playerPoints > dealerPoints) {
        console.log("You win!");
    }
    else {
        console.log("You lose!");
    }
    });


document.getElementById("restart-button").addEventListener("click", function() {
    // var removedCards = document.getElementsByClassName("hitCard");
    // console.log(removedCards);
    var parentPlayerElement = document.getElementById("player-hand");
    // console.log parentPlayerElement);
    while (parentPlayerElement.childNodes.length > 3) {
        var lastChild = parentPlayerElement.lastChild;
     parentPlayerElement.removeChild(lastChild);
    }
    var parentDealerElement = document.getElementById("dealer-hand");
    // console.log parentPlayerElement);
    while (parentDealerElement.childNodes.length > 3) {
        var lastChild = parentDealerElement.lastChild;
     parentDealerElement.removeChild(lastChild);
    }
 
    document.getElementById("dealerCardTwo").src = "Card-Images/Gray_back.jpg";
    document.getElementById("playerCardOne").src = "Card-Images/Gray_back.jpg";
    document.getElementById("playerCardTwo").src = "Card-Images/Gray_back.jpg";
    deckOne = new Deck();
    dealerHand = new Hand(deckOne);
    playerHand = new Hand(deckOne);
    
});
