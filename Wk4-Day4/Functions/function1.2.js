var arr = [-5, -4, -3, -2,  -1, 0, 1, 2, 3, 4, 5]

var newArr = arr.filter(function(element) {
    return element % 2 === 0;
});

console.log(newArr);