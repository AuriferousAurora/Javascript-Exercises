var stringOne = 'hello*3';
var stringTwo = 'fun times!';

function letterChanges(string) {
    newString = '';
    vowels = 'aeiou';
     // Select every character that is a letter.
    for (var i = 0; i < string.length; i ++) {
        let lowercaseLetterNumber = string[i].toLowerCase().charCodeAt(0);
        if (lowercaseLetterNumber > 96 && lowercaseLetterNumber < 123) {
            newLowercaseLetterNumber = (lowercaseLetterNumber + 1);
                if (newLowercaseLetterNumber === 123) {
                    newLowercaseLetterNumber = 97;
                }
                else {
                    pass;
                }
        }
    }
    // Shift that index one letter forward.

    // If the letter is a vowel, capitalize the new letter.

    // If the index is not a letter, translate it exactly as it is.
    return a;
};

console.log(letterChanges(stringOne));