function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        alert('You rolled a ' + roll + '.');

        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }

        if (roll === 5) {
            alert('You rolled a 5! You get to roll again.');
            continue;
        }

        if (roll === 6) {
            alert('You rolled a 6! You get to roll again.');
            continue;
        }

        alert('Congratulations, you win ' + roll + ' gold coins!');
        goldCoins += roll;
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}