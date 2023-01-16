const cajaMunheco = document.querySelector('.cajaMunheco');
const imgMunheco = document.querySelector('.imgMunheco');
const ningun = document.querySelector('.ningun');
const ingresa = document.querySelector('.ingresa');

const resultado = document.querySelector('.resultado');
const cajaResultado = document.querySelector('.cajaResultado');
const correcto = document.querySelector('.correcto');
const copiar = document.querySelector('.copiar');

const ingresoTexto = document.querySelector('.ingresoTexto');

var textoIngresado = ingresoTexto.value;
var textoActual;
var textoNuevo;

function inicio(){
    resultado.style.display = 'none';
    cajaResultado.style.display = 'none';
    correcto.style.display = 'none';
    copiar.style.display = 'none';

    cajaMunheco.style.display = 'inline-block';
    imgMunheco.style.display = 'inline-block';
    ningun.style.display = 'inline-block';
    ingresa.style.display = 'inline-block';
}

function encriptar(){
    
    resultado.style.display = 'inline-block';
    cajaResultado.style.display = 'inline-block';
    copiar.style.display = 'inline-block';

    cajaMunheco.style.display = 'none';
    imgMunheco.style.display = 'none';
    ningun.style.display = 'none';
    ingresa.style.display = 'none';

    correcto.style.display = 'none';

    if (ingresoTexto.value == "" || ingresoTexto.value == null) {
       alert("Primero debe ingresar el texto que desea encriptar")
       inicio();
    } else {
        let str = ingresoTexto.value;
        let nuevaStr = str.split("").map((char) => {
            if (char === "a") return "ai";
            if (char === "e") return "enter";
            if (char === "i") return "imes";
            if (char === "o") return "ober";
            if (char === "u") return "ufat";
            return char;
        }).join("");

        cajaResultado.value = nuevaStr;
        ingresoTexto.value ="";
    
    }
}

function desencriptar(){
    resultado.style.display = 'inline-block';
    cajaResultado.style.display = 'inline-block';
    copiar.style.display = 'inline-block';

    cajaMunheco.style.display = 'none';
    imgMunheco.style.display = 'none';
    ningun.style.display = 'none';
    ingresa.style.display = 'none';

    correcto.style.display = 'none';

    if (ingresoTexto.value == "" || ingresoTexto.value == null) {
       alert("Primero debe ingresar el texto que desea desencriptar")
       inicio();
    } else {

        var str = ingresoTexto.value;
        var mapObj = {
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u"

        };
        str = str.replace(/ai|enter|imes|ober|ufat/g, function(matched){
        return mapObj[matched];
        });

        cajaResultado.value = str;
        ingresoTexto.value ="";
    
    }
}

function copiarAlPortapapeles(id_elemento) {
    cajaResultado.select();
    document.execCommand("copy");
    cajaResultado.value = "";
    //alert("Se copio correctamente el texto")
    cajaResultado.style.display = 'none';
    correcto.style.display = 'inline-block';
    copiar.style.display = 'none';
    
}

function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8 || tecla == 32) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[a-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}