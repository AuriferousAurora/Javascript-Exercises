function simpleAdding(num) {
    let array = Array.apply(null, {length: num + 1}).map(Number.call, Number).slice(1);
    addedArray = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    console.log(addedArray);
    return addedArray;
}

simpleAdding(7);

