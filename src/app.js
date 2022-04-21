const express = require('express');
const { showResult } = require('./flip');
const app = express();

app.get("/games/coin-flip", (req, res) => {
    if (!req.query.pCoin) {
        return res.send({
            error: "Please Choose a side!",
        })
    }

    let pCoin = req.query.pCoin;
    res.send(showResult(pCoin));
});

let portNum = 4000;
app.listen(portNum, () => {
    console.log(`Server is running at port ${portNum}`);
})  