let Letter = require('./Letter');

class Word {
    constructor(word) {
        this.word = word;
        // An array of new Letter objects representing the letters of the underlying word
        this.splitLetters = [];
        this.convertedLtrs = []
        this.guessedLtrs = [];
        this.display =[];
    }

    //Loops the splitLetter string created by index, gives each one the NEW LETTER class, pushes those objects
    //to the convertedLtrs array, and then fills the display with the underscores using the ltr.switcher method.
    convert(){
        for (let i = 0; i < this.splitLetters.length; i++){
            // let ltr = this.splitLetters[i];
            // console.log(ltr);
            var ltr = new Letter(this.splitLetters[i]);
            this.convertedLtrs.push(ltr);
            this.display.push(ltr.switcher());
        }
        // console.log("CONVERTED: " + this.convertedLtrs[0].letter)
        console.log(this.display.join(" "))
    }

// A function that returns a string representing the word. 
//This should call the function on each letter object (the first function defined in Letter.js) 
//that displays the character or an underscore and concatenate those together.

    // stringer(){
    //     this.display = [];
    //     for (let i = 0; i < this.convertedLtrs.length; i++){
    //         // let ltr = this.splitLetters[i];
    //         // console.log(ltr);
    //         var ltr = new Letter(this.splitLetters[i]);
    //         // console.log(ltr);
    //         this.display.push(ltr.switcher());
    //     }
    //     console.log(this.display.join(" "));

    // }

// A function that takes a character as an argument and calls the guess function on each letter object 
//(the second function defined in Letter.js)

    guesser(guess){
        let ltr = guess.toUpperCase()
        this.display = [];

        // if(this.splitLetters.includes(ltr)){
        //     console.log ("It's in there")
        // };

            for (let i = 0; i < this.convertedLtrs.length; i++){
            
                if(this.convertedLtrs[i].letter === ltr){  

                this.convertedLtrs[i].checker(guess);
               
                }

                this.display.push(this.convertedLtrs[i].switcher());
            } 
        

        console.log(this.display.join(" "));
    
    }
}

// **FOR TESTING ONLY**
// let test = new Word("tester");
// test.convert();
// test.guesser("R");


module.exports = Word;
