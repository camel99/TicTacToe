var app = app || {};

app.boardGame = (function () {
    return {
        init: function () {
            this.bindNewGame();
            //this.setDataState('button');
            this.setNewMove('.game-btn', 'clicked');
        },
        /** Starting new game, displaying players' form, clearing local storage and setting one player as a default choice */
        bindNewGame: function () {
            var startGameBtn = $('.start-new-game-btn'),
                self = this;
            startGameBtn.on('click', function () {
                self.startNewGame();

            });
        },
        startNewGame: function() {
            var self = this;
            app.formGame.hideGameBoard();
            app.storeItems.removeItemsFromLocalStorage('players');
            app.formGame.clearInputBoxes();
            app.formGame.setDefaultPlayer();
            self.clearBoardField();
        },
        setNewMove: function (what, newText) {
            var self = this;
            var allBtn = $('.not-used');
            console.log(allBtn.length);
            $(what).on('click', function () {
                if ($(this).hasClass('used')) {
                    alert("Field was used");
                } else {
                    $(this).text(newText);
                    $(this).toggleClass('not-used used');
                    //$(this).addClass('X');
                    $(this).attr('data-state', 'X');
                    self.gameOutcome();
                    self.computerMove();
                }
            })
        },
        computerMove: function () {
            var allBtn = $('.not-used'),
                random = Math.floor(Math.random() * allBtn.length),
                button = $('.game-btn.not-used'),
                chosenBtn = button.eq(random);
            if (chosenBtn.hasClass('used')) {
                while (chosenBtn.hasClass('used')) {
                    allBtn = $('.not-used');
                    random = Math.floor(Math.random() * allBtn.length);
                    chosenBtn = button.eq(random);
                }
                chosenBtn.text('computer');
                chosenBtn.removeClass('not-used');
                chosenBtn.addClass('used');
                chosenBtn.attr('data-state', 'O');
            } else {
                chosenBtn.text('computer');
                chosenBtn.removeClass('not-used');
                chosenBtn.addClass('used');
                chosenBtn.attr('data-state', 'O');
            }
        },
        clearBoardField: function () {
            var gameFields = $('.used');
            gameFields.removeClass('used');
            gameFields.removeAttr('data-state');
            gameFields.addClass('not-used');
            gameFields.text('');
        },
        $gameBtn: $('.game-btn'),
        collectResultButtons: function () {

            var resultButtons = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
            return resultButtons;
        },
        gameOutcome: function () {
            var self = this,
                resultBtns = self.collectResultButtons();
            this.$gameBtn = $('.game-btn');
            for (var x = 0; x < resultBtns.length; x++) {
                if (self.getBtnDataState(x, 0) == 'X' && self.getBtnDataState(x, 1) == 'X' && self.getBtnDataState(x, 2) == 'X') {
                    alert('Player won!');
                    self.startNewGame();
                }
                if (self.getBtnDataState(x, 0) == 'O' && self.getBtnDataState(x, 1) == 'O' && self.getBtnDataState(x, 2) == 'O') {
                    console.log(self.getBtnDataState(x, 0), self.getBtnDataState(x, 1), self.getBtnDataState(x, 2));
                    alert('Computer won!');
                    self.startNewGame();
                }
            }
        },
        getBtnDataState: function (arrayNo, elemNo) {
            var self = this,
                resultBtns = self.collectResultButtons();

            return this.$gameBtn.eq(resultBtns[arrayNo][elemNo]).attr('data-state');
        }
    }
}()
);