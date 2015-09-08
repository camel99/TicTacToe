var app = app || {};

app.algorithm = (function () {
    return {
        gameFields: [],
        results: [],
        isClicked: function (index) {
            return !!this.gameFields[index];
        },
        push: function (index, mark) {
            this.gameFields[index] = mark;
        },
        gameOutcome: function () {
            //robisz to samo co na buyttonach tylko na tej tablicy
        },
        setNewMove: function () {
             var index = this.index(this);
             if (!this.gameFields[index]) {
                 this.gameFields[index] = 'X';
                 console.log(this.gameFields[index]);
             } else {
                 alert('doopa');
             }
        }
    }
}()
);