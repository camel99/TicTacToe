var app = app || {};

app.boardGame = (function () {
        return {
            init: function () {
                this.startNewGame();
                //this.setDataState('button');
                this.setNewLabel('button', 'clicked');
            },
            /** Starting new game, displaying players' form, clearing local storage and setting one player as a default choice */
            startNewGame: function () {
                var startGame = $(".start-new-game-btn");
                startGame.on('click', function () {
                    app.formGame.hideGameBoard();
                    app.storeItems.removeItemsFromLocalStorage('players');
                    app.formGame.clearInputBoxes();
                    app.formGame.setDefaultPlayer();
                });
            },
            setNewLabel: function (what, newText) {
                var self = this;
                $(what).one('click', function () {
                    $(this).text(newText);
                    $(this).off('click');
                    $(this).toggleClass('not-used used');
                    $(this).trigger(self.computerMove());// moze lepiej jakis callback
                })
            },
            computerMove: function () {
                var allBtn = $('.not-used');
                var random = Math.floor(Math.random() * allBtn.length);
                //var randomChoice = Math.floor(Math.random() * 9) + 1;
                var button = $('button');
                var chosenBtn = button.eq(random);
                if (!chosenBtn.hasClass('used')) {
                    chosenBtn.text('computer');

                } else {
                    var newChoice = Math.floor(Math.random() * allBtn.length);
                        $("button:eq(newChoice)").text('new choice');
                    $("button:eq(newChoice)").toggleClass('not-used used');
                }
            }
        }
    }()
);