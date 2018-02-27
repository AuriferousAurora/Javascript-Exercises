function longVowels (input) {
    if (input.indexOf("aa") >= 0) {
        input = input.replace("aa", "aaaaa");
        console.log(input);
    }
    if (input.indexOf("ee") > 0) {
        input = input.replace("ee", "eeeee");
        console.log(input);
    }
    if (input.indexOf("ii") > 0) {
        input = input.replace("ii", "iiiii");
        console.log(input);
    }
    if (input.indexOf("oo") > 0) {
        input = input.replace("oo", "ooooo");
        console.log(input);
    }
    if (input.indexOf("uu") > 0) {
        input = input.replace("uu", "uuuuu");
        console.log(input);
    }
}

longVowels("aardvark");
longVowels("cheese");
longVowels("waterskiing");
longVowels("good");
longVowels("vacuum");
