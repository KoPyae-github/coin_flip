// 0 = Head, 1 = Tail
let min = 0;
let max = 1;

let getflip = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let showResult = (pCoin) => {
    let sCoin = getflip(min, max);
    if (pCoin == sCoin) {
        return {
            sCoin : sCoin,
            result: "Player Win",
        };
    } else {
        return {
            sCoin : sCoin,
            result: "Player Lose",
        };
    }
}

module.exports = {
    showResult: showResult,
};