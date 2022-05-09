/*var keyword = document.getElementById("input_busqueda");
var contentGifs = document.getElementById("contentGifs");
var trending = document.getElementById("trending");
var boton = document.getElementById("boton");
var mp = document.getElementsByTagName("li");
boton.addEventListener("click", buscar, false);
*/

var app = new Vue({
    el: "#app",
    data: {
        baraja: ['0B.png', '0E.png', '0O.png', '0C.png', '0X.png',
            '1B.png', '1E.png', '1O.png', '1C.png', '1X.png',
            '2B.png', '2E.png', '2O.png', '2C.png', '2X.png',
            '3B.png', '3E.png', '3O.png', '3C.png', '3X.png',
            '4B.png', '4E.png', '4O.png', '4C.png', '4X.png',
            '5B.png', '5E.png', '5O.png', '5C.png', '5X.png',
            '6B.png', '6E.png', '6O.png', '6C.png', '6X.png',
            '7B.png', '7E.png', '7O.png', '7C.png', '7X.png',
            '8B.png', '8E.png', '8O.png', '8C.png', '8X.png',
            '9B.png', '9E.png', '9O.png', '9C.png', '9X.png',
            '10B.png', '10E.png', '10O.png', '10C.png', '10X.png',
            '11B.png', '11E.png', '11O.png', '11C.png', '11X.png',
            '12X.png',
            '13X.png',
            '14X.png',
            '15X.png',
            '16X.png',
            '17X.png',
            '18X.png',
            '19X.png',
            '20X.png',
            '21X.png',

        ],
        cartas: [],
        verOpciones: false,
        equipoA: "Equipo 1",
        marcadorA: 0,
        tiempo: 0,
    },
    mounted: function() {

    },
    computed: {},
    methods: {

        sacaCarta: function() {
            if (this.baraja.length > 0) {
                console.log("Saca otra carta");
                var num = this.aleatorio();
                this.cartas.push("./img/" + this.baraja[num]);
                this.baraja.splice(num, 1);
            } else {
                alert("Menuda Tarotista de mierda!! No quedan cargas en la baraja!");
                console.log("No quedan cartas");
            }

        },
        aleatorio: function() {
            return Math.floor(Math.random() * this.baraja.length);
        },


        resetGame: function() {
            this.cartas = [];

        },


    },
});