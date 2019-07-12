var myloc = window.location.href;
var locarray = myloc.split("/");
delete locarray[(locarray.length-1)];
var arraytext = locarray.join("/");
var arraytext = arraytext + "items/"
console.log("IT WORKS.")
console.log(arraytext);
