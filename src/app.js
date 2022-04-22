const express = require('express');
const { showResult } = require('./flip');
const app = express();
const port = process.env.PORT || 4000;

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

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})  