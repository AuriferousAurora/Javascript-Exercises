var sentence = prompt("Type a sentence and I will use it to create a banner: ")

function printBanner(input) {
    console.log("*".repeat(input.length + 2));
    console.log("*" + input + "*");
    console.log("*".repeat(input.length + 2));
}

printBanner(sentence);