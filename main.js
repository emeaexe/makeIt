var myloc = window.location.href;
var locarray = myloc.split("/");
delete locarray[(locarray.length-1)];
var arraytext = locarray.join("/");
var itemsPath = arraytext + "items/"
var arraytext = arraytext + "fondo/"
console.log("IT WORKS.")
console.log(arraytext);

function randombg(){
  var random = Math.floor(Math.random() * 4) + 0;
  if (random < 1){
  		var random = 4;
  }
  var bigSize = [,"url(" + arraytext + "a.png)",
                "url(" + arraytext + "b.png)",
                "url(" + arraytext + "c.png)",
                "url(" + arraytext + "d.png)"];
  document.body.style.backgroundImage = bigSize[random];
  console.log(random);
}

function srch(){
	var srchTrm = document.getElementById("searcher").value;
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