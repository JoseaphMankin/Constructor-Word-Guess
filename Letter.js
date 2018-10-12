// Letter.js: Contains a constructor, Letter. 
//This constructor should be able to either display an underlying character or a 
//blank placeholder (such as an underscore), depending on whether or not the user has 
//guessed the letter. That means the constructor should define:
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let guessedArr = [];

let Letter = function (letter) {
    
    // A string value to store the underlying character for the letter
    this.letter = letter,
    // A boolean value that stores whether that letter has been guessed yet
    this.guessedYet = false;

    // this.guessedYet = function (){
    //     if (alphabet.indexOf(this.letter) === -1 ){
    //         return false
    //     } else{
    //         return true
    //     }
    // }

    // A function that returns the underlying character if the letter has been guessed, 
    //or a placeholder (like an underscore) if the letter has not been guessed

    this.hasBeenGuessed = function () {
        if (this.guessedYet){
            return this.letter;
        } else {
            return "_";
        }
        
    }

    // A function that takes a character as an argument and checks it against the 
    //underlying character,updating the stored boolean value to true if it was guessed correctly

    this.checker = function (letter) {
        guessedArr.push(letter);
    }

};



