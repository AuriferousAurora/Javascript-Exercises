// These are two arbitrary arrays.

arrOne = [1, 2, 3, 4, 5, 6, 7];
arrTwo = [10, 20, 30, 40, 50, 60, 70];

// This function mulitplies whatever value is passes through it by two.

function multiply (x) {
    return x * 2;
}

/* This is a reproduction of the map method. It accepts two arguments; one array and one function. It creates an empty array named 'newArr'. It then executes a for loop that begins at zero, finishes when it reaches the end of the array, and increases by one each time through. Each loop executes the function from the second argument and appends it to the new array defined in the beginning of the function. It then logs the new array to the console and returns it. */

function map (arr, func) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]));
    };
    console.log(newArr);
    return newArr;
};

/* It is then possible to plug any array into the function named 'main' as the first variable with the function named 'map' as the second varaible and have 'map' applied to the array. */

map(arrOne, multiply);
map(arrTwo, multiply);