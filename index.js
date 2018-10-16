let Word = require("./Word");
let inquirer = require("inquirer");

let words = ["DRACULA", "WOLFMAN", "MUMMY"];
let guessedLetters = []
let secretWord = {};
let tries = 10;

wordGenerator();

// Randomly selects a word and uses the Word constructor to store it
function wordGenerator() {
	//Grab a word from the words array
	let randomWord = words[Math.floor(Math.random() * words.length)];
	//Give the randomWord the Word constructor
	secretWord = new Word(randomWord);
	//Set the Word Constructor array to the word split into letters
	secretWord.splitLetters = randomWord.toUpperCase().split("");
	secretWord.convert();
	getGuess();
}

function getGuess() {
	// Prompts the user for each guess and keeps track of the user's remaining guesses
	inquirer.prompt([
		{
			name: "letter",
			message: "Please Guess a Letter",
			validate: function (value) {
				var letters = /^[A-Za-z]+$/;
				if (value.match(letters)) {
					return true;
				}
				else {
					return false;
				}
			}
		}
	]).then(function (guess) {
		let ltr = guess.letter.toUpperCase()

		if (guessedLetters.includes(ltr)) {
			console.log("You've already picked that, guess another letter")
		} else {

			secretWord.guesser(ltr);
			guessedLetters.push(ltr);

			if (secretWord.splitLetters.includes(ltr)) {
				console.log("That's Right")
			} else {
				console.log("Nope, Try again")
				tries--;
			}
		}
		winChecker();
	});
}

function winChecker() {

	if (!secretWord.display.includes("_")) {
		console.log("You Got it!! The Secret Word was: " + secretWord.word)
		playAgain()
	} else if (tries > 0) {
		console.log("You've guessed: " + guessedLetters.join(", "))
		console.log("You have " + tries + " tries left");
		getGuess();
	} else {
		console.log("Sorry. No more tries left. The Secret Word was: " + secretWord.word)
	}

}

function playAgain() {
	inquirer.prompt([
		{
			name: "again",
			message: "Would You Like To Play Again",
			type: "confirm",
			default: false,
		}

	]).then(function (answer) {
		if (answer.again === true) {
			secretWord.splitLetters = [];
			secretWord.convertedLtrs = []
			secretWord.guessedLtrs = [];
			secretWord.display = [];
			guessedLetters = []
			wordGenerator();
		} else {
			console.log("That's cool. Thanks for playing!")
		}

	});
}