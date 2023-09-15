const numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value, 10);
    attempts++;

    if (userGuess < numberToGuess) {
        document.getElementById("hint").innerText = "Too low!";
    } else if (userGuess > numberToGuess) {
        document.getElementById("hint").innerText = "Too high!";
    } else {
        document.getElementById("hint").innerText = `Congratulations! You've guessed the number in ${attempts} attempts!`;
    }

    document.getElementById("attempts").innerText = `Attempts: ${attempts}`;
}
