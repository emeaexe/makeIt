var myloc = window.location.href;
var locarray = myloc.split("/");
delete locarray[(locarray.length-1)];
var arraytext = locarray.join("/");
var itemsPath = arraytext + "items/"
var arraytext = arraytext + "fondo/"
console.log("IT WORKS.")

function randombg(){
  var random = Math.floor(Math.random() * 6) + 0;
  if (random < 1){
      var random = 6;
  }
  var bigSize = [,"url(" + arraytext + "a.png)",
                "url(" + arraytext + "b.png)",
                "url(" + arraytext + "c.png)",
                "url(" + arraytext + "d.png)",
                "url(" + arraytext + "e.png)",
                "url(" + arraytext + "f.png)",];
  document.body.style.backgroundImage = bigSize[random];
  console.log(random);
}

$(document).ready(function (){
$("#save").click( function() {
  var itemName = "<h1>" + $("#name").val() + "</h1>";
  var itemName1 = "<h1>" + $("#altName1").val() + "</h1>";
  var description = "<p>" + $("#desc").val() + "</p>";
  var desechado = "<p>" + $("#desecha").val() + "</p>";
  var enBolsa;
  if (document.getElementById("verde").checked) {
    var enBolsa = "En bolsa verde."
  }
  if (document.getElementById("negra").checked) {
    var enBolsa = "En bolsa negra."
  }
  var metal = document.getElementById("metal").checked;
  switch (metal) {
    case (metal = true):
      metal = "Metal: " + document.getElementById("tipoMetal").value;
    break;
    case (metal = false):
      metal = "No lo componen metales.";
    break;
  }
  var plas = document.getElementById("plastic").checked;
  switch (plas) {
    case (plas = true):
      plas = "Plástico: " + document.getElementById("plasticType").value;
    break;
    case (plas = false):
      plas = "No lo componen plásticos.";
    break;
  }
  var madera = document.getElementById("madera").checked;
  switch (madera) {
    case (madera = true):
      madera = "Madera.";
    break;
    case (madera = false):
      madera = "No contiene madera.";
    break;
  }
  var papel = document.getElementById("papel").checked;
  switch (papel) {
    case (papel = true):
      papel = "Papel.";
    break;
    case (papel = false):
      papel = "No contiene papel.";
    break;
  }
  var tela = document.getElementById("tela").checked;
  switch (tela) {
    case (tela = true):
      tela = "Tela: " + document.getElementById("telaTipo").value;
    break;
    case (tela = false):
      tela = "No contiene tela.";
    break;
  }
  var reciclado = "<p>" + $("#reciclado").val() + "</p>";
  var idea1 = $("#idea1").val();
  var link1 = $("#link1").val();
  var idea1 = "<a href=" + link1 + ">" + idea1 + "</a>"
  var idea2 = $("#idea2").val();
  var link2 = $("#link2").val();
  var idea2 = "<a href=" + link2 + ">" + idea2 + "</a>"
  var idea3 = $("#idea3").val();
  var link3 = $("#link3").val();
  var idea3 = "<a href=" + link3 + ">" + idea3 + "</a>"


  var final = "<script src=\"item.js\"></script>" + "\n" + "<link href=\"item.css\" rel=\"stylesheet\" type=\"text/css\"/>" + "\n" + "<body onload=\"randombg()\">" + "\n" + itemName + "\n" + description + "\n" + "<hr>" + "\n" + "<h3>Desechado:</h3>" + "\n" + desechado + "\n" + enBolsa + "\n" + "<hr>" + "\n" + "<h3>Materiales que lo componen:</h3>" + "\n" + metal + "\n" + plas + "\n" + madera + "\n" + papel + "\n" + tela + "\n" + "<h3>Forma de reciclado:</h3>" + "\n" + reciclado + "\n" + "<h3>Qué se puede hacer?</h3>" + "\n" + idea1 + "\n" + idea2 + "\n" + idea3; + "\n" + "<body>";
  var filename =  document.getElementById("name").value.replace(/ /g, "-") + ".html";
  console.log(filename);
  var blob = new Blob([final], {type: "text/plain"});
  saveAs(blob, filename);
  var filename =  document.getElementById("altName1").value.replace(/ /g, "-") + ".html";
  console.log(filename);
  saveAs(blob, filename);
  var filename =  document.getElementById("altName2").value.replace(/ /g, "-") + ".html";
  console.log(filename);
  saveAs(blob, filename);
  var filename =  document.getElementById("altName3").value.replace(/ /g, "-") + ".html";
  saveAs(blob, filename);
  console.log(filename);
});

});