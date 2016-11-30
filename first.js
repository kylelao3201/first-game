var Pika = document.getElementById("pika");
var PikaXVal = Number(Pika.getAttribute("x"));
var PikaYVal = Number(Pika.getAttribute("y"));

// randomNumber returns a random number between min and max
function randomNumber(min,max)
{
 return Math.floor(Math.random(0,800)*(max-min+1)+min);
}
document.addEventListener("keydown", function(e) {

  if (e.keyCode == 37) {
    Pika.setAttribute("x",PikaXVal - 15);
  PikaXVal = PikaXVal - 15;
  }

   else if (e.keyCode == 39) {
    Pika.setAttribute("x",PikaXVal + 15);
  PikaXVal = PikaXVal + 15;
  }

  else if (e.keyCode == 38) {
   Pika.setAttribute("y",PikaYVal - 15);
 PikaYVal = PikaYVal - 15;
}

else if (e.keyCode == 40) {
 Pika.setAttribute("y",PikaYVal + 15);
PikaYVal = PikaYVal + 15;
}

  var foodWidth = 20
  var foodHeight = 20
  var foodX = Number(document.getElementById("pokeball1").getAttribute("x"))
  var foodY = Number(document.getElementById("pokeball1").getAttribute("y"))
  var pokeball1 = document.getElementById("pokeball1");

  if (PikaXVal > foodX && PikaXVal < foodX + foodWidth && PikaYVal > foodY && PikaYVal < foodY + foodHeight) {
    var randX = randomNumber(50, 750);
    pokeball1.setAttribute("x",randX)
    console.log("overlap");
  }

  foodX1 = Number(document.getElementById("pokeball2").getAttribute("x"))
  foodY1 = Number(document.getElementById("pokeball2").getAttribute("y"))
  var pokeball2 = document.getElementById("pokeball2");


  if (PikaXVal > foodX1 && PikaXVal  < foodX1 + foodWidth && PikaYVal > foodY1 && PikaYVal < foodY1 + foodHeight)
  {
    randX = randomNumber(50,750);
    pokeball2.setAttribute("x",randX)
    console.log("overlap");
  }
})
