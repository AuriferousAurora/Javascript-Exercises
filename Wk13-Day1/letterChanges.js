function letterChanges (input) {
    var string = input.split();
    var alphabet = /[a-z]/;
    var vowels = /[aeiou]/;
    betaString = [];
    finalString = [];
    // Intake a a string. Run a loop on each index in the string. If the index contains an alphabetical character, shift it one index right along a typical alphabet array.
    string.forEach((iterator) => {
        if (alphabet.test(iterator) === true) {
            let newLetter = ((iterator.charCodeAt(0)) + 1);
            if (newLetter === 123) {
                let newLetter = 97;

            } else {
                stringLetter = newLetter.toString();
                betaString.push(stringLetter.fromCharCode(0));
            }
        } else {
            betaString.push(iterator);
        }
    });

    // betaString.forEach ((iterator) => {
    //     if (vowels.test(iterator) === true) {
    //         let captial = iterator.toUpperCase();
    //         finalString.push(captial);
    //     } else {
    //         finalString.push(iterator);
    //     }
    // });

    console.log(betaString);
    return finalString;


    // For any non-alphabateical character, return the character unmutated.

    // If any new character is a vowel, capitalize it.
}

letterChanges('hello*3');