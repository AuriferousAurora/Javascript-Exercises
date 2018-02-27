function printHollowRectangle (x, y) {
    console.log("*".repeat(x));
    for (var i = 2; i <= (y -1); i++) {
    console.log("*" + " ".repeat(x - 2) + "*");
    }
    console.log("*".repeat(x));
}

printHollowRectangle(5, 5);