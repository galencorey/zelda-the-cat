var myButton = document.getElementById("btn");
var myImage = document.getElementById("img");
var sources = [
  "images/zelda2.jpg",
  "images/zelda3.jpg",
  "images/zelda4.jpg",
  "images/zelda1.gif"
];
var sourceIdx = 0;

myButton.onclick = function() {
  myImage.src = sources[sourceIdx % sources.length];
  sourceIdx++;
};
