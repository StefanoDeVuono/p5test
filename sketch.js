var FIRA;
var PINK;
var PURPLE;
// var ALONE = [ 'A', 'L', 'O', 'N', 'E' ];
var ALONE = {A: {}, L: {}, O: {}, N: {}, E: {}};

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
var initial = true;
var spread = true;
var positionStart;
var yPosition;
var midPoint;

function preload() {
   FIRA = loadFont('assets/FiraSans-Bold.otf');
}

function setup() {
  // frameRate(2);
  textFont(FIRA);
  textSize(32);
  createCanvas(windowHeight, windowWidth);

  positionStart = windowHeight / 2;
  var FONT = 32;
  yPosition = windowHeight / 2;
  aloneData = Object.keys(ALONE);
  midPoint = Math.floor(aloneData.length / 2);
  aloneData.forEach(function(letter, index){
    var xPosition, previousLetterWidth, previousLetterX;
    if (index === 0) {
      xPosition = positionStart;
    } else {
      var previousLetter = aloneData[index - 1];
      xPosition = ALONE[previousLetter].bounds.x + (1 * ALONE[previousLetter].bounds.w);
    }
    ALONE[letter].bounds = FIRA.textBounds(letter, xPosition, yPosition, FONT);
  })
}

function windowResized() {
  resizeCanvas(windowHeight, windowWidth);
//   createIt();
}

function draw() {
  var BACKGROUND = color(245);
  background(BACKGROUND);

  PINK = color(193, 153, 166);
  PURPLE = color(57, 47, 90);

  textFont(FIRA);

  _allOfUs()
  _together()
  _alone()
  _inOurTraumas()
}

function _allOfUs(){
  fill(PINK);
  textAlign(LEFT);
  text("ALL OF US", 10, 30);
}

function _together(){
  fill(PURPLE);
  textAlign(LEFT);
  text("TOGETHER", 20, 55);
}

function _alone(){

  fill(PURPLE);

  aloneData = Object.keys(ALONE);
  aloneData.forEach(function(letter, index){
    var factor;
    var xBound = ALONE[letter].bounds.x;
    if (letter === 'A' && xBound < 120 && spread) {
      spread = false
    }
    if (letter === 'A' && xBound > positionStart && !spread) {

      spread = true;
    }
    if (spread) {
      factor = index - midPoint;
    } else {
      factor = midPoint - index;
    }
    xBound +=factor;
    ALONE[letter].bounds.x = xBound;
    text(letter, xBound, ALONE[letter].bounds.y);
  })

  // fill(color(127,0,0, 100));
}


function _inOurTraumas(){
  fill(PINK);
  textAlign(RIGHT);
  text("IN OUR TRAUMAS", windowHeight - 10, windowWidth - 50);


  fill(PURPLE)
  text("TRAUMA", windowHeight - 26.5, windowWidth - 50);
}

// _fadeOtherLetters()
