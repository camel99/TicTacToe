var menu ={
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
        document.getElementById("currentTime").innerHTML = currentTime;
    },
    runGame: function(){
        var run = document.querySelector('.run_game_btn');
            run.onclick = function() {
                storeItems.saveInLocalStorage();
            }
    },
    playersAmount: function(){

    }
}