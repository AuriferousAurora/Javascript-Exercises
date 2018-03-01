function cipher(text) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    var wordToEncrypt = text.split('');
    var result = wordToEncrypt.map(function(character) {
        var index = alphabet.indexOf(character.toUpperCase());
        var newIndex = index + 13;
        if (newIndex >= 26) {
            newIndex -= 26;
        }
        return alphabet[newIndex];
    })
    return result.join('');
};

var encrypted = cipher('GENIUS');

console.log(encrypted);