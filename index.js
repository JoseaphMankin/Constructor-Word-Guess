//Main Game logic. Only dependant on Word.  

let Word = require("./Word");
let inquirer = require("inquirer");
let chalk = require("chalk");

let words = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
let guessedLetters = []
let secretWord = {};
let tries = 10;

console.log(chalk.blue(`
*************************************
** WELCOME TO 50 STATES WORD GUESS **
*************************************
`))

//kicks game loop off. 
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
				if (value.match(letters) && value.length === 1) {
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
				console.log(chalk.green("That's Right"));
			} else {
				console.log(chalk.red("Nope, Try again"))
				tries--;
			}
		}
		winChecker();
	});
}

function winChecker() {

	if (!secretWord.display.includes("_")) {
		console.log(chalk.blue("You Got it!! The Secret Word was: " + secretWord.word));
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
			console.log(chalk.blue("That's cool. Thanks for playing!"));
		}

	});
}