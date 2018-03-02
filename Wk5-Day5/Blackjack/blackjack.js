var deck = [
    { name: "Ace", value: 11, suit: "Spades", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/AS.jpg" },
    { name: "King", value: 10, suit: "Spades", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/KS.jpg" },
    { name: "Queen", value: 10, suit: "Spades", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/QS.jpg" },
    { name: "Jack", value: 10, suit: "Spades", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/JS.jpg" },
    { name: "Ten", value: 10, suit: "Spades", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/10S.jpg" },
    { name: "Nine", value: 9, suit: "Spades", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/9S.jpg" },
    { name: "Eight", value: 8, suit: "Spades", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/8S.jpg" },
    { name: "Seven", value: 7, suit: "Spades", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/7S.jpg" },
    { name: "Six", value: 6, suit: "Spades", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/6S.jpg" },
    { name: "Five", value: 5, suit: "Spades", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/5S.jpg" },
    { name: "Four", value: 4, suit: "Spades", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/4S.jpg" },
    { name: "Three", value: 3, suit: "Spades", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/3S.jpg" },
    { name: "Two", value: 2, suit: "Spades", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/2S.jpg" },
    { name: "Ace", value: 11, suit: "Hearts", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/AH.jpg"},
    { name: "King", value: 10, suit: "Hearts", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/KH.jpg" },
    { name: "Queen", value: 10, suit: "Hearts", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/QH.jpg" },
    { name: "Jack", value: 10, suit: "Hearts", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/JH.jpg" },
    { name: "Ten", value: 10, suit: "Hearts", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/10H.jpg" },
    { name: "Nine", value: 9, suit: "Hearts", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/9H.jpg" },
    { name: "Eight", value: 8, suit: "Hearts", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/8H.jpg"},
    { name: "Seven", value: 7, suit: "Hearts", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/7H.jpg" },
    { name: "Six", value: 6, suit: "Hearts", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/6H.jpg" },
    { name: "Five", value: 5, suit: "Hearts", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/5H.jpg" },
    { name: "Four", value: 4, suit: "Hearts", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/4H.jpg" },
    { name: "Three", value: 3, suit: "Hearts", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/3H.jpg" },
    { name: "Two", value: 2, suit: "Hearts", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/2H.jpg" },
    { name: "Ace", value: 11, suit: "Clubs", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/AC.jpg" },
    { name: "King", value: 10, suit: "Clubs", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/KC.jpg" },
    { name: "Queen", value: 10, suit: "Clubs", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/QC.jpg" },
    { name: "Jack", value: 10, suit: "Clubs", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/JC.jpg" },
    { name: "Ten", value: 10, suit: "Clubs", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/10C.jpg" },
    { name: "Nine", value: 9, suit: "Clubs", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/9C.jpg" },
    { name: "Eight", value: 8, suit: "Clubs", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/8C.jpg" },
    { name: "Seven", value: 7, suit: "Clubs", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/7C.jpg" },
    { name: "Six", value: 6, suit: "Clubs", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/6C.jpg" },
    { name: "Five", value: 5, suit: "Clubs", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/5C.jpg" },
    { name: "Four", value: 4, suit: "Clubs", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/4C.jpg" },
    { name: "Three", value: 3, suit: "Clubs", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/3C.jpg" },
    { name: "Two", value: 2, suit: "Clubs", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/2C.jpg" },
    { name: "Ace", value: 11, suit: "Diamonds", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/AD.jpg" },
    { name: "King", value: 10, suit: "Diamonds", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/KD.jpg" },
    { name: "Queen", value: 10, suit: "Diamonds", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/QD.jpg" },
    { name: "Jack", value: 10, suit: "Diamonds", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/JD.jpg" },
    { name: "Ten", value: 10, suit: "Diamonds", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/10D.jpg" },
    { name: "Nine", value: 9, suit: "Diamonds", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/9D.jpg" },
    { name: "Eight", value: 8, suit: "Diamonds", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/8D.jpg" },
    { name: "Seven", value: 7, suit: "Diamonds", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/7D.jpg" },
    { name: "Six", value: 6, suit: "Diamonds", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/6D.jpg" },
    { name: "Five", value: 5, suit: "Diamonds", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/5D.jpg" },
    { name: "Four", value: 4, suit: "Diamonds", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/4D.jpg" },
    { name: "Three", value: 3, suit: "Diamonds", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/3D.jpg" },
    { name: "Two", value: 2, suit: "Diamonds", img: "/Users/KyleEverettLang/Documents/DC/Javascript-Exercises/Wk5-Day5/Blackjack/Card-Images/2D.jpg" }
]

function selectCard() {
    selectedCards =[];
    var card = Math.floor(Math.random()*(deck.length - 1));
    selectedCards.appened(card);
    if (card in selectedCards) {
        selectCard();
    }
    else {
        return deck.img;
    }
}

// var dealerCardOne = document.createElement('img');
// dealer-hand.appendChild(dealerCardOne);
// dealerCardone="img src='x'";

var card = Math.floor(Math.random()*(deck.length - 1));
console.log(card);