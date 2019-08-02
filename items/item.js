var arraytext = "../fondo/"
console.log("IT WORKS.")
console.log(arraytext)


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