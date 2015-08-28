var app = app || {};

app.boardGame = (function () {
    return {
        init: function () {
            this.startNewGame();
            //this.setDataState('button');
            this.setNewLabel('.game-btn', 'clicked');
        },

        /** Starting new game, displaying players' form, clearing local storage and setting one player as a default choice */
        startNewGame: function () {
            var startGame = $(".start-new-game-btn"),
                self = this;
            startGame.on('click', function () {
                app.formGame.hideGameBoard();
                app.storeItems.removeItemsFromLocalStorage('players');
                app.formGame.clearInputBoxes();
                app.formGame.setDefaultPlayer();
                self.clearBoardField();
            });
        },
        setNewLabel: function (what, newText) {
            var self = this;
            var allBtn = $('.not-used');
            console.log(allBtn.length);
            $(what).one('click', function () {
                if ($(this).hasClass('used')) {
                    alert("Field was used");
                } else {
                    console.log(allBtn.length);
                    $(this).text(newText);
                    $(this).toggleClass('not-used used');
                    //self.computerMove();
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
            } else {
                chosenBtn.text('computer');
                chosenBtn.toggleClass('not-used used');
            }
        },
        clearBoardField: function(){
            var gameFields = $('.used');
            gameFields.toggleClass('.used not-used');
            gameFields.text('');
        }

    }
}()
);