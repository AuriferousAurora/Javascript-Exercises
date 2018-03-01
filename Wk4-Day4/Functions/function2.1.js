function callNTimes(n, fun) {
    for (i = 0; i < n; i++) {
        fun();
    }
};

var a = function() {
    console.log("Hello world.");
};

callNTimes(5, a);