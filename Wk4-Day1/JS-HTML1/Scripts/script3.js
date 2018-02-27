function tipAmount (amount, service) {
    var tip =[];
    if (service.toLowerCase() === "good") {
        tip.push (amount * .20);
        tip.push(amount)
        return tip
    }
    if (service.toLowerCase() === "fair") {
        tip.push (amount * .15);
        tip.push(amount)
        return tip
    }
    if (service.toLowerCase() === "bad") {
        tip.push (amount * .10);
        tip.push(amount)
        return tip
    }
}

var a = tipAmount(100, "Good")
var b = tipAmount(100, "Fair")
var c = tipAmount(100, "Bad")

function totalAmount (x) {
    var total = x[0] + x[1];
    console.log(total);
    return total;
}

totalAmount(a);
totalAmount(b);
totalAmount(b);

