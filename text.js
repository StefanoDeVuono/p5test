var FIRA;
var PINK;
var PURPLE;
var ALONE = [ 'A', 'L', 'O', 'N', 'E' ];
// var ALONE = [ 'M', 'I', 'D', 'D', 'L', 'E' ];

var aloneData = []

var widths = [];
var aloneXPositions = [];
var desiredSpace = [];
var timer = 0
var timerTarget = 0;
var minTime = 2000; //ms
var maxTime = 5000; //ms
var minDesiredSpace = 0;
var maxDesiredSpace = 30;
var spread = false;

function preload() {
   FIRA = loadFont('assets/FiraSans-Bold.otf');
}

function setup() {
  // frameRate(2);
  textFont(FIRA);
  textSize(32);
  createCanvas(windowWidth, windowHeight);
  var BACKGROUND = color(245);
  background(BACKGROUND);

  BLACK = color(0);

  textFont(FIRA);
  fill(BLACK);
  var s = 'HELLO'
  debugger
  // text('HELLO', 0, 10);
  // debugger
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
//   createIt();
}
