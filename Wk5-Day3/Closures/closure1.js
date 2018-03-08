count = 0;

function counter () {
    var actualCounter = function () {
        count++;
        return count;
    }
    console.log(actualCounter());
    return actualCounter();
};

var countOne = counter();
var countTwo = counter();

countOne;
countOne;
countOne;
counter();
counter();
countTwo;

