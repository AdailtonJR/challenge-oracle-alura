//e --> enter
//i --> imes
//a --> ai
//o --> ober
//u --> ufat
function encriptar() {
   var texto = document.getElementById("inputTexto").value.toLowerCase();

   var txt = texto.replace(/e/igm, "enter");
       txt = txt.replace(/i/igm,"imes");
       txt = txt.replace(/a/igm,"ai");
       txt = txt.replace(/o/igm,"ober");
       txt =txt.replace(/u/igm,"ufat");
  

   document.getElementById("imgdir").style.display = "none";
   document.getElementById("texto").style.display = "none";
   document.getElementById("texto2").innerHTML = txt;
   document.getElementById("copiar").style.display = "show";
   document.getElementById("copiar").style.display = "inherit";

}

function desencriptar() {
   var texto = document.getElementById("inputTexto").value.toLowerCase();

   var txt = texto.replace(/enter/igm, "e");
       txt = txt.replace(/imes/igm,"i");
       txt = txt.replace(/ai/igm,"a");
       txt = txt.replace(/ober/igm,"o");
       txt = txt.replace(/ufat/igm,"u");


   document.getElementById("imgdir").style.display = "none";
   document.getElementById("texto").style.display = "none";
   document.getElementById("texto2").innerHTML = txt;
   document.getElementById("copiar").style.display = "show";
   document.getElementById("copiar").style.display = "inherit";

}

function copy() {
   var conteudo = document.querySelector("#texto2");
   conteudo.select();
   document.execCommand("copy");
   alert("copiado");
}



