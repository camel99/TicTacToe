window.onload = function () {

    app.formGame.startTime();// first run to be sure that there is no delay in current time
    setInterval(function () {
        app.formGame.startTime();
    }, 1000);
};
app.formGame.init();
app.boardGame.init();
app.storeItems.init();

