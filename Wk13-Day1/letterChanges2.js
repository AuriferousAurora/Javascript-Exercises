function letterChanges (input) {
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    var vowels = 'aeiou';
    inputString = input.split('');
    newString = '';

    for (let i = 0; i < inputString.length; i++) {
        
        if (alpha.includes(inputString[i])) {

            newLetter = inputString[i + 1];
            newString += newLetter;
        } else {
            console.log('not an alpha')
        }
    }
    console.log(newString);
    
}


letterChanges('hello*3');