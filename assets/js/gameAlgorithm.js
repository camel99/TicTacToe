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
            //robisz to samo co na buttonach tylko na tej tablicy
        },
        setNewMove: function (index) {
             if (!this.gameFields[index]) {
                 this.gameFields[index] = 'X';
                 console.log(this.gameFields);
             } else {
                 alert('Field was used');
             }
        }
    }
}()
);