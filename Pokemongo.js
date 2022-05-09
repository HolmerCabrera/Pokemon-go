var escojavalor1 = document.getElementById("txt_escojepokemon1");
var botonconfirmacion = document.getElementById("btn_botonconfirmar1");
var espaciodeinformacion = document.getElementById("canvas1");

var escojavalor2 = document.getElementById("txt_escojepokemon2");
var botonconfirmacion = document.getElementById("btn_botonconfirmar2");
var espaciodeinformacion = document.getElementById("canvas2");

botonconfirmacion.addEventListener ("click", escojepokemon);

function escojepokemon () {

    var escoja1 = escojavalor1.value;
    var escoja2 = escojavalor1.value;

    if ((( escoja1 == "charmander") && (escoja2 == "charmander" )) || (( escoja1 == "squirtle") && (escoja2 == "squirtle" )) || 
    (( escoja1 == "bulbasaur") && (escoja2 == "bulbasaur") )) {
        espaciodeinformacion.innerHTML= ("Al ser el mismo tipo el daño que realicen es neutral");
    } 
    else if ((( escoja1 == "charmander") && (escoja2 == "bulbasaur")) || (( escoja1 == "squirtle") && (escoja2 == "charmander")) || (( escoja1 == "bulbasaur") && (escoja2 == "squirtle" ))) {
        espaciodeinformacion.innerHTML= ("el primer pokemon hace daño superefectivo al segundo");       
    } 
    else if ((( escoja1 == "charmander") && (escoja2 == "squirtle")) || (( escoja1 == "squirtle") && (escoja2 == "bulbasaur" )) || (( escoja1 == "bulbasaur") && (escoja2 == "charmander"))) {
        espaciodeinformacion.innerHTML= ("el segundo pokemon es resistende al daño del mismo elemento del pókemon");           
    } 
    else {
        espaciodeinformacion.innerHTML= ("Verifica si escribiste correctamente las opciones y en minusculas");
    }
    return (0);

}