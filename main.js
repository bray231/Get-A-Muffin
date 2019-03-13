var isBase10 = True;
var isBinary = False;
var num_muffins = 0;

function getMuffin(){
  if(isBase10 != True){
    num_muffins = convertToBase10(num_muffins);
  }
  
  num_muffins = num_muffins + 1;
  
  if(isBinary == True){
     num_muffins = convertToBinary(num_muffins);
  }
  
  var elem = document.createElement("img");
  var rnd = Math.floor(Math.random() * 6);
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

function convertToBinary(num){
  return parseInt(num, 10).toString(2);
}

function convertToBase10(num){
    return parseInt(num, 2).toString(10);
}

function setBase10(){
  isBase10 = True;
  isBinary = False;
}

function setBinary(){
  isBase10 = False;
  isBinary = True;
}
