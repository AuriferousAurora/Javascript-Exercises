var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6],
    [1, 1, 2],
    [1, 7, 9, 6]
];

function add(a, b) {
    return a + b;
}

var newArr = arr.sort(function(current, next) {
    if (current.reduce(add, 0) > next.reduce(add, 0)) {
        return 1;
    }
    if (current.reduce(add, 0) < next.reduce(add, 0)) {
        return -1;
    }
    return 0;
});

console.log(newArr);
