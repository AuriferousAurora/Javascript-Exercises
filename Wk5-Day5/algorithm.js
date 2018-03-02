function smallest () {
    var factor = 20;
    var test = 2521;
    while (factor > 0) {
        if (test % factor === 0) {
            factor--;
        }
        if (factor === 1) {
            return test;
        }
        else {
            factor = 20;
            test++;
        }
    }
}

console.log(smallest());