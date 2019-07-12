var myloc = window.location.href;
var locarray = myloc.split("/");
delete locarray[(locarray.length-1)];
var arraytext = locarray.join("/");
var arraytext = arraytext + "fondo/"
console.log("IT WORKS.")
console.log(arraytext);

$('document').ready(function(){
	var bckImg = "url(" + arraytext + "a.png)"
	document.body.style.backgroundImage = bckImg;
});
