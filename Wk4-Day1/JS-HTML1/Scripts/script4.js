function printNumbers (x, y) {
    while (x <= y) {
        console.log(x);
        x += 1;
    }
    for (var i = x; i <= y; i ++) {
        console.log(i);
    }
}

printNumbers(1, 10);