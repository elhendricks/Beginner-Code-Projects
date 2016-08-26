var elDot = document.getElementById("dot");
var elResetButton = document.getElementById('reset');
var elEmbiggenButton = document.getElementById('embiggen');
var elShrinkButton = document.getElementById('shrink');
var dotSize = 100;
var dotSizeStr = dotSize + 'px';
var x;
var y;

function moveDot() {
  x = 100 * Math.random() + '% ';
  y = 100 * Math.random() + '% ';
  dot.style.visibility = 'visible';
  dot.style.top =  x;
  dot.style.left = y;
  document.getElementById('instructions').innerHTML = 'Click anywhere to move dot.'
}

function setSize() {
  dotSizeStr = dotSize + 'px';
  dot.style.height = dotSizeStr;
  dot.style.width = dotSizeStr;
}

function embiggenDot() {
  dotSize *= 1.25;
  setSize();
}

function shrinkDot() {
  dotSize *= .8;
  setSize();
}

function resetDot() {
  dotSize = 100;
  setSize();
}

document.addEventListener("click", moveDot, false);
elResetButton.addEventListener("click", resetDot, false);
elEmbiggenButton.addEventListener("click", embiggenDot, false);
elShrinkButton.addEventListener("click", shrinkDot, false);
