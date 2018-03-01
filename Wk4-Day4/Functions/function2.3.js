var arr = [
    { name: "Kyle" },
    { name: "Christian" },
    { name: "Andy" }
];

function greeting(name) {
    console.log("Hello " + name.name + "!");
};

arr.forEach(function(x) {
    greeting(x);
});