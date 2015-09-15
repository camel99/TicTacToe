var app = app || {};

app.gameControl = (function () {
    return {
        gameFields: [],
        results: [],
        properties: {
            playerMark: 'X',
            computerMark: '0',
            fieldAmount: 9
        },
        isClicked: function (index) {
            return !!this.gameFields[index];
        },
        addNewMark: function (index, mark) {
            this.gameFields[index] = mark;
        },
        clearGameFields: function () {
            this.gameFields = [];
        },
        playerMove: function (index) {
            var self = this;
            if (!this.gameFields[index]) {
                self.addNewMark(index, this.properties.playerMark);
            }
        },
        getElementsAmount: function (array) {
            return array.filter(function (value) {
                console.log(value.length);
                return value !== undefined
            }).length;
        },

        computerMove: function () {
            var random = this.getRandomNumber(),
                chosenField = this.gameFields[random],
                self = this,
                gameFieldsLength = self.getElementsAmount(self.gameFields);
            if (gameFieldsLength === 9) {
                return;
            } else {
                if (chosenField) {
                    while (chosenField) {
                        random = this.getRandomNumber(),
                        chosenField = this.gameFields[random];
                    }
                    self.addNewMark(random, this.properties.computerMark);
                    return random;
                } else {
                    self.addNewMark(random, this.properties.computerMark);
                    return random;
                }
            }
        },
        getRandomNumber: function () {
            var random = Math.floor(Math.random() * this.properties.fieldAmount);
            return random;
        },
        dawajTablice: function () {
            console.dir(this.gameFields);
        },
        collectResultButtons: function () {

            var resultButtons = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
            return resultButtons;
        },
        getGameMark: function (arrayNo, elemNo) {
            var self = this,
                result = self.collectResultButtons(),
                gameFieldIndex = result[arrayNo][elemNo],
                gameFieldMark = self.gameFields[gameFieldIndex];

            return gameFieldMark;

        },
        gameOutcome: function () {
            var self = this,
                resultBtns = self.collectResultButtons();
            for (var x = 0; x < resultBtns.length; x++) {
                if (self.getGameMark(x, 0) == 'X' && self.getGameMark(x, 1) == 'X' && self.getGameMark(x, 2) == 'X') {
                    self.playerWon();
                    //self.startNewGame();
                    return true;
                }
                else if (self.getGameMark(x, 0) == 'O' && self.getGameMark(x, 1) == 'O' && self.getGameMark(x, 2) == 'O') {
                    alert('Computer won!');
                    //self.startNewGame();
                }
            }
        },
        playerWon: function () {
            alert("player won");
        }
    }
}()
);