// 0 = Head, 1 = Tail
let min = 0;
let max = 1;

const fs = require('fs');
let userAmount = fs.readFileSync("note.txt").toString();
userAmount = parseInt(userAmount);

let getflip = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let showResult = (pCoin, bet) => {
    bet = parseInt(bet);
    let sCoin = getflip(min, max);
    if (pCoin == sCoin) {
        userAmount += bet;
        fs.writeFileSync("note.txt", userAmount.toString());
        return {
            sCoin: sCoin,
            result: "Player Win",
            userAmount: userAmount,
        };
    } else {
        userAmount -= bet;
        fs.writeFileSync("note.txt", userAmount.toString());
        return {
            sCoin: sCoin,
            result: "Player Lose",
            userAmount: userAmount,
        };
    }
}

module.exports = {
    showResult: showResult,
};