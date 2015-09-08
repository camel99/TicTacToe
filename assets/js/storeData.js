var app = app || {};

app.storeItems = (function () {
        return {
            init: function () {
                this.retrieveFromLocalStorage();

            },
            /** Adding players' names to local storage */
            saveInLocalStorage: function () {
                var data = {
                    firstPlayer: $(".first-player"),
                    firstPlayerName: $(".player-one-name"),
                    names: $(".player"),
                    allPlayers: []
                };
                if (data.firstPlayer.is(':checked')) {
                    data.allPlayers.push(data.firstPlayerName.val());
                } else {
                    for (var i = 0, playersAmount = data.names.length; i < playersAmount; i++) {
                        var playerName = data.names[i].value;// czemu tu jest value zamiast val()
                        data.allPlayers.push(playerName);
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
            /** Retrieving items from local storage */

            getLocalStorageItems: function (name) {
                if (localStorage.getItem(name)) {
                    var players = JSON.parse(localStorage.getItem(name));
                    return {
                        players: players
                    }
                }
            },
            /** Retrieve task from local storage */
            retrieveFromLocalStorage: function () {
                if (localStorage.getItem('players')) {
                    var self = this,
                        localStorageItems = self.getLocalStorageItems('players');
                    var itemsAmount = localStorageItems.players.length;
                    for (var i = 0; i < itemsAmount; i++) {
                    }
                }
            }
        }
    }()
);
