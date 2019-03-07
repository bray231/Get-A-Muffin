var num_muffins = 0;
    
function getMuffin(){
  num_muffins = num_muffins + 1;
  var elem = document.createElement("img");
  elem.src = 'muffin.jpg';
  elem.setAttribute("height", "24");
  elem.setAttribute("width", "24");
  elem.setAttribute("alt", "Muffin!");
  document.getElementById("placehere").appendChild(elem);
  document.getElementById("muffin_counter").innerHTML = "Muffins: " + num_muffins;
}
