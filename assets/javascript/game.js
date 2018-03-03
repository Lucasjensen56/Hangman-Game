
// HTML elements to grab
var lifeCount = document.querySelector("#lifeCount");
var wrongLetters = document.querySelector("#wrongGuesses");
var winsCount = document.querySelector("wins");
var wins = 0;
var word = "";
var letterGuess = [];


// variable of a new game
var score = 0;
var chances = 10;
var rightGuessBlanks = [];
var wrongGuess = [];
var numberofBlanks = 0;



var words = [
  "alohomora", 
  "basilisk", 
  "azkaban", 
  "dumbledore"
  ];


 var startGame = function() {
  // game would set with score 0, 
  chances = 10;
  word = words[Math.floor(Math.random() * words.length)];
  letterGuess = word.split("");
  numberofBlanks = letterGuess.length;
  rightGuessBlanks = [];
  wrongGuess = [];
  for (i = 0; i < numberofBlanks; i++) {
    rightGuessBlanks.push("_")
  }
  var solvedWordBlankes = document.querySelector("#wordBlanks");
  solvedWordBlankes = rightGuessBlanks;
}
startGame();


// array of random words

// var words = [
//   "alohomora", 
//   "basilisk", 
//   "azkaban", 
//   "dumbledore"
//   ];

// //   // Pick a random word
//   var word = words[Math.floor(Math.random() * words.length)];


// // // Set up the Answer array
// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//   answerArray[i] = "_";
// }

// var remainingLetters = word.length;

// // remainingLetters = document.querySelector('remainingLetters');


//  // The game loop
// while (remainingLetters > 0) {
// // Show the player the progress
//   alert(answerArray.join("_ "));



// // Take a guess from the player
//   var guess = prompt("Guess a letter, or click Cancel to stop the game.");
//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//   } else {
//     for (var j = 0; j < word.length; j++) {
//       if (word[j] === guess) {
//         answerArray[j] = guess;
//         remainingLetters--;
//         // alert("Good job! The answer was " + word);
//       }
//     }
//   }
// }

  
  




// // // Show the answer 
// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);














