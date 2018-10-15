let Letter = require('./Letter');


class Word {
    constructor(word) {
        this.word = word;
        // An array of new Letter objects representing the letters of the underlying word
        this.splitLetters = ["d", "r", "a", "c"];
        this.display =[];
    }

// A function that returns a string representing the word. 
//This should call the function on each letter object (the first function defined in Letter.js) 
//that displays the character or an underscore and concatenate those together.

    stringer(){
        for (let i = 0; i < this.splitLetters.length; i++){
            var ltr = new Letter(this.splitLetters[i]);
            this.display.push(ltr.switcher());
        }
        console.log(this.display.join(" "));

    }

// A function that takes a character as an argument and calls the guess function on each letter object 
//(the second function defined in Letter.js)

    guesser(guess){
        let ltr = new Letter(guess)
        ltr.checker(guess);
    }
}

let test = new Word("tester");
test.stringer();

module.exports = Word;
