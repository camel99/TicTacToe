var app = app || {};

app.navigation = (function () {
    return {
        init: function() {
            this.startTime();
            this.runGame();
            this.setSecondPlayerName();
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
        savePlayersName: function() {
            storeItems.saveInLocalStorage();
        },
        runGame: function () {
            var run = $(".run-game-btn");
            run.on('click',this.savePlayersName);
        },

        setSecondPlayerName: function () {
            //if($('.two-players').is(":checked")){
            //    alert("doopa");
            //} else(alert("nie ma doopy"));
            var playersAmount = $('.two-players');
            if(playersAmount)
            playersAmount.on('click',this.displaySecondPlayer());
        },
        displaySecondPlayer: function () {
           $('.second-player').attr("style" , "visibility: visible");

        }
    }
}());