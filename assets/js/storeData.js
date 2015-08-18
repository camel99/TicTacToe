var storeItems = {
    /** Adding players' names to local storage */
    saveInLocalStorage: function () {
        var data = {
            firstPlayer: $(".first-player"),
            firstPlayerName: $(".player-one-name"),
            names: $(".player-name"),
            allPlayers: []
        };
        if (data.firstPlayer.is(':checked')) {
            data.allPlayers.unshift(data.firstPlayerName.val());
        } else {
            for (var i = 0, playersAmount = data.names.length; i < playersAmount; i++) {
                var playerName = data.names[i].value;// czemu tu jest value zamiast val()
                data.allPlayers.unshift(playerName);
            }
        }
        localStorage.setItem('players', JSON.stringify(data.allPlayers));
    },
    /** Removing all items from local storage */
    removeItemsFromLocalStorage: function (storageKeyName) {
        var localStorageName = storageKeyName;
        if (localStorageName) {
            localStorage.removeItem(localStorageName);
        }
    },
}