let getResult = (pCoin, bet, callback) => {
    let url = "http://localhost:4000/games/coin-flip?pCoin=" + pCoin + "&bet=" + bet;
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                callback(data.error, undefined);
            } else {
                callback("Error Detected", {
                    result: data.result, sCoin: data.sCoin, userAmount: data.userAmount
                });
            }
        })
    })
}

module.exports = {
    getResult: getResult,
}