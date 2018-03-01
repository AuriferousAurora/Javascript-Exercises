var arr = [1, 2, 3, 4, 5];

var newArr = arr.map(function(element){
    return Math.pow(element, 2);
});

console.log(newArr);
