var app = app || {};

app.gameControl = (function () {
        return {
            gameFields: [],
            results: [],
            properties: {
                playerMark: 'X',
                computerMark: '0',
                fieldAmount: 9,
                bestIndex: 4
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
                    this.saveLastPlayerMove(index);
                    this.predictNextMove();
                    this.blockNextMove();
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
            collectResultButtons: function () { // chenge to winningCollection or so

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
            },
            nextMoveCollection: {
                zero: [1, 2, 3, 6, 4, 8],
                one: [0, 2, 4, 7],
                two: [0, 1, 4, 5, 6, 8],
                three: [0, 4, 5, 6],
                four: [0, 1, 2, 3, 5, 6, 7, 8],
                five: [2, 3, 4, 8],
                six: [0, 2, 3, 4, 6, 7, 8],
                seven: [1, 4, 6, 8],
                eight: [0, 2, 4, 5, 6, 7]
            },
            lastPlayerMove: [],
            clearPlayerMove: function () {
                this.lastPlayerMove = [];
            },
            saveLastPlayerMove: function (index) {
                var lastMove = this.lastPlayerMove.push(index);
                console.log("last moveeqal " + this.lastPlayerMove);
                return this.lastPlayerMove;
            },
            nextComputerMove: function () {
                var random = this.getComputerNextMove[0],
                    chosenField = this.gameFields[random],
                    self = this,
                    gameFieldsLength = self.getElementsAmount(self.gameFields),
                    lastPlayerMove = this.lastPlayerMove,
                    bestIndex = this.properties.bestIndex,
                    bestChoice = this.gameFields[bestIndex];// sprawdz czy ten index jest wolny jesli tak to go zajmij

                if (gameFieldsLength === 9) {
                    return;
                } else {
                    if (!bestChoice) {
                        this.addNewMark(4, this.properties.computerMark); // jesli wolne pole o index=4 to je zajmij
                        this.clearLastComputerMove();
                        return bestIndex;
                    }
                    else if (chosenField) {
                        this.clearLastComputerMove();
                        while (chosenField) {
                            random = this.predictNextMove();
                            chosenField = this.gameFields[random];
                        }
                        this.addNewMark(random, this.properties.computerMark);
                        console.log("element jest zajety");

                    } else {
                        this.clearLastComputerMove();
                        this.addNewMark(random, this.properties.computerMark);

                        return random;
                    }
                }
            },
            predictNextMove: function () {
                var lastPlayerMove = this.lastPlayerMove[0],
                    nextMoveCollection = '',
                    computerMove = '';
                console.log("ostatni ruch zawodnika" + lastPlayerMove);
                switch (lastPlayerMove) {
                    case 0:
                        nextMoveCollection = this.nextMoveCollection.zero;
                        console.log("kolekcja " + nextMoveCollection);
                        computerMove = nextMoveCollection[Math.floor(Math.random() * nextMoveCollection.length)];
                        console.log("wylosowana cyfra to" + computerMove);
                        this.getComputerNextMove.push(computerMove);
                        console.log("zachowany ruch komputera" + this.getComputerNextMove[0]);
                        return computerMove;
                        break;
                    case 1:
                        nextMoveCollection = this.nextMoveCollection.one;
                        console.log("kolekcja " + nextMoveCollection);
                        computerMove = nextMoveCollection[Math.floor(Math.random() * nextMoveCollection.length)];
                        console.log("wylosowana cyfra to" + computerMove);
                        this.getComputerNextMove.push(computerMove);
                        console.log("zachowany ruch komputera" + this.getComputerNextMove[0]);
                        return computerMove;
                        break;
                    case 2:
                        nextMoveCollection = this.nextMoveCollection.two;
                        console.log("kolekcja " + nextMoveCollection);
                        computerMove = nextMoveCollection[Math.floor(Math.random() * nextMoveCollection.length)];
                        console.log("wylosowana cyfra to" + computerMove);
                        this.getComputerNextMove.push(computerMove);
                        console.log("zachowany ruch komputera" + this.getComputerNextMove[0]);
                        return computerMove;
                        break;
                    case 3:
                        nextMoveCollection = this.nextMoveCollection.three;
                        console.log("kolekcja " + nextMoveCollection);
                        computerMove = nextMoveCollection[Math.floor(Math.random() * nextMoveCollection.length)];
                        console.log("wylosowana cyfra to" + computerMove);
                        this.getComputerNextMove.push(computerMove);
                        console.log("zachowany ruch komputera" + this.getComputerNextMove[0]);
                        return computerMove;
                        break;
                    case 4:
                        nextMoveCollection = this.nextMoveCollection.four;
                        console.log("kolekcja " + nextMoveCollection);
                        computerMove = nextMoveCollection[Math.floor(Math.random() * nextMoveCollection.length)];
                        console.log("wylosowana cyfra to" + computerMove);
                        this.getComputerNextMove.push(computerMove);
                        console.log("zachowany ruch komputera" + this.getComputerNextMove[0]);
                        return computerMove;
                        break;
                    case 5:
                        nextMoveCollection = this.nextMoveCollection.five;
                        console.log("kolekcja " + nextMoveCollection);
                        computerMove = nextMoveCollection[Math.floor(Math.random() * nextMoveCollection.length)];
                        console.log("wylosowana cyfra to" + computerMove);
                        this.getComputerNextMove.push(computerMove);
                        console.log("zachowany ruch komputera" + this.getComputerNextMove[0]);
                        return computerMove;
                        break;
                    case 6:
                        nextMoveCollection = this.nextMoveCollection.six;
                        console.log("kolekcja " + nextMoveCollection);
                        computerMove = nextMoveCollection[Math.floor(Math.random() * nextMoveCollection.length)];
                        console.log("wylosowana cyfra to" + computerMove);
                        this.getComputerNextMove.push(computerMove);
                        console.log("zachowany ruch komputera" + this.getComputerNextMove[0]);
                        return computerMove;
                        break;
                    case 7:
                        nextMoveCollection = this.nextMoveCollection.seven;
                        console.log("kolekcja " + nextMoveCollection);
                        computerMove = nextMoveCollection[Math.floor(Math.random() * nextMoveCollection.length)];
                        console.log("wylosowana cyfra to" + computerMove);
                        this.getComputerNextMove.push(computerMove);
                        console.log("zachowany ruch komputera" + this.getComputerNextMove[0]);
                        return computerMove;
                        break;
                    case 8:
                        nextMoveCollection = this.nextMoveCollection.eight;
                        console.log("kolekcja " + nextMoveCollection);
                        computerMove = nextMoveCollection[Math.floor(Math.random() * nextMoveCollection.length)];
                        console.log("wylosowana cyfra to" + computerMove);
                        this.getComputerNextMove.push(computerMove);
                        console.log("zachowany ruch komputera" + this.getComputerNextMove[0]);
                        return computerMove;
                        break;
                }
            },
            getComputerNextMove: [],
            clearLastComputerMove: function () {
                this.getComputerNextMove = [];
            },
            blockNextMove: function () {// sprawdzasz czy 3 elementowe tablice maja 2 X, jesli tak to stawiasz O w wolnym miejscu
                var resultBtns = this.collectResultButtons();
                var output = [];
                //trza wziac mechanizm z gameOutcome();
                for (var x = 0; x < resultBtns.length; x++) {
                    var firstElement = this.getGameMark(x, 0),
                        secondElement = this.getGameMark(x, 1),
                        thirdElement = this.getGameMark(x, 0);
                    output[x] = [firstElement, secondElement, thirdElement];
                    console.log(x+": " +output[x]);
                }
            }
        }
    }()
);