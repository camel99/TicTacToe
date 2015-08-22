var app = app || {};

app.boardGame = (function () {
        return {
            init: function () {
                this.startNewGame();
                this.setDataState('button');
                this.setNewLabel('button','clicked');
            },
            /** Starting new game, displaying players' form, clearing local storage and seting one player as a default choice */
            startNewGame: function () {
                var startGame = $(".start-new-game-btn");
                startGame.on('click', function () {
                    app.formGame.hideGameBoard();
                    app.storeItems.removeItemsFromLocalStorage('players');
                    app.formGame.clearInputBoxes();
                    app.formGame.setDefaultPlayer();
                });
            },
            setDataState: function (what) {
                $(what).click(function () {
                    $(this).attr('data-state', 'clicked');
                })
            },
            setNewLabel: function (what,newText) {
                $(what).click(function () {
                    $(this).text(newText);
                })
            },
            whoseTurn: function () {

            }
        }
    }()
);