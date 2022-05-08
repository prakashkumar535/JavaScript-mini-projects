const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function () {

    let guess = document.getElementById("guessField").value 
    guesses = guesses + 1;

    if (guess == answer) {
        alert(`${answer} is #.
    It took you ${guesses} guesses.`)
    }
    else if (guess < answer) {
        alert("Your guess number is Too small!");
    }
    else {
        alert("Your guess number is Too large!");
    }
}