var cities = [
    { name: 'Los Angeles', temperature: 60.0, windSpeed: 4 },
    { name: 'Atlanta', temperature: 52.0, windSpeed: 7 },
    { name: 'Detroit', temperature: 48.0, windSpeed: 8},
    { name: 'New York', temperature: 80.0, windSpeed: 6}
];
var newCities = [];
cities.forEach(function(element) {
    newCities.push(element.name);
});

console.log(newCities);