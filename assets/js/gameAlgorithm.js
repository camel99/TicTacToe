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
        clearGameFields: function(){ // odpalaj na start new game
            this.gameFields = [];
        },
        gameOutcome: function () {
            //robisz to samo co na buttonach tylko na tej tablicy
        },
        playerMove: function (index) {
            if (!this.gameFields[index]) {
                this.gameFields[index] = 'X';
                console.log('player index ' + index);
            }
        },
        computerMove: function (elements) {
            var random  = Math.floor(Math.random() * elements.length);
            var chosenField = this.gameFields[random];
            //console.log(random,this.gameFields, chosenField);
            console.log('random ' + random);
            if(chosenField){
                console.log('zajety');
                console.log(chosenField);
                while(chosenField){
                    random  = Math.floor(Math.random() * elements.length);
                    chosenField = this.gameFields[random];
                    console.log('new random to ' + random);
                }
                this.gameFields[random] = 'O';
                console.log(random,this.gameFields, chosenField);

                return random;
            } else {
                this.gameFields[random] = 'O';
                console.log('zwrocilem ' + random);
                return random;
            }
        },
        dawajTablice: function () {
            console.dir(this.gameFields);
        }
    }
}()
);