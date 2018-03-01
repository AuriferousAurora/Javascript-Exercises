var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];

var newPeople = people.sort(function(current, next) {
    if (current.length < next.length) {
        return 1;
    }
    if (current.length > next.length) {
        return -1;
    }
    return 0;
});

console.log(newPeople);