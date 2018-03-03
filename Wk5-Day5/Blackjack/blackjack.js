var deck = [
    { name: "Ace", value: 11, suit: "Spades", img: "/Card-Images/AS.jpg" },
    { name: "King", value: 10, suit: "Spades", img: "/Card-Images/KS.jpg" },
    { name: "Queen", value: 10, suit: "Spades", img: "/Card-Images/QS.jpg" },
    { name: "Jack", value: 10, suit: "Spades", img: "/Card-Images/JS.jpg" },
    { name: "Ten", value: 10, suit: "Spades", img: "/Card-Images/10S.jpg" },
    { name: "Nine", value: 9, suit: "Spades", img: "/Card-Images/9S.jpg" },
    { name: "Eight", value: 8, suit: "Spades", img: "/Card-Images/8S.jpg" },
    { name: "Seven", value: 7, suit: "Spades", img: "/Card-Images/7S.jpg" },
    { name: "Six", value: 6, suit: "Spades", img: "/Card-Images/6S.jpg" },
    { name: "Five", value: 5, suit: "Spades", img: "/Card-Images/5S.jpg" },
    { name: "Four", value: 4, suit: "Spades", img: "/Card-Images/4S.jpg" },
    { name: "Three", value: 3, suit: "Spades", img: "/Card-Images/3S.jpg" },
    { name: "Two", value: 2, suit: "Spades", img: "/Card-Images/2S.jpg" },
    { name: "Ace", value: 11, suit: "Hearts", img: "/Card-Images/AH.jpg"},
    { name: "King", value: 10, suit: "Hearts", img: "/Card-Images/KH.jpg" },
    { name: "Queen", value: 10, suit: "Hearts", img: "/Card-Images/QH.jpg" },
    { name: "Jack", value: 10, suit: "Hearts", img: "/Card-Images/JH.jpg" },
    { name: "Ten", value: 10, suit: "Hearts", img: "/Card-Images/10H.jpg" },
    { name: "Nine", value: 9, suit: "Hearts", img: "/Card-Images/9H.jpg" },
    { name: "Eight", value: 8, suit: "Hearts", img: "/Card-Images/8H.jpg"},
    { name: "Seven", value: 7, suit: "Hearts", img: "/Card-Images/7H.jpg" },
    { name: "Six", value: 6, suit: "Hearts", img: "/Card-Images/6H.jpg" },
    { name: "Five", value: 5, suit: "Hearts", img: "/Card-Images/5H.jpg" },
    { name: "Four", value: 4, suit: "Hearts", img: "/Card-Images/4H.jpg" },
    { name: "Three", value: 3, suit: "Hearts", img: "/Card-Images/3H.jpg" },
    { name: "Two", value: 2, suit: "Hearts", img: "/Card-Images/2H.jpg" },
    { name: "Ace", value: 11, suit: "Clubs", img: "/Card-Images/AC.jpg" },
    { name: "King", value: 10, suit: "Clubs", img: "/Card-Images/KC.jpg" },
    { name: "Queen", value: 10, suit: "Clubs", img: "/Card-Images/QC.jpg" },
    { name: "Jack", value: 10, suit: "Clubs", img: "/Card-Images/JC.jpg" },
    { name: "Ten", value: 10, suit: "Clubs", img: "/Card-Images/10C.jpg" },
    { name: "Nine", value: 9, suit: "Clubs", img: "/Card-Images/9C.jpg" },
    { name: "Eight", value: 8, suit: "Clubs", img: "/Card-Images/8C.jpg" },
    { name: "Seven", value: 7, suit: "Clubs", img: "/Card-Images/7C.jpg" },
    { name: "Six", value: 6, suit: "Clubs", img: "/Card-Images/6C.jpg" },
    { name: "Five", value: 5, suit: "Clubs", img: "/Card-Images/5C.jpg" },
    { name: "Four", value: 4, suit: "Clubs", img: "/Card-Images/4C.jpg" },
    { name: "Three", value: 3, suit: "Clubs", img: "/Card-Images/3C.jpg" },
    { name: "Two", value: 2, suit: "Clubs", img: "/Card-Images/2C.jpg" },
    { name: "Ace", value: 11, suit: "Diamonds", img: "/Card-Images/AD.jpg" },
    { name: "King", value: 10, suit: "Diamonds", img: "/Card-Images/KD.jpg" },
    { name: "Queen", value: 10, suit: "Diamonds", img: "/Card-Images/QD.jpg" },
    { name: "Jack", value: 10, suit: "Diamonds", img: "/Card-Images/JD.jpg" },
    { name: "Ten", value: 10, suit: "Diamonds", img: "/Card-Images/10D.jpg" },
    { name: "Nine", value: 9, suit: "Diamonds", img: "/Card-Images/9D.jpg" },
    { name: "Eight", value: 8, suit: "Diamonds", img: "/Card-Images/8D.jpg" },
    { name: "Seven", value: 7, suit: "Diamonds", img: "/Card-Images/7D.jpg" },
    { name: "Six", value: 6, suit: "Diamonds", img: "/Card-Images/6D.jpg" },
    { name: "Five", value: 5, suit: "Diamonds", img: "/Card-Images/5D.jpg" },
    { name: "Four", value: 4, suit: "Diamonds", img: "/Card-Images/4D.jpg" },
    { name: "Three", value: 3, suit: "Diamonds", img: "/Card-Images/3D.jpg" },
    { name: "Two", value: 2, suit: "Diamonds", img: "/Card-Images/2D.jpg" }
]

// This function returns the images from the array 'deck' to be used in the game.
function selectCard() {
    // Function creates an empty array and creates a variable named 'card' that is a randomly selected number within the range of the length of the chosen deck.
    var selectedCards =[1, 2, 3];
    var card = Math.floor(Math.random()*(deck.length - 1));
    // // The generated number is stored in the array 'selectedCards'.
    selectedCards.push(card);
    // // If the number representing the selected card already exists in the array 'selectedCards', the function is called again so that it can choose a card that has not already been drawn.
    if (card in selectedCards) {
         selectCard();
    }
    // If the number selected corresponds with a card that has not been drawn,the url at that position in the array 'deck' is returned.
    else {
        console.log(deck[card].img);
        return deck[card].img;
    }
}