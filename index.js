let Word = require("./Word");
let inquirer = require("inquirer");
let words = ["dracula", "wolfman"];
let guessedLetters = []
let tries = 10;

wordGenerator();
getGuess();
// Randomly selects a word and uses the Word constructor to store it
function wordGenerator() {
	//Grab a word from the words array
	let randomWord = words[Math.floor(Math.random() * words.length)];
	//Give the randomWord the Word constructor
	let secretWord = new Word(randomWord);
	//Set the Word Constructor array to the word split into letters
	secretWord.splitLetters = randomWord.toUpperCase().split("");

}

function getGuess() {
	// Prompts the user for each guess and keeps track of the user's remaining guesses
	inquirer.prompt([
		{
			name: "letter",
			message: "Please Guess a Letter"
		}

	]).then(function (guess) {
		let ltr = guess.letter.toUpperCase()
		console.log("You guessed a: " + ltr)
		guessedLetters.push(ltr);
		console.log("You've guessed: " + guessedLetters.join(", "))
		tries--; 
		console.log("You have " + tries + " tries left");

	});
}