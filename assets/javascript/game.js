
// var hello = alert("Do you like fish?");
// console.log(hello);

// array of random words

var words = [
  "alohomora", 
  "basilisk", 
  "azkaban", 
  "dumbledore"
  ];

//   // Pick a random word
  var word = words[Math.floor(Math.random() * words.length)];


// // Set up the Answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;


 // The game loop
while (remainingLetters > 0) {
// Show the player the progress
  alert(answerArray.join(" "));

// Take a guess from the player
  var guess = prompt("Guess a letter, or click Cancel to stop player.");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}
// // Show the answer 
document.getElementById("answer").innerHTML=(answerArray.join(" "));
alert("Good job! The answer was " + word);







// // AnswerArray


















// /*PSEDUOCODE*/

// /*

// Pick a random word

// while the word has not ben guesses {
//   show the player their current progress
//   get a guess from the player 
 
// if the player wants to quit the game {
// Quit the game

// } Else if the guess is not a single letter {
//   tell the player to pick a single letter 
  
// } Else {
//   If the guess is in the word {
//   Update the player's progress with the guess
//   }
//   }
//   }
// Congratulate the player on guessing the word

// */



// /*TAKE PLAYER GUESSES*/



// /*CHECK THAT THE PLAYER'S GUESSES ARE A VALID LETTER*/



// /*KEEP TRACK OF LETTERS THE PLAYER HAS GUESS*/



// /*SHOW THE PLAYER THEIR PROGRESS*/





// /*FINISH WHEN THE PLAYER HAS GUESS THE WORD*/

