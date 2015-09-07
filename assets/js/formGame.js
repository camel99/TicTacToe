var app = app || {};

app.formGame = (function () {
        return {
            init: function () {
                this.startTime();
                this.runGame();
                this.enableSecondPlayerName();
                this.hideSecondPlayer();
                this.disableFormSubmit();
            },
            parameters: {
                $gameBoard: $('.game-board'),
                $gameForm: $('.game-form')
            },
            /** Disable form sending */
            disableFormSubmit: function () {
                $("form").submit(function (e) {
                    e.preventDefault();
                });
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
            /** Saving players' names in local storage */
            savePlayersName: function () {
                app.storeItems.saveInLocalStorage();
            },
            /** Running new game, saving players in local storage and displaying game board*/
            runGame: function () {
                var run = $(".run-game-btn"),
                    self = this;
                run.on('click', function () {
                    //app.storeItems.removeItemsFromLocalStorage('players');
                    if (self.validatePlayersNames() === true) {
                        return;
                    } else {
                        self.savePlayersName();
                        self.showGameBoard();
                        app.storeItems.retrieveFromLocalStorage();
                    }

                });
            },
            /** Displaying second player and setting checked attribute for second player radio button */
            enableSecondPlayerName: function () {
                var secondPlayer = $('.second-player-radio-btn'),
                    self = this;
                secondPlayer.on('click', function () {
                    $('.second-player-input').attr("style", "display: block");
                    self.setCheckedAttribute(this);
                    self.removeCheckedAttribute('.first-player-radio-btn');
                });
            },
            /** Hiding second playext box */
            hideSecondPlayer: function () {
                var firstPlayer = $('.first-player-radio-btn'),
                    self = this;
                firstPlayer.on('click', function () {
                    $('.second-player-input').attr("style", "display: none");
                    self.setCheckedAttribute(this);
                    self.removeCheckedAttribute('.second-player-radio-btn');
                })
            },
            /** Showing game board and hiding form view */
            showGameBoard: function () {
                if (this.parameters.$gameBoard.is(':hidden')) {
                    this.parameters.$gameBoard.attr("style", "display: block");
                    this.parameters.$gameForm.attr("style", "display: none");
                }
            },
            /** Hiding game board and showing game view */
            hideGameBoard: function () {
                if (this.parameters.$gameForm.is(':hidden')) {
                    this.parameters.$gameForm.attr("style", "display: block");
                    this.parameters.$gameBoard.attr("style", "display: none");
                }
            },
            /** Clearing input boxes*/
            clearInputBoxes: function () {
                $('.player').val("");
            },
            /** Setting one player as a default choice */
            setDefaultPlayer: function () {
                $('.first-player-radio-btn').click();
            },
            /** Setting checked attribute to chosen element */
            setCheckedAttribute: function (element) {
                $(element).attr('checked', true);
            },
            /** Removing checked attribute from chosen element */
            removeCheckedAttribute: function (element) {
                $(element).attr('checked', false);
            },
            validatePlayersNames: function () {
                var self = this,
                    firstPlayerName = $('.player-one-name'),
                    secondPlayerName = $('.player-two-name'),
                    secondPlayerRadioBtn = $('.second-player-radio-btn');
                if (secondPlayerRadioBtn.is(':checked')) {
                    if (self.playerNameLength(firstPlayerName) == 0 || self.playerNameLength(secondPlayerName) == 0) {
                        alert('Please set player\'s name');
                        return true;
                    }
                } else {
                    if (firstPlayerName.val().trim().length == 0) {
                        alert('First player name shouldn\'t be empty');
                        return true;
                    }
                }
            },
            validateFirstPlayer: function () {
                $('.firstPlayerName').after(document.createTextNode("Hello"));
            },
            playerNameLength: function (player) {
                return player.val().trim().length
            }
        }
    }()
)
;