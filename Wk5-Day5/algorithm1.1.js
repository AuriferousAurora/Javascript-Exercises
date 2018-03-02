function bottles () {
    for (var i = 99; i >= 0; i--) {
        var j = (i -1);
        var normal = "beer";
        var seven = "Miller";
        var five = "Lite";
        if (i > 2) {
            if (i % 7 === 0 && i % 5 === 0) {
                normal = seven + five;
            }
            else if (i % 7 === 0) {
                normal = seven;
            }
            else if (i % 5 === 0) {
                normal = five;
            }
            console.log(i.toString() + " bottles of " + normal + " take one down, pass it around, " + j.toString() + " bottles of " + normal + " on the wall.");
        }
        if (i === 2) {
            console.log(i.toString() + " bottles of " + normal + " take one down, pass it around, one more bottle of " + normal + " on the wall.");
        }
        if (i === 0) {
            console.log("1 bottle of beer on the wall, take one down, pass it around, no more bottles beer on the wall. Go home, you drunkards.");
        }
    }
}


bottles();