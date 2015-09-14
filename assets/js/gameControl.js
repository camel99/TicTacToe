var app = app || {};

app.gameControl = (function () {
        return {
            gameFields: [],
            results: [],
            isClicked: function (index) {
                return !!this.gameFields[index];
            },
            addNewMark: function (index, mark) {
                this.gameFields[index] = mark;
            },
            clearGameFields: function () { // odpalaj na start new game
                this.gameFields = [];
            },
            gameOutcome: function () {
                //robisz to samo co na buttonach tylko na tej tablicy
            },
            playerMove: function (index) {
                if (!this.gameFields[index]) {
                    this.gameFields[index] = 'X';
                }
            },
            getElementsAmount: function (array) {
                return array.filter(function (value) {
                    return value !== undefined
                }).length;
            },

            computerMove: function () {
                var random = Math.floor(Math.random() * 9),
                    chosenField = this.gameFields[random],
                    self = this,
                    gameFieldsLength = self.getElementsAmount(self.gameFields);
                if (gameFieldsLength == 9) {
                    return;
                } else {
                    if (chosenField) {
                        while (chosenField) {
                            random = Math.floor(Math.random() * 9);
                            chosenField = this.gameFields[random];
                        }
                        self.addNewMark(random, 'O');
                        return random;
                    } else {
                        self.addNewMark(random, 'O');
                        return random;
                    }
                }
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
                    if (self.getGameMark(x, 0) == 'O' && self.getGameMark(x, 1) == 'O' && self.getGameMark(x, 2) == 'O') {
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