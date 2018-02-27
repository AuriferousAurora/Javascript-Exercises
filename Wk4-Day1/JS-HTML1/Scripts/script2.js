function tipAmount (amount, service) {
    if (service.toLowerCase() === "good") {
        var tip = (amount * .20);
        console.log(tip)
    }
    if (service.toLowerCase() === "fair") {
        var tip = (amount * .15);
        console.log(tip)
    }
    if (service.toLowerCase() === "bad") {
        var tip = (amount * .10);
        console.log(tip)
    }
}

tipAmount(100, "Good")
tipAmount(100, "Fair")
tipAmount(100, "Bad")