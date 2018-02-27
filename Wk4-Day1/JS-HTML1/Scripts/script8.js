function leetSpeak(x) {
    x = x.replace("a".toLowerCase(), "4");
    x = x.replace("e".toLowerCase(), "3");
    x = x.replace("g".toLowerCase(), "6");
    x = x.replace("i".toLowerCase(), "1");
    x = x.replace("o".toLowerCase(), "0");
    x = x.replace("s".toLowerCase(), "5");
    x = x.replace("t".toLowerCase(), "7");
    
    console.log(x);
    }

var sentence = prompt("Leet Speak tranlator. Type a sentence and I will translate it: ");

leetSpeak(sentence);
