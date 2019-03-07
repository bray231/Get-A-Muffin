var num_muffins = 0;
var counter = 0;
    
function getMuffin(){
  counter += 1;
  num_muffins = convertToHexa(counter);
  var elem = document.createElement("img");
  elem.src = 'muffin.jpg';
  elem.setAttribute("height", "24");
  elem.setAttribute("width", "24");
  elem.setAttribute("alt", "Muffin!");
  document.getElementById("placehere").appendChild(elem);
  document.getElementById("muffin_counter").innerHTML = "Muffins: " + num_muffins;
}

function convertToHexa(num){
  return parseInt(num, 10).toString(16);
}
