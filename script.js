var app = new Vue({
    el: "#app",
    data: {
        baraja: ['0B.jpg',	'0E.jpg',	'0O.jpg',	'0C.jpg',	'0X.jpg',
        '1B.jpg',	'1E.jpg',	'1O.jpg',	'1C.jpg',	'1X.jpg',
        '2B.jpg',	'2E.jpg',	'2O.jpg',	'2C.jpg',	'2X.jpg',
        '3B.jpg',	'3E.jpg',	'3O.jpg',	'3C.jpg',	'3X.jpg',
        '4B.jpg',	'4E.jpg',	'4O.jpg',	'4C.jpg',	'4X.jpg',
        '5B.jpg',	'5E.jpg',	'5O.jpg',	'5C.jpg',	'5X.jpg',
        '6B.jpg',	'6E.jpg',	'6O.jpg',	'6C.jpg',	'6X.jpg',
        '7B.jpg',	'7E.jpg',	'7O.jpg',	'7C.jpg',	'7X.jpg',
        '8B.jpg',	'8E.jpg',	'8O.jpg',	'8C.jpg',	'8X.jpg',
        '9B.jpg',	'9E.jpg',	'9O.jpg',	'9C.jpg',	'9X.jpg',
        '10B.jpg',	'10E.jpg',	'10O.jpg',	'10C.jpg',	'10X.jpg',
        '11B.jpg',	'11E.jpg',	'11O.jpg',	'11C.jpg',	'11X.jpg',
                        '12X.jpg',
                        '13X.jpg',
                        '14X.jpg',
                        '15X.jpg',
                        '16X.jpg',
                        '17X.jpg',
                        '18X.jpg',
                        '19X.jpg',
                        '20X.jpg',
                        '21X.jpg',
        
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