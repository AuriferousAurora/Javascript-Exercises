function multiply (a, b) {
    return (a * b);
}

array = [1, 2, 3, 4, 5];

array.reduce(function(accumulator, currentVal) {
    console.log(multiply(accumulator, currentVal));
    return multiply(accumulator, currentVal);
});

