var num_muffins = 0;
    
function getMuffin(){
  num_muffins = convertToDecimal(num_muffins);
  num_muffins = num_muffins + 1;
  var elem = document.createElement("img");
  elem.src = 'muffin.jpg';
  elem.setAttribute("height", "24");
  elem.setAttribute("width", "24");
  elem.setAttribute("alt", "Muffin!");
  document.getElementById("placehere").appendChild(elem);
  document.getElementById("muffin_counter").innerHTML = "Muffins: " + convertToBinary(num_muffins);
}

function convertToBinary(num){
  return parseInt(num, 10).toString(2);
}

function convertToDecimal(num){
    return parseInt(num, 2).toInteger(10);
}
