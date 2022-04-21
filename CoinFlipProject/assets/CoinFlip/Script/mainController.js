const gameDAL = require('./gameDAL');

cc.Class({
    extends: cc.Component,

    properties: {
        result: {
            default: null,
            type: cc.Label,
        },

        coin: {
            default: null,
            type: cc.Node,
        },

        cImg: {
            default: [],
            type: cc.SpriteFrame,
        },
    },

    onLoad() {
        let self = this;

        self.setResultEmpty();
    },

    setResultEmpty() {
        let self = this;

        self.result.string = "";
    },

    onClickBet(event, num) {
        let self = this;

        self.setResultEmpty();
        self.coin.getComponent(cc.Animation).play();
        let pCoin = num;
        gameDAL.getResult(pCoin, (err, { result, sCoin }) => {
            self.r = result;
            self.s = sCoin;

            self.scheduleOnce(() => {
                self.result.string = self.r;
                if (self.s == 0) {
                    self.coin.getComponent(cc.Sprite).spriteFrame = self.cImg[0];
                } else if (self.s == 1) {
                    self.coin.getComponent(cc.Sprite).spriteFrame = self.cImg[1];
                }
            }, 3.2);
        });
    },

    onAnimCompleted() {
        console.log("Animation is Completed!");
    },
});
