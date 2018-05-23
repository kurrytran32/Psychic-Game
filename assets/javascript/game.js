
let wins = 0;
let loss = 0;
let guessesArr = [" "];
//converts array items into string to be shown on page
guessesArr.toString();
let guessLeft = 9;

let compLtr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



//what pressing a key does
document.onkeyup = function (event) {

    let userKey = event.key;
    //Lets the comp guess be chosen at random
    let compChc = compLtr[Math.floor(Math.random() * compLtr.length)];

    //method for putting user input and displaying into array
    guessesArr.push(userKey);


    //what happens when you guess letter right
    if (userKey === compChc) {
        wins++;
        alert("You guessed right!");
        // resetting guesses left value to original
        guessLeft = 9;
        // resets array, clears out items
        guessesArr.splice(0, guessesArr.length);


    } else {
        guessLeft--;
        if (guessLeft === 0) {
            loss++;
            alert("I'm starting to think you're a phony...");
            // resetting guesses left value to original
            guessLeft = 9;
            guessesArr.splice(0, guessesArr.length);
        }
    }





    let html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + loss + "</p>" +
        "<p>Guesses Left: " + guessLeft + "</p>" +
        "<p>Your Guesses: " + guessesArr + "</p>";

    document.querySelector("#game").innerHTML = html;

}


