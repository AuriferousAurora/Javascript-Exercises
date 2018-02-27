var userString = prompt("Give me a string you'd like to un-encrypt: ");
var userKey = prompt("Give me the key for the un-encryption (must be in the rang 1-26): ");

function cipher (string, key) {
    var alphabet = "abcedfghijklmnopqrstuvwxyz";
    var encryptedString = "";
    for (i in string) {
        var unicode = string.charCodeAt(i);
        i = i.toLowerCase();
        if ((alphabet.search(i) >= 0)) {
            var new_i = i;
        }
        else {
            var index = alphabet.search(i);
            var new_index = index + key;
            if (new_index > 25) {
                new_index = (new_index - 26);
            }
            var new_i = alphabet[new_index];   
        encryptedString += new_i;
        console.log(encryptedString);
        }
    }
}
cipher(userString, userKey);