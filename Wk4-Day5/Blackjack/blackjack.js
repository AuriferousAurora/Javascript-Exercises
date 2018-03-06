
function Card (name, value, suit, img) {
    this.name = name;
    this.value = value;
    this.suit = suit;
    this.img = img;
};

var suit = "";
var name = "";
var img = "";
var imgAcro = "";
var path = "Card-Images/";

function Deck () {
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
            this.deck.push(new card(name, value, suit, img));
        };
    };
   return this.deck; 
};

var deckOne = new Deck();
console.log(newDeck);




// This function returns the images from the array 'deck' to be used in the game.
function selectCard() {
    // Function creates an empty array and creates a variable named 'card' that is a randomly selected number within the range of the length of the chosen deck.
    var selectedCards =[];
    var card = Math.floor(Math.random()*(deck.length - 1));
    // // The generated number is stored in the array 'selectedCards'.
    selectedCards.push(card);
    // // If the number representing the selected card already exists in the array 'selectedCards', the function is called again so that it can choose a card that has not already been drawn.
    if (card in selectedCards) {
         selectCard();
    }
    // If the number selected corresponds with a card that has not been drawn,the url at that position in the array 'deck' is returned.
    else {
        // console.log(deck[card].img);
        return deck[card].img;
    }
}



document.getElementById("deal-button").addEventListener("click", function() {
    document.getElementById("dealerCardOne").src = selectCard();
    document.getElementById("dealerCardTwo").src = selectCard();
    document.getElementById("playerCardOne").src = selectCard();
    document.getElementById("playerCardTwo").src = selectCard();
    console.log(selectCard.selectCards);
});

document.getElementById("hit-button").addEventListener("click", function() {
    var hitCard = document.createElement('img');
    // hitCard.setAttribute("src", selectCard().toString());
    document.getElementById("player-hand").appendChild(hitCard);
    hitCard.src = selectCard();
});

