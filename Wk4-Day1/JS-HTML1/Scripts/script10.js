var myArray = [1, 2, 3, 4, -1, -2, -3, -4]

function positiveNumbers (x) {
    return x > 0;
}

console.log(myArray.filter(positiveNumbers));

