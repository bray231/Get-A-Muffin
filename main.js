var isBase10 = true;
var isBinary = false;
var isHexa = false;
var isOctal = false;
var isBase36 = false;
var num_muffins = 0;
var counter = 0;
    
function getMuffin(){
  counter += 1;
  num_muffins = checkAndConvert(counter);
  document.getElementById("muffin_counter").innerHTML = "Muffins: " + num_muffins;
}

function choosePic(){
    var myImages1 = new Array ();
    myImages1[1] = "images/chocolate_chip.jpg";
    myImages1[2] = "images/chocolate.jpg";
    myImages1[3] = "images/plain.jpg";
    var rnd = Math.floor(Math.random() * myImages1.length);
    
    if(rnd == 0){
       rnd = 1;
    }
    
    var html_code = '<img id="a_muffin" src="' + myImages1[rnd] + '" />';
    document.write(html_code);

function checkAndConvert(num){
    if(isBinary == true){
       return convertToBinary(num);
    }
    
    if(isHexa == true){
       return convertToHexadecimal(num);
    }
    
    if(isOctal == true){
       return convertToOctal(num);
    }
    
    if(isBase36 == true){
       return convertToHexatridecimal(num);
    }
    
    if(isBase10 == true){
       return num;
    }
}

function base10ON(){
    isBase10 = true;
    isBinary = false;
    isHexa = false;
    isOctal = false;
    isBase36 = false;
}

function binaryON(){
    isBase10 = false;
    isBinary = true;
    isHexa = false;
    isOctal = false;
    isBase36 = false;
}

function hexaON(){
    isBase10 = false;
    isBinary = false;
    isHexa = true;
    isOctal = false;
    isBase36 = false;
}

function octalON(){
    isBase10 = false;
    isBinary = false;
    isHexa = false;
    isOctal = true;
    isBase36 = false;
}

function base36ON(){
    isBase10 = false;
    isBinary = false;
    isHexa = false;
    isOctal = false;
    isBase36 = true;
}

function convertToBinary(num){
  return parseInt(num, 10).toString(2);
}

function convertToHexa(num){
  return parseInt(num, 10).toString(36);
}

function convertToOctal(num){
  return parseInt(num, 10).toString(36);
}

function convertToHexatridecimal(num){
  return parseInt(num, 10).toString(36);
}
