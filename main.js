var num_muffins = 0;
var isBase10 = False;
var isBinary = False;
var isHexa = False;
var isOctal = False;
var isBase36 = False;
    
function getMuffin(){
  num_muffins = convertToBase10(num_muffins);
  num_muffins = num_muffins + 1;
  if(isBase10 == True){
    num_muffins = convertToBase10(num_muffins);
  }
  if(isBinary == True){
    num_muffins = convertToBinary(num_muffins);
  }
  if(isHexa == True){
    num_muffins = convertToHexa(num_muffins);
  }
  if(isOctal == True){
    num_muffins = convertToOctal(num_muffins);
  }
  if(isBase36 == True){
    num_muffins = convertToBase36(num_muffins);
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

function convertToBase10(num){
    return parseInt(num, 2).toString(10);
}

function convertToBinary(num){
    return parseInt(num, 10).toString(2);
}

function convertToHexa(num){
    return parseInt(num, 10).toString(6);
}

function convertToOctal(num){
    return parseInt(num, 10).toString(8);
}

function convertToBase36(num){
    return parseInt(num, 10).toString(36);
}

function setBase10(){
    isBase10 = True;
    isBinary = False;
    isHexa = False;
    isOctal = False;
    isBase36 = False;
}

function setBinary(){
    isBase10 = False;
    isBinary = True;
    isHexa = False;
    isOctal = False;
    isBase36 = False;
}

function setHexa(){
    isBase10 = False;
    isBinary = False;
    isHexa = True;
    isOctal = False;
    isBase36 = False;
}

function setOctal(){
    isBase10 = False;
    isBinary = False;
    isHexa = False;
    isOctal = True;
    isBase36 = False;
}

function setBase36(){
    isBase10 = False;
    isBinary = False;
    isHexa = False;
    isOctal = False;
    isBase36 = True;
}
