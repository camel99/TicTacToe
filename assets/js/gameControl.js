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
                    return value !== undefined
                }).length;
            },
            winningPositions: function () {
                return [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

            },
            getGameMark: function (arrayNo, elemNo) {
                var result = this.winningPositions(),
                    gameFieldIndex = result[arrayNo][elemNo],
                    gameFieldMark = this.gameFields[gameFieldIndex];
                return gameFieldMark;

            },
            gameOutcome: function () {
                var winningPositions = this.winningPositions();
                for (var x = 0; x < winningPositions.length; x++) {
                    if (this.getGameMark(x, 0) === "X" && this.getGameMark(x, 1) === "X" && this.getGameMark(x, 2) === "X") {
                        this.playerWon();
                        return true;
                    }
                    else if (this.getGameMark(x, 0) === "0" && this.getGameMark(x, 1) === "0" && this.getGameMark(x, 2) === "0") {
                        alert('Computer won!');
                        return true;
                    }
                }
            },
            playerWon: function () {
                alert("player won");
            },
            getNextMove: function () {// sprawdzasz czy 3 elementowe tablice maja 2 X, jesli tak to stawiasz O w wolnym miejscu
                var winningPositions = this.winningPositions(),
                    marksCollection = [],// powinienem czyscic ta tablice?
                    result = {};
                for (var x = 0; x < winningPositions.length; x++) {
                    var firstElement = this.getGameMark(x, 0),
                        secondElement = this.getGameMark(x, 1),
                        thirdElement = this.getGameMark(x, 2);
                    marksCollection[x] = [firstElement, secondElement, thirdElement];
                    var marksCollectionItemsAmount = this.getElementsAmount(marksCollection[x]);
                    if (marksCollectionItemsAmount === 2) {
                        if (marksCollection[x][0] === marksCollection[x][1]) {
                            result = {arrayNo: x, index: 2};
                            return result;
                        }
                        if (marksCollection[x][0] === marksCollection[x][2]) {
                            result = {arrayNo: x, index: 1};
                            return result
                        }
                        if (marksCollection[x][1] === marksCollection[x][2]) {
                            result = {arrayNo: x, index: 0};
                            return result;
                        }
                    }
                }
                result = {arrayNo: 1, index: 1};
                return result;
            },

            computerMove: function () {
                var random = this.getRandomNumber(),
                    nextMove = this.getNextMove(),
                    winningPositions = this.winningPositions(),
                    computerMove = winningPositions[nextMove.arrayNo][nextMove.index],
                    newGameIndex = this.gameFields[computerMove],
                    gameFieldsLength = this.getElementsAmount(this.gameFields),
                    bestIndex = 4,
                    bestChoice = this.gameFields[bestIndex];// sprawdz czy ten index jest wolny jesli tak to go zajmij
                if (gameFieldsLength === 9) {

                    return true;
                } else {
                    if (!bestChoice) {
                        this.addNewMark(4, this.properties.computerMark); // jesli wolne pole o index=4 to je zajmij
                        return bestIndex;
                    }
                    if (newGameIndex) {
                        while (newGameIndex) {
                            random = this.getRandomNumber();
                            newGameIndex = this.gameFields[random];
                        }
                        this.addNewMark(random, this.properties.computerMark);
                        return random;
                    } else {
                        this.addNewMark(computerMove, this.properties.computerMark);
                        return computerMove;
                    }
                }
            },
            getRandomNumber: function () {
                var random = Math.floor(Math.random() * this.properties.fieldAmount);
                return random;
            }
        }
    }()
);