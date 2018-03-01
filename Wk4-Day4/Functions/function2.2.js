arr = ['automatic', 'supersonic', 'hypnotic', 'funky-fresh'];

function makeAcronym (x) {
    var acronym = x.reduce(function(accumulator, current) {
        if (accumulator === x[0]) {
            accumulator = accumulator[0];
        }
        return accumulator + current[0];
    })
    console.log(acronym);
    return acronym;
}

makeAcronym(arr);

