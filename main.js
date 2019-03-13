var num_muffins = 0;
var num_muffins_binary = 0;
var num_muffins_hexa = 0;
var num_muffins_octal = 0;
var num_muffins_base36 = 0;
var counter = 0;

function getMuffin(){
  counter += 1;
  num_muffins = counter;
  num_muffins_binary = convertToBinary(counter);
  num_muffins_hexa = convertToHexa(counter);
  num_muffins_octal = convertToOctal(counter);
  num_muffins_base36 = convertToBase36(counter);
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
  document.getElementById("muffin_counter_binary").innerHTML = num_muffins_binary;
  document.getElementById("muffin_counter_hexa").innerHTML = num_muffins_hexa;
  document.getElementById("muffin_counter_octal").innerHTML = num_muffins_octal;
  document.getElementById("muffin_counter_base36").innerHTML = num_muffins_base36;
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
