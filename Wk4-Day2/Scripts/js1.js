(function() {
//Selecting our node
var myNode = document.querySelector('.row');

myNode.addEventListener("click", function(e) {

// console.log(e);
if(e.target.tagName === 'IMG') {

var imgSrc = e.target.src;
var mainImg = document.getElementById("swapped");
mainImg.src = imgSrc;
console.log(mainImg.src);
//main div - contains the picture want to swap



//console.log(e);

}//// target is an image

}, false); //image is clicked


})(); //self executing function