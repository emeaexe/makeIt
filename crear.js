var myloc = window.location.href;
var locarray = myloc.split("/");
delete locarray[(locarray.length-1)];
var arraytext = locarray.join("/");
var itemsPath = arraytext + "items/"
var arraytext = arraytext + "fondo/"
console.log("IT WORKS.")
console.log(itemsPath)


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



$("#save").click(function(){
  var title = $("#name").val()
  var itemName = "<h1>" + $("#name").val() + "</h1>";
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
      metal = " ";
    break;
  }
  var plas = document.getElementById("plastic").checked;
  switch (plas) {
    case (plas = true):
      plas = "Plástico: " + document.getElementById("plasticType").value;
    break;
    case (plas = false):
      plas = " ";
    break;
  }
  var vir = document.getElementById("vidrio").checked;
  switch (vir) {
    case (vir = true):
      plas = "Contiene vidrio";
    break;
    case (viir = false):
      plas = " ";
    break;
  }
  var madera = document.getElementById("madera").checked;
  switch (madera) {
    case (madera = true):
      madera = "Madera.";
    break;
    case (madera = false):
      madera = " ";
    break;
  }
  var papel = document.getElementById("papel").checked;
  switch (papel) {
    case (papel = true):
      papel = "Papel.";
    break;
    case (papel = false):
      papel = " ";
    break;
  }
  var tela = document.getElementById("tela").checked;
  switch (tela) {
    case (tela = true):
      tela = "Tela: " + document.getElementById("telaTipo").value;
    break;
    case (tela = false):
      tela = " ";
    break;
  }
  var reciclado = "<p>" + $("#reciclado").val() + "</p>";
  var idea1 = $("#idea1").val();
  var idea1 = "<a href=" + "https://" + $("#link1").val()+ ">" + idea1 + "</a>"
  var idea2 = $("#idea2").val();
  var idea2 = "<a href=" + "https://" + $("#link2").val()+ ">" + idea2 + "</a>"
  var idea3 = $("#idea3").val();
  var idea3 = "<a href=" + "https://" + $("#link3").val()+ ">" + idea3 + "</a>"
  var reemplaza = "<p>" + $("#reemplaza").val() + "</p>";
  var keAse = "<p>" + $("#keAse").val() + "</p>";


  var final = "<script src=\"item.js\"></script>" + "\n" + "<link href=\"item.css\" rel=\"stylesheet\" type=\"text/css\"/>" + "\n" + "<title>" + title + "</title>" + "\n" + "<body onload=\"randombg()\">" + "\n" + itemName + "\n" + description + "\n" + "<hr>" + "\n" + "<h3>Desechado:</h3>" + "\n" + desechado + "\n" + enBolsa + ". " + "<a href=" + "https://recuperandovalor.cordoba.gob.ar/buscador/" + ">Consultar horario de recolección para tu barrio (beta)</a>" + "\n" + "<hr>" + "\n" + "<h3>Materiales que lo componen:</h3>" + "\n" + metal + "\n" + plas + "\n" + vir + "\n" + madera + "\n" + papel + "\n" + tela + "\n" + "<h3>Forma de reciclado:</h3>" + "\n" + reciclado + "\n" + "<h3>Qué se puede hacer?</h3>" + "\n" + idea1 + "\n" + idea2 + "\n" + idea3 + "\n" + "<h3>" + "Reemplazo:" + "</h3>" + "\n" + reemplaza + "\n" + "<h3>" + "Qué debo hacer si me ofrecen este producto?" + "</h3>" + "\n" + keAse + "\n" + "</body>";
  console.log(final);

  var filename =  document.getElementById("name").value.replace(/ /g, "-").toLowerCase() + ".html";
  var blob = new Blob([final], {type: "text/plain"});
  if (filename.length > 5) {
	var file = saveAs(blob, filename);
  }
  var filename =  document.getElementById("altName1").value.replace(/ /g, "-").toLowerCase() + ".html";
  if (filename.length > 5) {
    saveAs(blob, filename);
  }
  var filename =  document.getElementById("altName2").value.replace(/ /g, "-").toLowerCase() + ".html";
  if (filename.length > 5) {
    saveAs(blob, filename);
  }
  var filename =  document.getElementById("altName3").value.replace(/ /g, "-").toLowerCase() + ".html";
  if (filename.length > 5) {
    saveAs(blob, filename);
  }
});