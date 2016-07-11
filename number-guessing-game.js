/* Number guessing game!

Create a file called number-guessing-game.js.

In this file, re-write your number guessing game (from the basic javascript workshop) for 
the command line!

Instead of using prompt and alert, you will have to use capabilities from NodeJS and any 
external module. HINT: there is an npm library called prompt that can help you 
with that :) */

// From basic javascript workshop, the guessing game:

/* The Penniless Gambler

Challenge: Generate a random number between 1 and 100. Using the browser functions prompt 
and alert, ask the user to guess the number. You should give them 4 tries to guess the 
number. If they guess wrong, tell them if it's higher or lower. If they guess right, 
congratulate them. Otherwise, give them a message saying what the correct number was, as
well as their list of guesses. */

var fs = require('fs');
var prompt = require('prompt');
var request = require('request');


//1. first, wrap your prompt into a separate function.
//2. set a value (variable) to keep track of the amount of tims tried.
//3. on every try, increment that value by 1.
//4 call the function (promp.get) onto itself IF the value is less than 4.


function guessGame() {
    var counter = 3;
    var randomNum = Math.floor(Math.random() * 100);

    function runGame() {
        prompt.get('number', function(err, answers) {
            if (err) {
                console.log("There was an error.")
            }
            else {
                // console.log("This is the randomNum", randomNum)

                if (Number(answers.number) === randomNum) {
                    console.log("YOU WIN!");
                }
                else {
                    console.log("Wrong!");
                    
                    if (Number(answers.number) < randomNum) {
                        console.log("The number you guessed is too low.")
                    }
                    if (Number(answers.number) > randomNum) {
                        console.log("The number you guessed is too high.")
                    }
                    if (counter > 0) {
                        counter--;
                        console.log("Try again!");
                        runGame();
                    }
                    else {
                        console.log("You used up all your guesses! You lose! The number was " + randomNum + "...")
                    }
                }
            }
        })
    }
    runGame();

}

guessGame();