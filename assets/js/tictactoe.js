var app = app || {};

app.navigation = (function () {
    return {
        init: function () {
            this.startTime();
            this.runGame();
            this.enableSecondPlayerName();
            this.hideSecondPlayer();
            this.disableFormSubmit();
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
                self =this;
            run.on('click', function(){
                storeItems.removeItemsFromLocalStorage('players');
                self.savePlayersName();
            });
        },
        enableSecondPlayerName: function () {
            var secondPlayer = $('.second-player');
            secondPlayer.on('click', this.displaySecondPlayer);
        },
        displaySecondPlayer: function () {
            $('.second-player-input').attr("style", "visibility: visible");
        },
        hideSecondPlayer: function () {
            var firstPlayer = $('.first-player');
            firstPlayer.on('click', function () {
                $('.second-player-input').attr("style", "visibility: hidden");
            })
        },
        disableFormSubmit: function(){
            $("form").submit(function(e){
                e.preventDefault();
            });
        }
    }
}());