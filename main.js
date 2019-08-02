var myloc = window.location.href;
var locarray = myloc.split("/");
delete locarray[(locarray.length-1)];
var arraytext = locarray.join("/");
var itemsPath = arraytext + "items/"
var arraytext = arraytext + "fondo/"
console.log("IT WORKS.")
console.log(itemsPath);

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

  var placeholders = ['Botella de plástico...','Papel de diario...','Pilas alcalinas...','Lata de conserva...','Botella de cerveza...','Tapitas...']
  if (random < 1){
    var random = 5;
  }
  if (random === 6){
    var random = 2;
  }
  var defPlace = placeholders[random]
  console.log(defPlace);
  document.getElementById("searcher").setAttribute("placeholder",defPlace);
}

function srch(){
	var srchTrm = document.getElementById("searcher").value;
  var srchTrm = srchTrm.toLowerCase()
	var srchTrm = srchTrm.replace(/ /g, "-");
	var srchTrm = srchTrm + ".html"
	var defPath = itemsPath + srchTrm
	window.location.href = defPath;
}

$(document).keypress(function(e) {
    if(e.which == 13) {
        srch();
    }
});
