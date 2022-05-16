let gameState = 'title';
let font;
let cardsDiscovery = false;
let cardsResultsDisplay;
let cootieDiscovery = false;
let cootieResultsDisplay;
let dsiDiscovery = false;
let dsiResultsDisplay;
let glCandyDiscovery = false;
let glCandyResultsDisplay;
let lockedResultsDisplay;
let lpsDiscovery = false;
let lpsResultsDisplay;
let lycheeDiscovery = false;
let lycheeResultsDisplay;
let origamiStarDiscovery = false;
let origamiStarResultsDisplay;
let pcDiscovery = false;
let pcResultsDisplay;
let startTime = 0;
let timeInt = 1800; //30sec
let timeFrame;
let skyTheme = true;
let titleStarArchive = [];
// let skyTheme = false;
// let titleStarArchive[];

function preload() {
  bg = loadImage('img/bg.png');
  bg2 = loadImage('img/bg2.png');
  blankHolder = loadImage('img/blank.png');
  cardsImg = loadImage('img/cards.png');
  cardsHover = loadImage('img/cardshover.png');
  cardsHoverNight = loadImage('img/cardshovernight.png');
  cardsClick = loadImage('img/cardsclick.png');
  cardsNightImg = loadImage('img/cardsnight.png');
  cardsResults = loadImage('img/cardsresults.png');
  cardsResultsNight = loadImage('img/cardsresultsnight.png');
  cootieImg = loadImage('img/cootie.png');
  cootieHover = loadImage('img/cootiehover.png');
  cootieHoverNight = loadImage('img/cootiehovernight.png');
  cootieClick = loadImage('img/cootieclick.png');
  cootieNightImg = loadImage('img/cootienight.png');
  cootieResults = loadImage('img/cootieresults.png');
  cootieResultsNight = loadImage('img/cootieresultsnight.png');
  cornerImg = loadImage('img/logo.png');
  downImg = loadImage('img/down.png');
  downImg2 = loadImage('img/down2.png');
  dsiImg = loadImage('img/dsi.png');
  dsiClick = loadImage('img/dsiclick.png');
  dsiHover = loadImage('img/dsihover.png');
  dsiHoverNight = loadImage('img/dsihovernight.png');
  dsiNightImg = loadImage('img/dsinight.png');
  dsiResults = loadImage('img/dsiresults.png');
  dsiResultsNight = loadImage('img/dsiresultsnight.png');
  endResultImg = loadImage('img/results.png');
  exitImg = loadImage('img/x.png');
  exitImg2 = loadImage('img/x2.png');
  font = loadFont('txt/sourceCodeProSB.ttf');
  gameOverScreenImg = loadImage('img/gameoverscreen.png');
  gameOverImg = loadImage('img/gameover.png');
  gameOverImg2 = loadImage('img/gameover2.png');
  glCandyImg = loadImage('img/glcandy.png');
  glCandyClick = loadImage('img/glcandyclick.png');
  glCandyHover = loadImage('img/glcandyhover.png');
  glCandyHoverNight = loadImage('img/glcandyhovernight.png');
  glCandyNightImg = loadImage('img/glcandynight.png');
  glCandyResults = loadImage('img/glcandyresults.png');
  glCandyResultsNight = loadImage('img/glcandyresultsnight.png');
  howToPlay = loadImage('img/instruction.png');
  lightingImg = loadImage('img/sunlight.png');
  lockedResults = loadImage('img/lockitem.png');
  lockedResultsNight = loadImage('img/lockitemnight.png');
  lpsImg = loadImage('img/lps.png');
  lpsHover = loadImage('img/lpshover.png');
  lpsHoverNight = loadImage('img/lpshover.png');
  lpsClick = loadImage('img/lpsclick.png');
  lpsNightImg = loadImage('img/lpsnight.png');
  lpsResults = loadImage('img/lpsresults.png');
  lpsResultsNight = loadImage('img/lpsresultsnight.png');
  lycheeImg = loadImage('img/lychee.png');
  lycheeHover = loadImage('img/lycheehover.png');
  lycheeHoverNight = loadImage('img/lycheehovernight.png')
  lycheeClick = loadImage('img/lycheeclick.png');
  lycheeNightImg = loadImage('img/lycheenight.png');
  lycheeResults = loadImage('img/lycheeresults.png');
  lycheeResultsNight = loadImage('img/lycheeresultsnight.png');
  nextImg = loadImage('img/next.png');
  nextImg2 = loadImage('img/next2.png');
  origamiStarImg = loadImage('img/luckystar.png');
  origamiStarHover = loadImage('img/luckystarhover.png');
  origamiStarHoverNight = loadImage('img/luckystarhovernight.png');
  origamiStarClick = loadImage('img/luckystarclick.png');
  origamiStarNightImg = loadImage('img/luckystarnight.png');
  origamiStarResults = loadImage('img/luckystarresults.png')
  origamiStarResultsNight = loadImage('img/luckystarresultsnight.png')
  pcImg = loadImage('img/pc.png');
  pcHover = loadImage('img/pchover.png');
  pcHoverNight = loadImage('img/pchovernight.png');
  pcClick = loadImage('img/pcclick.png');
  pcNightImg = loadImage('img/pcnight.png');
  pcResults = loadImage('img/pcresults.png');
  pcResultsNight = loadImage('img/pcresultsnight.png');
  playAgainImg = loadImage('img/playagain.png');
  playAgainImg2 = loadImage('img/playagain2.png');
  skyDayImg = loadImage('img/skyday.png');
  skyDayCloud = loadImage('img/skydaycloud.png');
  skyDayLightImg = loadImage('img/skydaylight.png');
  skyDayLight2Img = loadImage('img/skydaylight2.png');
  skyNightDesk1Img = loadImage('img/skynightupper.png');
  skyNightDesk2Img = loadImage('img/skynightlower.png');
  skyNightImg = loadImage('img/skynight.png');
  skyNightLightImg = loadImage('img/skynightlight.png');
  skyNightLight2Img = loadImage('img/skynightlight2.png');
  skyNightMoon = loadImage('img/skynightmoonstar.png');
  skyNightMoonThumbnail = loadImage('img/skynightmoon.png');
  skySelectionImg = loadImage('img/skyscreen.png');
  startImg = loadImage('img/start.png');
  startImg2 = loadImage('img/start2.png');
  titleImg = loadImage('img/title.png');
  // titleStarArchive[0] = titleImg;
  upImg = loadImage('img/up.png');
  upImg2 = loadImage('img/up2.png');
  viewResultsImg = loadImage('img/viewresults.png');
  viewResultsImg2 = loadImage('img/viewresults2.png');
}

function setup() {
  let c = createCanvas(650, 400);
  c.parent("p5sketch");
  frameRate(60); //set frameRate
  textFont(font);
  angleMode(DEGREES);

  start = new Clickable();
  start.locate(525, 250);
  start.color = '#d9d1a000';
  start.text = "";
  start.strokeWeight = 0;
  start.image = startImg;
  start.fitImage = true;
  start.width = 75;
  start.height = 30;
  start.onHover = function() {
    start.imageScale = 1.2;
    start.image = startImg2;
  }
  start.onPress = function() {
    gameState = 'skySelection';
  }
  start.onOutside = function() {
    start.imageScale = 1.0;
    start.image = startImg;
  }

  daySelection = new Clickable();
  daySelection.locate(175, 125);
  daySelection.color = '#afdfff';
  daySelection.text = "";
  daySelection.strokeWeight = 0;
  daySelection.image = skyDayCloud;
  daySelection.fitImage = true;
  daySelection.width = 150;
  daySelection.height = 150;
  daySelection.onHover = function() {
    daySelection.imageScale = 1.2;
  }
  daySelection.onPress = function() {
    skyTheme = true;
  }
  daySelection.onOutside = function() {
    daySelection.imageScale = 1.0;
  }

  nightSelection = new Clickable();
  nightSelection.locate(350, 125);
  nightSelection.color = '#5b58a0';
  nightSelection.text = "";
  nightSelection.strokeWeight = 0;
  nightSelection.image = skyNightMoonThumbnail;
  nightSelection.fitImage = true;
  nightSelection.width = 150;
  nightSelection.height = 150;
  nightSelection.onHover = function() {
    nightSelection.imageScale = 1.2;
  }
  nightSelection.onPress = function() {
    skyTheme = false;
  }
  nightSelection.onOutside = function() {
    nightSelection.imageScale = 1.0;
  }


  nextSky = new Clickable();
  nextSky.locate(300, 300);
  nextSky.color = '#d9d1a000';
  nextSky.text = "";
  nextSky.strokeWeight = 0;
  nextSky.image = nextImg;
  nextSky.fitImage = true;
  nextSky.width = 70;
  nextSky.height = 30;
  nextSky.onHover = function() {
    nextSky.imageScale = 1.2;
    nextSky.image = nextImg2;
  }
  nextSky.onPress = function() {
    gameState = 'instruction';
  }
  nextSky.onOutside = function() {
    nextSky.imageScale = 1.0;
    nextSky.image = nextImg;
  }

  next = new Clickable();
  next.locate(300, 300);
  next.color = '#d9d1a000';
  next.text = "";
  next.strokeWeight = 0;
  next.image = nextImg;
  next.fitImage = true;
  next.width = 70;
  next.height = 30;
  next.onHover = function() {
    next.imageScale = 1.2;
    next.image = nextImg2;
  }
  next.onPress = function() {
    gameState = 'mainGame';
    //timer functionality
    startTime = frameCount;
    timeFrame = startTime+timeInt;
    console.log(startTime);
    console.log(timeFrame);
  }
  next.onOutside = function() {
    next.imageScale = 1.0;
    next.image = nextImg;
  }

  exit = new Clickable();
  exit.locate(600, 25);
  exit.color = '#d9d1a000';
  exit.text = "";
  exit.strokeWeight = 0;
  exit.image = exitImg;
  exit.fitImage = true;
  exit.width = 25;
  exit.height = 25;
  exit.onHover = function() {
    exit.imageScale = 1.2;
    exit.image = exitImg2;
  }
  exit.onPress = function() {
    gameState = 'mainGame';
  }
  exit.onOutside = function() {
    exit.imageScale = 1.0;
    exit.image = exitImg;
  }

  up = new Clickable();
  up.locate(325, 25);
  up.color = '#dddddd00';
  up.text = "";
  up.strokeWeight = 0;
  up.image = upImg;
  up.fitImage = true;
  up.width = 37;
  up.height = 30;
  up.onHover = function() {
    up.imageScale = 1.2;
    up.image = upImg2;
  }
  up.onPress = function() {
    gameState = 'mainGame';
  }
  up.onOutside = function() {
    up.imageScale = 1.0;
    up.image = upImg;
  }

  down = new Clickable();
  down.locate(325, 350);
  down.color = '#dddddd00';
  down.text = "";
  down.strokeWeight = 0;
  down.image = downImg;
  down.fitImage = true;
  down.width = 37;
  down.height = 30;
  down.onHover = function() {
    down.imageScale = 1.2;
    down.image = downImg2;
  }
  down.onPress = function() {
    gameState = 'mainGameExpand';
  }
  down.onOutside = function() {
    down.imageScale = 1.0;
    down.image = downImg;
  }

  cards = new Clickable();
  cards.locate(200, 250);
  cards.color = '#d9d1a000';
  cards.textSize = 3;
  cards.textFont = font;
  cards.text = "";
  cards.strokeWeight = 0;
  cards.image = cardsImg;
  cards.fitImage = true;
  cards.width = 40;
  cards.height = 40;
  let cardsPopUp = cardsHover;
  if (skyTheme) {
    cardsPopUp = cardsHover;
  } else {
    cardsPopUp = cardsHoverNight;
  }
  cards.onHover = function() {
    cards.imageScale = 1.2;
    image(cardsPopUp, 0, 0); //125, 30
  }
  cards.onPress = function() {
    cardsPopUp = cardsClick;
    cardsDiscovery = true;
  }
  cards.onOutside = function() {
    cards.imageScale = 1.0;
    cardsPopUp = cardsHover;
  }

  cootieCatcher = new Clickable();
  cootieCatcher.locate(300, 255);
  cootieCatcher.color = '#d9d1a000';
  cootieCatcher.text = "";
  cootieCatcher.strokeWeight = 0;
  cootieCatcher.image = cootieImg;
  cootieCatcher.fitImage = true;
  cootieCatcher.width = 50;
  cootieCatcher.hight = 50;
  let cootiePopUp = cootieHover;
  if (skyTheme) {
    cootiePopUp = cootieHover;
  } else {
    cootiePopUp = cootieHoverNight;
  }
  cootieCatcher.onHover = function() {
    cootieCatcher.imageScale = 1.2;
    image(cootiePopUp, 0, 0);
  }
  cootieCatcher.onPress = function() {
    cootiePopUp = cootieClick;
    cootieDiscovery = true;
  }
  cootieCatcher.onOutside = function() {
    cootieCatcher.imageScale = 1.0;
    cootiePopUp = cootieHover;
  }

  dsi = new Clickable();
  dsi.locate(380, 220);
  dsi.color = '#d9d1a000';
  dsi.text = "";
  dsi.strokeWeight = 0;
  dsi.image = dsiImg;
  dsi.width = 80;
  dsi.height = 80;
  let dsiPopUp = dsiHover;
  if (skyTheme) {
    dsiPopUp = dsiHover;
  } else {
    dsiPopUp = dsiHoverNight;
  }
  dsi.onHover = function() {
    dsi.imageScale = 1.2;
    image(dsiPopUp, 0, 0);
  }
  dsi.onPress = function() {
    dsiPopUp = dsiClick;
    dsiDiscovery = true;
  }
  dsi.onOutside = function() {
    dsi.imageScale = 1.0;
    dsiPopUp = dsiHover;
  }

  goodLuckCandy = new Clickable();
  goodLuckCandy.locate(245, 240);
  goodLuckCandy.color = '#d9d1a000';
  goodLuckCandy.text = "";
  goodLuckCandy.strokeWeight = 0;
  goodLuckCandy.image = glCandyImg;
  goodLuckCandy.fitImage = true;
  goodLuckCandy.width = 30;
  goodLuckCandy.height = 30;
  let glCandyPopUp = glCandyHover;
  if (skyTheme) {
    glCandyPopUp = glCandyHover;
  } else {
    glCandyPopUp = glCandyHoverNight;
  }
  goodLuckCandy.onHover = function() {
    goodLuckCandy.imageScale = 1.2;
    image(glCandyPopUp, 0, 0);
  }
  goodLuckCandy.onPress = function() {
    glCandyPopUp = glCandyClick;
    glCandyDiscovery = true;
  }
  goodLuckCandy.onOutside = function() {
    goodLuckCandy.imageScale = 1.0;
    glCandyPopUp = glCandyHover;
  }

  lps = new Clickable();
  lps.locate(275, 200);
  lps.color = '#d9d1a000';
  lps.text = "";
  lps.strokeWeight = 0;
  lps.image = lpsImg;
  lps.fitImage = true;
  lps.width = 50;
  lps.height = 50;
  let lpsPopUp = lpsHover;
  if (skyTheme) {
    lpsPopUp = lpsHover;
  } else {
    lpsPopUp = lpsHoverNight;
  }
  lps.onHover = function() {
    lps.imageScale = 1.2;
    image(lpsPopUp, 0, 0);
  }
  lps.onPress = function() {
    lpsPopUp = lpsClick;
    lpsDiscovery = true;
  }
  lps.onOutside = function() {
    lpsPopUp = lpsHover;
    lps.imageScale = 1.0;
  }

  lycheeJelly = new Clickable();
  lycheeJelly.locate(145, 265);
  lycheeJelly.color = '#d9d1a000';
  lycheeJelly.text = "";
  lycheeJelly.strokeWeight = 0;
  lycheeJelly.image = lycheeImg;
  lycheeJelly.fitImage = true;
  lycheeJelly.width = 40;
  lycheeJelly.height = 40;
  let lycheePopUp = lycheeHover;
  if (skyTheme) {
    lycheePopUp = lycheeHover;
  } else {
    lycheePopUp = lycheeHoverNight;
  }
  lycheeJelly.onHover = function() { //when on hover
    lycheeJelly.imageScale = 1.2;
    image(lycheePopUp, 0, 0);
  }
  lycheeJelly.onPress = function() { //when button pressed
    lycheePopUp = lycheeClick;
    lycheeDiscovery = true;
  }
  lycheeJelly.onOutside = function() { //when outside button
    lycheeJelly.imageScale = 1.0;
    lycheePopUp = lycheeHover;
  }

  pc = new Clickable();
  pc.locate(475, 100);
  pc.color = '#d9d1a000';
  pc.text = "";
  pc.strokeWeight = 0;
  pc.image = pcImg;
  pc.fitImage = true;
  pc.width = 200;
  pc.height = 200;
  pcPopUp = pcHover;
  if (skyTheme) {
    pcPopUp = pcHover;
  } else {
    pcPopUp = pcHoverNight;
  }
  pc.onHover = function() {
    pc.imageScale = 1.2;
    image(pcPopUp, 0, 0);
  }
  pc.onPress = function() {
    pcPopUp = pcClick;
    pcDiscovery = true;
  }
  pc.onOutside = function(){
    pc.imageScale = 1.0;
    pcPopUp = pcHover;
  }

  origamiStar = new Clickable();
  origamiStar.locate(350, 200);
  origamiStar.color = '#d9d1a000';
  origamiStar.text = "";
  origamiStar.strokeWeight = 0;
  origamiStar.image = origamiStarImg;
  origamiStar.fitImage = true;
  origamiStar.width = 50;
  origamiStar.height = 50;
  origamiStarPopUp = origamiStarHover;
  if (skyTheme) {
    origamiStarPopUp = origamiStarHover;
  } else {
    origamiStarPopUp = origamiStarHoverNight;
  }
  origamiStar.onHover = function() {
    origamiStar.imageScale = 1.2;
    image(origamiStarPopUp, 0, 0);
  }
  origamiStar.onPress = function() {
    origamiStarPopUp = origamiStarClick;
    origamiStarDiscovery = true;
  }
  origamiStar.onOutside = function() {
    origamiStar.imageScale = 1.0;
    origamiStarPopUp = origamiStarHover;
  }

  gameOver = new Clickable();
  gameOver.locate(230, 200);
  gameOver.color = '#d9d1a000';
  gameOver.text = "";
  gameOver.strokeWeight = 0;
  gameOver.image = viewResultsImg;
  gameOver.fitImage = true;
  gameOver.width = 235;
  gameOver.height = 30;
  gameOver.onHover = function() {
    gameOver.image = viewResultsImg2;
    gameOver.imageScale = 1.2;
  }
  gameOver.onPress = function() {
    gameState = 'endScreen';
  }
  gameOver.onOutside = function() {
    gameOver.image = viewResultsImg;
    gameOver.imageScale = 1.0;
  }

  playAgain = new Clickable();
  playAgain.locate(180, 340);
  playAgain.locate(250, 340);
  playAgain.color = '#d9d1a000';
  playAgain.text = "";
  playAgain.strokeWeight = 0;
  playAgain.image = playAgainImg;
  playAgain.fitImage = true;
  playAgain.width = 140;
  playAgain.height = 30;
  playAgain.onHover = function() {
    playAgain.image = playAgainImg2;
    playAgain.imageScale = 1.2;
  }
  playAgain.onPress = function() {
    gameState = 'title';
    cardsDiscovery = false;
    cootieDiscovery = false;
    dsiDiscovery = false;
    glCandyDiscovery = false;
    lpsDiscovery = false;
    lycheeDiscovery = false;
    origamiStarDiscovery = false;
    pcDiscovery = false;
  }
  playAgain.onOutside = function() {
    playAgain.image = playAgainImg;
    playAgain.imageScale = 1.0;
  }
}

function draw() {
  if (skyTheme) {
    image(skyDayImg, 0, 0);
    background(bg);
    image(skyDayLightImg, 0, 0);
  } else {
    image(skyNightImg, 0, 0);
    image(skyNightMoon, 0, 0);
    background(skyNightDesk1Img);
    image(skyNightLightImg, 0, 0);
  }

  //program wireframe
  switch (gameState) {
    case 'title':
      titleScreen();
      break;
    case 'skySelection':
      skySelectionScreen();
      break;
    case 'instruction':
      instructionScreen(); //function
      break;
    case 'mainGame':
      mainScreen();
      break;
    case 'mainGameExpand':
      mainGameExpand();
      break;
    case 'gameOver':
      gameOverScreen();
      break;
    case 'endScreen':
      endScreen();
      break;
  }
}


function titleScreen() {
  background(titleImg);
  image(lightingImg, 0, 0);
  start.draw();
  // titleStarArchive[].display();
  // titleStarArchive[].move();
}

function skySelectionScreen() {
  image(cornerImg, 0, 0);
  image(skySelectionImg, 0, 0);
  daySelection.draw();
  nightSelection.draw();
  nextSky.draw();

  if (skyTheme) {
    start.image = pcImg;
    nextSky.image = lycheeImg;
    next.image = cootieImg;
    exit.image = cardsImg;
    up.image = dsiImg;
    down.image = glCandyImg;
    gameOver.image = lpsImg;
    playAgain.image = origamiStarImg;
  } else {
    start.image = pcImg;
    nextSky.image = lycheeImg;
    next.image = cootieImg;
    exit.image = cardsImg;
    up.image = dsiImg;
    down.image = glCandyImg;
    gameOver.image = lpsImg;
    playAgain.image = origamiStarImg;
  }
}

function instructionScreen() {
  image(lightingImg, 0, 0);
  image(cornerImg, 0, 0);
  image(howToPlay, 0, 0);
  textSize(18);
  text("Welcome to Star Archive! Explore my desk area to take a walk down memory lane of what it is like growing up in the early 2000's in Southern California. Hover over objects to see what they are and click on them to read about there significance. Most importantly, have fun exploring >o<", 25, 135, 625, 400);
  next.draw();
  exit.draw();
}

function mainScreen() {
  if (skyTheme) {
    pc.image = pcImg;
    lycheeJelly.image = lycheeImg;
    cootieCatcher.image = cootieImg;
    cards.image = cardsImg;
    dsi.image = dsiImg;
    goodLuckCandy.image = glCandyImg;
    lps.image = lpsImg;
    origamiStar.image = origamiStarImg;
  } else {
    pc.image = pcNightImg;
    lycheeJelly.image = lycheeNightImg;
    cootieCatcher.image = cootieNightImg;
    cards.image = cardsNightImg;
    dsi.image = dsiNightImg;
    goodLuckCandy.image = glCandyNightImg;
    lps.image = lpsNightImg;
    origamiStar.image = origamiStarNightImg;
  }

  pc.draw();
  lycheeJelly.draw();
  cootieCatcher.draw();
  cards.draw();
  dsi.draw();
  goodLuckCandy.draw();
  lps.draw();
  origamiStar.draw();
  down.draw();
  image(lightingImg, 0, 0);
  image(cornerImg, 0, 0);

  if (frameCount > timeFrame) {
    gameState = 'gameOver';
  }
}

function mainGameExpand() {
if (skyTheme) {
  background(bg2);
} else {
  background(skyNightDesk2Img);
}

  up.draw();
  image(cornerImg, 0, 0);

  if (frameCount > timeFrame) {
    gameState = 'gameOver';
  }

  if (skyTheme) {
    image(skyDayLight2Img, 0, 0);
  } else {
    image(skyNightLight2Img, 0, 0);
  }
}

function gameOverScreen() {
  image(lightingImg, 0, 0);
  image(cornerImg, 0, 0);
  image(gameOverScreenImg, 0, 0);
  // image(gameOverImg, 250, 150);
  gameOver.draw();
}

function endScreen() {
  image(lightingImg, 0, 0);
  image(cornerImg, 0, 0);
  image(endResultImg, 0, 0);
  playAgain.draw();
  // about.draw();
  if (skyTheme) {
    cardsResultsDisplay = cardsResults;
    cootieResultsDisplay = cootieResults;
    dsiResultsDisplay = dsiResults;
    glCandyResultsDisplay = glCandyResults;
    lockedResultsDisplay = lockedResults;
    lpsResultsDisplay = lpsResults;
    lycheeResultsDisplay = lycheeResults;
    origamiStarResultsDisplay = origamiStarResults;
    pcResultsDisplay = pcResults;
  } else {
    cardsResultsDisplay = cardsResultsNight;
    cootieResultsDisplay = cootieResultsNight;
    dsiResultsDisplay = dsiResultsNight;
    glCandyResultsDisplay = glCandyResultsNight;
    lockedResultsDisplay = lockedResultsNight;
    lpsResultsDisplay = lpsResultsNight;
    lycheeResultsDisplay = lycheeResultsNight;
    origamiStarResultsDisplay = origamiStarResultsNight;
    pcResultsDisplay = pcResultsNight;
  }

  if (cardsDiscovery) {
    image(cardsResultsDisplay, 200, 140);
  } else {
    image(lockedResultsDisplay, 200, 140);
  }

  if (cootieDiscovery) {
    image(cootieResultsDisplay, 260, 140);
  } else {
    image(lockedResultsDisplay, 260, 140);
  }

  if (dsiDiscovery) {
    image(dsiResultsDisplay, 320, 140);
  } else {
    image(lockedResultsDisplay, 320, 140);
  }

  if (glCandyDiscovery) {
    image(glCandyResultsDisplay, 380, 140);
  } else {
    image(lockedResultsDisplay, 380, 140);
  }

  if (lpsDiscovery) {
    image(lpsResultsDisplay, 200, 230);
  } else {
    image(lockedResultsDisplay, 200, 230);
  }

    if (lycheeDiscovery) {
      image(lycheeResultsDisplay, 320, 230);
    } else {
      image(lockedResultsDisplay, 320, 230);
    }

  if (origamiStarDiscovery) {
    image(origamiStarResultsDisplay, 260, 230);
  } else {
    image(lockedResultsDisplay, 260, 230);
  }

  if (pcDiscovery) {
    image(pcResultsDisplay, 380, 230);
  } else {
    image(lockedResultsDisplay, 380, 230);
  }
}
