const express = require('express');
const { showResult } = require('./flip');
const app = express();

app.get("/games/coin-flip", (req, res) => {
    if (!req.query.pCoin) {
        return res.send({
            error: "Please Choose a side!",
        })
    }

    if (!req.query.bet) {
        return res.send({
            error: "Please Choose an amount to bet!",
        })
    }

    let pCoin = req.query.pCoin;
    let bet = req.query.bet;
    res.send(showResult(pCoin, bet));
});

let portNum = 4000;
app.listen(portNum, () => {
    console.log(`Server is running at port ${portNum}`);
})  