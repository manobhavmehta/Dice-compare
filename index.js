var randomnumber=Math.random();
randomnumber=Math.floor(randomnumber*6);
randomnumber=randomnumber+1;
var randomimage= "images/dice" + randomnumber +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);


var randomnumber2=Math.random();
randomnumber2=Math.floor(randomnumber2*6);
randomnumber2=randomnumber2+1;
var randomimage2= "images/dice" + randomnumber2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);

if(randomnumber>randomnumber2)
document.querySelector("h1").innerHTML="Palyer 1 Wins."

if(randomnumber<randomnumber2)
document.querySelector("h1").innerHTML="Palyer 2 Wins."
 
if(randomnumber===randomnumber2)
document.querySelector("h1").innerHTML="Draw."