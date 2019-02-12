var start = new Date().getTime();
var bestTime = start;

function makeShapeAppear(){

    document.getElementById("shape").style.display =  "block";
    start = new Date().getTime();
}

function appearAfterDelay(){

    setTimeout(makeShapeAppear, Math.random() * 3000);
}


function getRandomColor() {

      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  appearAfterDelay();

document.getElementById("shape").onclick = function() {

  var shape = document.getElementById("shape");

    shape.style.display = "none";

  var positionAndSize = [Math.random() * 400 , Math.floor(Math.random() * 200) + 100];

    shape.style.top = positionAndSize[0] + "px";

    shape.style.left = positionAndSize[0] + "px";

    shape.style.width = positionAndSize[1] + "px";

    shape.style.height = positionAndSize[1] + "px";

    shape.style.backgroundColor = getRandomColor();

  if (Math.random() > 0.5){

    shape.style.borderRadius = "50%";
} else{
    shape.style.borderRadius = "0";
        }

  var end = new Date().getTime();
  var timeTaken = (end - start)/1000;

  if (bestTime > timeTaken){

    bestTime=timeTaken;
  }

    document.getElementById("time-container").innerHTML = timeTaken + " s";
    document.getElementById("besttime-container").innerHTML = bestTime + " s";

    appearAfterDelay();
