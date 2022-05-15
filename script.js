var app = new Vue({
    el: "#app",
    data: {
        baraja: [],
        tipoBaraja: "riderwaite",
        cartasMostradas: [],
        cartasRecuperables: [],
        verOpciones: false

    },
    mounted: function() {
        this.devolverBaraja();

    },
    computed: {
    },
    methods: {

        sacaCarta: function() {
            if (this.baraja.length > 0) {
                var num = this.aleatorio();
                console.log("Saca otra carta: " + this.baraja[num]);
                this.cartasMostradas.push("./img/"+this.tipoBaraja+"/" + this.baraja[num]);
                this.baraja.splice(num, 1);
            } else {
                alert("Menuda Tarotista de mierda!! No quedan cargas en la baraja!");
                console.log("No quedan cartas");
            }

        },
        quitarCarta: function(item) {
            //console.log(item.target.src); 
            var elem = item.target.src;
            var items = elem.split("/");
            var item=items[items.length - 1];
            console.log(item);
            //ME COJO EL ULTIMO DEL ARRAY
            this.cartasRecuperables.push(items[items.length - 1]); // la meto en recuperables
            this.baraja.push(items[items.length - 1]);         // la devuelvo a la baraja
            this.cartasMostradas.splice(this.cartasMostradas.indexOf("./img/" +this.tipoBaraja+"/"+this.cartasRecuperables[this.cartasRecuperables.length-1]), 1); //La quito de mostradas.
            
        },
        aleatorio: function() {
            return Math.floor(Math.random() * this.baraja.length);
        },
        recuperarUltimaCarta: function() {
            if (this.cartasRecuperables.length>0) {
                this.cartasMostradas.push("./img/"+this.tipoBaraja+"/" +this.cartasRecuperables[this.cartasRecuperables.length-1]);
                this.baraja.splice(this.baraja.indexOf(this.cartasRecuperables[this.cartasRecuperables.length-1]), 1);
                this.cartasRecuperables.pop();
            } else {
                alert("No hay cartas que recuperar");
            }
        
        },


        resetGame: function() {
            this.cartasMostradas = [];
            this.devolverBaraja();

        },
        devolverBaraja:function(){
            this.baraja= ['1B.jpg',	'1E.jpg',	'1O.jpg',	'1C.jpg',	'0X.jpg',
            '2B.jpg',	'2E.jpg',	'2O.jpg',	'2C.jpg',	'1X.jpg',
            '3B.jpg',	'3E.jpg',	'3O.jpg',	'3C.jpg',	'2X.jpg',
            '4B.jpg',	'4E.jpg',	'4O.jpg',	'4C.jpg',	'3X.jpg',
            '5B.jpg',	'5E.jpg',	'5O.jpg',	'5C.jpg',	'4X.jpg',
            '6B.jpg',	'6E.jpg',	'6O.jpg',	'6C.jpg',	'5X.jpg',
            '7B.jpg',	'7E.jpg',	'7O.jpg',	'7C.jpg',	'6X.jpg',
            '8B.jpg',	'8E.jpg',	'8O.jpg',	'8C.jpg',	'7X.jpg',
            '9B.jpg',	'9E.jpg',	'9O.jpg',	'9C.jpg',	'8X.jpg',
            '10B.jpg',	'10E.jpg',	'10O.jpg',	'10C.jpg',	'9X.jpg',
            '12B.jpg',	'11E.jpg',	'11O.jpg',	'11C.jpg',	'10X.jpg',
            '13B.jpg',	'12E.jpg',	'12O.jpg',	'12C.jpg',	'11X.jpg',
            '14B.jpg',	'13E.jpg',	'13O.jpg',	'13C.jpg',	'12X.jpg',
            '.jpg',	'14E.jpg',	'14O.jpg',	'14C.jpg',	'13X.jpg',
                            '14X.jpg',
                            '15X.jpg',
                            '16X.jpg',
                            '17X.jpg',
                            '18X.jpg',
                            '19X.jpg',
                            '20X.jpg',
                            '21X.jpg',
            

        ]
        }


    },
});