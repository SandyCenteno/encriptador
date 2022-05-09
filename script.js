var texto_escrito = document.querySelector('#texto_encriptado')
var texto_resultado = document.querySelector('#texto_resultado');

var btnEncriptarSubmit = document.querySelector('#btnEncriptar');
btnEncriptarSubmit.onclick = btnEncriptar;

var btnDesencriptarSubmit = document.querySelector('#btnDesecriptar');
btnDesencriptarSubmit.onclick = btnDesencriptar;

var btnCopiarbmit = document.querySelector('#btnCopiar');
btnCopiarbmit.onclick = btnCopiar;


var divSinResultados = document.querySelector('#div-sin-resultados');
divSinResultados.style.display = "block";

var divConResultados = document.querySelector('#div-con-resultados');
divConResultados.style.display = "none";

var listoCopiado = document.querySelector('#listo_copiado');
listoCopiado.style.display = "none";


function btnEncriptar() {
   if(!validarCompoVacio()){
        var texto_encriptado =  encriptar(texto_escrito.value);
        texto_resultado.value = texto_encriptado;
   }
}

function encriptar(texto) {
    texto = texto.toLowerCase();
    reset();

    return texto.replace(/e/ig,"enter")
    .replace(/i/ig,"imes")
    .replace(/a/ig,"ai")
    .replace(/o/ig,"ober")
    .replace(/u/ig,"ufat");
}

function btnDesencriptar() {
    if(!validarCompoVacio()){
        var texto_encriptado =  desencriptar(texto_escrito.value);
        texto_resultado.value = texto_encriptado;
    }
}

function desencriptar(texto) {
    texto = texto.toLowerCase();
    reset();

    return texto.replace(/enter/ig,"e")
    .replace(/imes/ig,"i")
    .replace(/ai/ig,"a")
    .replace(/ober/ig,"o")
    .replace(/ufat/ig,"u");
}

function btnCopiar() {
    texto_resultado.select();
    document.execCommand('copy');
    listoCopiado.style.display = "block";
    texto_escrito.focus();
}

function reset(){
    texto_encriptado.value = "";
    divSinResultados.style.display = "none";
    divConResultados.style.display = "block";
    listoCopiado.style.display = "none";
}

function validarCompoVacio() {
    if(texto_escrito.value == "") {
        alert("Campo vacío");
        return true;
    }
    return false;
}