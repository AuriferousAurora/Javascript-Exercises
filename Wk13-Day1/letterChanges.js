function letterChanges (str) {
    var converted = str.replace(/[a-z]/gi, function(iterator) {
        return (iterator === 'z' || iterator === 'Z') ? 'a' : String.fromCharCode(iterator.charCodeAt() + 1);
    });
    var capitalized = converted.replace(/a|e|i|o|u/gi, function(iterator) {
        return iterator.toUpperCase();
    });

    return capitalized;
}
