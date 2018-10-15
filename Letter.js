//Constructor for the individual letters. No dependants. 
//Using es6 ""Class" cause that's what ballers and cool kids do. 

class Letter {

    constructor(letter) {
        // A string value to store the underlying character for the letter
        this.letter = letter.toUpperCase();
        //A placeholder for underlying character
        this.placeholder = '_';
        // A boolean value that stores whether that letter has been guessed yet
        this.guessedYet = false;
    }

    // A function that returns the underlying character if the letter has been guessed, 
    //or a placeholder (like an underscore) if the letter has not been guessed
    switcher() {

        if (this.guessedYet === true) {
            // console.log(this.letter);
            return this.letter;
        }
        else {
            // console.log(this.placeholder);
            return this.placeholder;
        }
    }

    // A function that takes a character as an argument and checks it against the 
    //underlying character,updating the stored boolean value to true if it was guessed 
    //correctly

    checker(guess) {
        if (this.letter === guess) {
            this.guessedYet = true;
        }
    };

}

// ***FOR TESTING ONLY****
// correctLetter = "Q"
// let q = new Letter("q");
// q.switcher();

module.exports = Letter;











