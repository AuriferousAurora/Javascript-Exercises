function call3Times(fun) {
    fun();
    fun();
    fun();
  };

var a = function() {
    console.log("Hello world.");
}

call3Times(a);