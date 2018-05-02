function letterChanges(string) {
    newString = '';
    vowels = 'aeiou'
    // Check to see if index in string is a letter.
    for (var i = 0; i < string.length; i++) {
        let letterNumber = string[i].toLowerCase().charCodeAt(0);

        console.log(letterNumber);
        if (letterNumber < 123 && letterNumber > 96) {
            newLetterNumber = (letterNumber + 1);
            if (newLetterNumber > 122) {
            
            }

            console.log(newLetterNumber);
            newLetter
            newString += newLetterNumber
        }
        
    }
    // newString = newString.toString();
    console.log(newString);
    return newString;
    // If index == letter, move letter up along the alphabet one.

    // If index == anyything else, remove it.

    // If new index letter is vowel, move to uppercase. 

    // Return new string.
}

letterChanges('hello*3');

