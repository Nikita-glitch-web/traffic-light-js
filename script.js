var colorsForLighter = ["#7CFC00", "#ff0000", "#ffff00"];

function toogleLight() {
  const [red, yellow, green] = document.querySelectorAll(".lighter");
  var random_colorsForLighter =
    colorsForLighter[Math.floor(Math.random() * colorsForLighter.length)];

  red.onclick = function () {
    yellow.style.backgroundColor = "transparent";
    green.style.backgroundColor = "transparent";

    red.style.backgroundColor = colorsForLighter[0];
  };

  yellow.onclick = function () {
    yellow.style.backgroundColor = "transparent";
    green.style.backgroundColor = "transparent";
    yellow.style.backgroundColor = colorsForLighter[1];
  };
  

  green.onclick = function () {
    red.style.backgroundColor = "transparent";
    yellow.style.backgroundColor = "transparent";
    green.style.backgroundColor = colorsForLighter[2];
  };
}

toogleLight();
