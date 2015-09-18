var app = app || {};

app.boardGame = (function () {
    return {
        init: function () {
            this.bindNewGame();
            this.setNewMove('.game-btn')
        },
        /** Starting new game, displaying players' form, clearing local storage and setting one player as a default choice */
        bindNewGame: function () {
            var startGameBtn = $('.start-new-game-btn'),
                self = this;
            startGameBtn.on('click', function () {
                self.startNewGame();
            });
        },
        startNewGame: function () {
            var self = this;
            self.clearBoardField();
            app.storeItems.removeItemsFromLocalStorage('players');
            app.formGame.clearInputBoxes();
            app.formGame.setDefaultPlayer();
            app.formGame.hideGameBoard();
            app.gameControl.clearGameFields();
        },
        setNewMove: function (what) {
            var self = this;
            $(what).on('click', function () {
                var index = $(what).index(this);
                if (!app.gameControl.gameFields[index]) {
                    app.gameControl.playerMove(index);
                    self.setFieldProperties(this, 'X');// jak to poprawic
                    if (app.gameControl.gameOutcome() === true) {
                        return true;
                    } else {
                        if(app.formGame.playersAmount() != 2) {
                            self.runComputerMove();
                        }
                    }
                } else {
                    alert('Field was used');
                }
            })
        },
        runComputerMove: function () {
            var self = this,
                //btnNumber = app.gameControl.computerMove(),// to jest na easy bez logiki
                btnNumber = app.gameControl.computerMove(),
                button = $('.game-btn'),
                chosenBtn = button.eq(btnNumber);
            console.log("zajety button  to " + btnNumber);
            self.setFieldProperties(chosenBtn, 'O');
            app.gameControl.gameOutcome();
        },
        setFieldProperties: function (what, newText) {
            $(what).text(newText);
            $(what).toggleClass('not-used used');
            $(what).attr('data-state', newText);
        },
        clearBoardField: function () {
            var gameFields = $('.game-btn'),
                gameFieldsAmount = gameFields.length;
            for (var i = 0; i < gameFieldsAmount; i++) {
                gameFields.removeClass('used');
                gameFields.addClass('not-used');
                gameFields.removeAttr('data-state');
                gameFields.text('XO');
            }
        }
    }
}()
);