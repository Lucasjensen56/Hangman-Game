

// array of random words`

var words = [
  "alohomora", 
  "basilisk", 
  "azkaban", 
  "dumbledore"
  ];

 // Pick a random word
  var word = words[Math.floor(Math.random() * words.length)];


// // // Set up the Answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

//  // The game loop


while (remainingLetters > 0) {
// // Show the player the progress

  alert(answerArray.join("_ "));

// // Take a guess from the player
  var guess = prompt("Guess a letter, or click Cancel to stop the game.");
  if (guess === null) {
    var gameOver = document.querySelector("#gameOver").innerHTML = "Game over!"
    alert("Game over!")
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
        document.getElementById("theWord").innerHTML = 
      }
    }    
  }

}


if (word.indexOf (userGuess) > -1) {
  //     alert("You guessed a correct letter");
  
  //     document.getElementById("theWord").innerHTML += userGuess;
  //     document.getElementById("lettersGuessed").innerHTML += userGuess;
  //     correct = correct + 1;
  //     if (correct == 6) {
  //       alert("you Won")
  //       inititalizeGame();
  //     }


  
// // // Show the answer
alert("Good job! The answer was " + word);




// var words = [
//   "alohomora", 
//   "basilisk", 
//   "azkaban", 
//   "dumbledore"
//   ];
// var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
// "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
// "U", "V", "W", "X", "Y", "Z"]

// var alphabet = getAlphabetArray();
// var wins = 0;
// var losses = 0;
// var correct = 0;
// var lives = 8;
// var letterGuessed=[];
// var letterBlanks=[];
// var randomWord = "";

// var word = "timeup";

// function gameOver() {
//   if (letterBlanks.indexOf("_") === -1) {
//       wins++;
//       alert("You won the game!");
    
//   } else {
//     losses++;
//     alert("You lost the game");
//   }

//   document.getElementById("winsCount").innerHTML = wins;
//   document.getElementById("lossCount").innerHTML = losses;
  
  
// // restarting the game
// restartTheGame();

// }

// function checkGameOver () {
//     return livesLeft === 0 || correct === 6;
// }

// function isValidLetter(letter){
//   return alphabet.indexOf(letter) > -1;
// }

// function updateWrongGuess() {
//   livesLeft--;
//   document.getElementById("letterGuessed").innerHTML = letterGuessed.join(" ");
//   document.getElementById("user-lives").innerHTML = livesLeft;
// }

// function inititalizeGame() {
//   livesLeft--;
//   document.getElementById("lettersGuessed").innerHTML = letterGuessed.join(" ");
//   document.getElementById("user-lives").innerHTML = livesLeft;
// }

// function getAlphabetArray () {
// 	var alphabetArray=[];
// 	for (var i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++){
// 		alphabetArray.push(String.fromCharCode(i));
// 	}
// 	return alphabetArray;
// }


// function startGame(){
//     livesLeft = 10;
//     letterGuessed=[];
//     letterBlanks=[];
//     randomWord = words [Math.floor ((math.random()=words.length))];

//   for (i = 0; i < randomWord.length; i++){
//     letterBlanks.push("_");
//   }
// }

// document.onkeyup = function(event) {

//   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//   if (word.indexOf (userGuess) > -1) {
//     alert("You guessed a correct letter");

//     document.getElementById("theWord").innerHTML += userGuess;
//     document.getElementById("lettersGuessed").innerHTML += userGuess;
//     correct = correct + 1;
//     if (correct == 6) {
//       alert("you Won")
//       inititalizeGame();
//     }

//   } else {  
//     lives = lives - 1;
//     if (lives === 0) {
//       alert("You loose");
//     } else {
//       alert("wrong guess! YOU now have " + lives + " LIVES.");
//       document.getElementById("lettersGuessed").innerHTML += userGuess;
//       document.getElementById("user-lives").innerHTML = lives;
//     }



//   }




// }