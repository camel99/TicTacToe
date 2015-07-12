var storeItems = {
    /** Adding players' names to local storage */
    saveInLocalStorage: function () {
        var names = document.querySelectorAll('.player_name');
        var items = [];
        for (var i = 0; i < names.length; i++) {
            var note = names[i].value;
            items.unshift(note);
        }
        localStorage.setItem('players', JSON.stringify(items));
    }
}