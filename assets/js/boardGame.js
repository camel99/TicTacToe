var app = app || {};

app.boardGame = (function () {
    return {
        init: function () {
            this.startNewGame();
            //this.setDataState('button');
            this.setNewMove('.game-btn', 'clicked');
        },
        results: {
            rows: [
                [1, 2, 3], [4, 5, 6], [7, 8, 9]
            ],
            columns: [
                [1, 4, 7], [2, 5, 8], [3, 6, 9]
            ],
            biases: [
                [1, 5, 9], [3, 5, 7]
            ]
        },

        /** Starting new game, displaying players' form, clearing local storage and setting one player as a default choice */
        startNewGame: function () {
            var startGame = $('.start-new-game-btn'),
                self = this;
            startGame.on('click', function () {
                app.formGame.hideGameBoard();
                app.storeItems.removeItemsFromLocalStorage('players');
                app.formGame.clearInputBoxes();
                app.formGame.setDefaultPlayer();
                self.clearBoardField();
                console.log(self.results.columns[0][1]);
                console.log($('.game-btn')[0]);
            });
        },
        setNewMove: function (what, newText) {
            var self = this;
            var allBtn = $('.not-used');
            console.log(allBtn.length);
            $(what).one('click', function () {
                if ($(this).hasClass('used')) {
                    alert("Field was used");
                } else {
                    $(this).text(newText);
                    $(this).toggleClass('not-used used');
                    $(this).addClass('X');
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
                chosenBtn.addClass('used O');
            } else {
                chosenBtn.text('computer');
                chosenBtn.removeClass('not-used');
                chosenBtn.addClass('used O');
            }
        },
        clearBoardField: function () {
            var gameFields = $('.used');
            gameFields.removeClass('used O X');
            gameFields.addClass('not-used');
            gameFields.text('');
        }
    }
}()
);