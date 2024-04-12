function guessingGame() {
    let randNum = Math.floor(Math.random() * 100)
    let count = 0
    let won = false
    return function guessNum(num) {
        if (won) return "The game is over, you already won!"
        count++
        if (num < randNum) {
            return `${num} is too low!`
        }
        else if (num > randNum) {
            return `${num} is too high!`
        }
        else {
            won = true
            const guess = count === 1 ? "guess" : "guesses"
            return `You win! You found ${num} in ${count} ${guess}.`
        }

    }
}
module.exports = { guessingGame };
