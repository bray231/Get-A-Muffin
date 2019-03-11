var num_muffins = 0;
    
function getMuffin(){
  num_muffins = num_muffins + 1;
  var elem = document.createElement("img");
  var rnd = Math.floor(Math.random() * 3);
  
  if(rnd == 0){
    elem.src = 'Images/plain.jpg';
  }
  
  if(rnd == 1){
    elem.src = 'Images/chocolate_chip.jpg';
  }
  
  if(rnd == 2){
    elem.src = 'Images/chocolate.jpg';
  }
    
  if(rnd == 3){
     elem.src = 'Images/blueberry.jpg';
  }
     
  if(rnd == 4){
     elem.src = 'Images/strawberry.jpg';
  }
    
  if(rnd == 5){
     elem.src = 'Images/wildcherry.jpg';
  }
  
  elem.setAttribute("height", "24");
  elem.setAttribute("width", "24");
  elem.setAttribute("alt", "Muffin!");
  document.getElementById("placehere").appendChild(elem);
  document.getElementById("muffin_counter").innerHTML = "Muffins: " + num_muffins;
}
