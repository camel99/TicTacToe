var app = app || {};

app.boardGame = (function () {
    return {
        init: function () {
            this.startNewGame();
            //this.setDataState('button');
            this.setNewMove('.game-btn', 'clicked');
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
            });
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
                    console.log($('.game-btn').eq(0).attr('data-state'));
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
                chosenBtn.attr('data-state','O');
            } else {
                chosenBtn.text('computer');
                chosenBtn.removeClass('not-used');
                chosenBtn.addClass('used');
                chosenBtn.attr('data-state','O');
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

            /*
            var resultButtons = {
                    rows: [
                        [0, 1, 2], [3, 4, 5], [6, 7, 8]
                        //[this.$gameBtn.eq(0).attr('data-state'), this.$gameBtn.eq(1).attr('data-state'), this.$gameBtn.eq(2).attr('data-state')],
                        //[this.$gameBtn.eq(3).attr('data-state'), this.$gameBtn.eq(4).attr('data-state'), this.$gameBtn.eq(5).attr('data-state')],
                        //[this.$gameBtn.eq(6).attr('data-state'), this.$gameBtn.eq(7).attr('data-state'), this.$gameBtn.eq(8).attr('data-state')]
                    ],
                    columns: [
                        [0, 3, 6], [1, 4, 7], [2, 5, 8]
                        //[this.$gameBtn.eq(0).attr('data-state'), this.$gameBtn.eq(3).attr('data-state'), this.$gameBtn.eq(6).attr('data-state')],
                        //[this.$gameBtn.eq(1).attr('data-state'), this.$gameBtn.eq(4).attr('data-state'), this.$gameBtn.eq(7).attr('data-state')],
                        //[this.$gameBtn.eq(2).attr('data-state'), this.$gameBtn.eq(5).attr('data-state'), this.$gameBtn.eq(8).attr('data-state')]
                    ],
                    biases: [
                        [0, 4, 8], [2, 4, 6]
                        //[this.$gameBtn.eq(0).attr('data-state'), this.$gameBtn.eq(4).attr('data-state'), this.$gameBtn.eq(8).attr('data-state')],
                        //[this.$gameBtn.eq(2).attr('data-state'), this.$gameBtn.eq(4).attr('data-state'), this.$gameBtn.eq(6).attr('data-state')]
                    ]
            };
            */
            return resultButtons;
        },
        gameOutcome: function () {
            var self = this,
                resultBtns = self.collectResultButtons();
            this.$gameBtn = $('.game-btn');
            for( var x = 0; x < resultBtns.length; x++){
                console.log(this.$gameBtn, resultBtns[x][0], this.$gameBtn.eq(resultBtns[x][0]), this.$gameBtn.eq(resultBtns[x][0]).attr('data-state'));
                if (this.$gameBtn.eq(resultBtns[x][0]).attr('data-state') == 'X' && this.$gameBtn.eq(resultBtns[x][1]).attr('data-state') == 'X'
                    && this.$gameBtn.eq(resultBtns[x][2]).attr('data-state') == 'X'){
                    alert('robert');

                }


                //for(var j = 0; j < resultBtns[x].length; j++) {
                //    console.log(j);
                //    console.log(x + "-----" + resultBtns[x][j]);
                //}
            }
            //console.log(self.collectResultButtons());
        }
    }
}()
);