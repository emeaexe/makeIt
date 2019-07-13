console.log("IT WORKS.")

//onload="randombg()"

function randombg(){
  var random = Math.floor(Math.random() * 4) + 0; //genera valor random entre 0 y 4.
  if (random < 1){
  		var random = 4; //si sale cero lo vuelve 4
  }
  var bigSize = [,"url(../fondo/a.png)",
                "url(../fondo/b.png)",
                "url(../fondo/c.png)",
                "url(../fondo/d.png)"];
  document.body.style.backgroundImage = bigSize[random]; //cambia el fondo de acuerdo con el numero random
}