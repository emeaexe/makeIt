var myloc = window.location.href;
var locarray = myloc.split("/");
delete locarray[(locarray.length-1)];
var arraytext = locarray.join("/");
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
