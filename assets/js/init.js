window.onload = function () {

    app.navigation.startTime();// first run to be sure that there is no delay in current time
    setInterval(function () {
        app.navigation.startTime();
    }, 1000);


};
app.navigation.init();
