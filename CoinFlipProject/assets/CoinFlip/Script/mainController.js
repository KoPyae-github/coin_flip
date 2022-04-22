const gameDAL = require('./gameDAL');

cc.Class({
    extends: cc.Component,

    properties: {
        current: {
            default: null,
            type: cc.Label,
        },

        bet: {
            default: null,
            type: cc.Label,
        },

        result: {
            default: null,
            type: cc.Label,
        },

        coin: {
            default: null,
            type: cc.Node,
        },

        headButton: {
            default: null,
            type: cc.Button,
        },

        tailButton: {
            default: null,
            type: cc.Button,
        },

        cImg: {
            default: [],
            type: cc.SpriteFrame,
        },

        currentAmount: "...",
        betAmount: 2,
    },

    onLoad() {
        let self = this;

        self.init();
    },

    init() {
        let self = this;

        self.setResultEmpty();
        self.buttonEnable();
        self.current.string = self.currentAmount;
        self.bet.string = `Bet Amount is ${self.betAmount}`;
    },

    setResultEmpty() {
        let self = this;

        self.result.string = "";
    },

    buttonDisable() {
        let self = this;

        self.headButton.interactable = false;
        self.tailButton.interactable = false;
    },

    buttonEnable() {
        let self = this;

        self.headButton.interactable = true;
        self.tailButton.interactable = true;
    },

    onClickBet(event, num) {
        let self = this;

        self.buttonDisable();
        self.setResultEmpty();
        self.coin.getComponent(cc.Animation).play();
        let bet = self.betAmount;
        let pCoin = num;
        gameDAL.getResult(pCoin, bet, (err, { result, sCoin, userAmount }) => {
            self.r = result;
            self.s = sCoin;
            self.u = userAmount;

            self.scheduleOnce(() => {
                self.result.string = self.r;
                self.current.string = self.u;
                if (self.s == 0) {
                    self.coin.getComponent(cc.Sprite).spriteFrame = self.cImg[0];
                } else if (self.s == 1) {
                    self.coin.getComponent(cc.Sprite).spriteFrame = self.cImg[1];
                }
                self.buttonEnable();
            }, 3.2);
        });
    },

    onAnimCompleted() {
        console.log("Animation is Completed!");
    },
});
