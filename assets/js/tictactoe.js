var app = app || {};

app.navigation = (function () {
    return {
        init: function () {
            this.startTime();
            this.runGame();
            this.startNewGame();
            this.enableSecondPlayerName();
            this.hideSecondPlayer();
            this.disableFormSubmit();

            //this.parameters.$gameView = $('.game-view');
            //this.parameters.$gameView = $('.game-form');
        },
        parameters: {
            $gameView: $('.game-view'),
            $gameForm: $('.game-form')
        },

        /** Displaying current time */
        startTime: function () {
            var today = new Date(),
                hour = today.getHours(),
                minute = today.getMinutes(),
                second = today.getSeconds();
            hour = (hour < 10 ? "0" : "") + hour;
            minute = (minute < 10 ? "0" : "") + minute;
            second = (second < 10 ? "0" : "") + second;
            var currentTime = hour + ":" + minute + ":" + second;
            $("#currentTime").text(currentTime);
        },
        savePlayersName: function () {
            storeItems.saveInLocalStorage();
        },
        runGame: function () {
            var run = $(".run-game-btn"),
                self = this;
            run.on('click', function () {
                storeItems.removeItemsFromLocalStorage('players');
                self.savePlayersName();
                self.toggleGameBoard();
            });
        },
        startNewGame: function () {
            var startGame = $(".start-new-game-btn"),
                self = this;
            startGame.on('click', function () {
                self.hideGameForm();
            });
        },
        enableSecondPlayerName: function () {
            var secondPlayer = $('.second-player');
            secondPlayer.on('click', this.displaySecondPlayer);
        },
        displaySecondPlayer: function () {
            $('.second-player-input').attr("style", "display: block");
        },
        hideSecondPlayer: function () {
            var firstPlayer = $('.first-player');
            firstPlayer.on('click', function () {
                $('.second-player-input').attr("style", "display: none");
            })
        },
        disableFormSubmit: function () {
            $("form").submit(function (e) {
                e.preventDefault();
            });
        },
        toggleGameBoard: function () {
            if (this.parameters.$gameView.is(':hidden')) {
                this.parameters.$gameView.attr("style", "display: block");
                this.parameters.$gameForm.attr("style", "display: none");
            }
        },
        hideGameForm: function () {
            if (this.parameters.$gameForm.is(':hidden')) {
                this.parameters.$gameForm.attr("style", "display: block");
                this.parameters.$gameView.attr("style", "display: none");
            }
        }
    }
    }()
    )
    ;