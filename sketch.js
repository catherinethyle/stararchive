let gameState = 'title';
let font;
let cardsDiscovery = false;
let cootieDiscovery = false;
let dsiDiscovery = false;
let glCandyDiscovery = false;
let lpsDiscovery = false;
let lycheeDiscovery = false;
let origamiStarDiscovery = false;
let pcDiscovery = false;
let startTime = 0;
let timeInt = 1800;
let timeFrame;
// let titleStarArchive[];

function preload() {
  aboutImg = loadImage('img/about.png');
  aboutImg2 = loadImage('img/about2.png');
  aboutScreenImg = loadImage('img/aboutscreen.png');
  bg = loadImage('img/bg.png');
  bg2 = loadImage('img/bg2.png');
  blankHolder = loadImage('img/blank.png');
  cardsImg = loadImage('img/cards.png');
  cardsHover = loadImage('img/cardshover.png');
  cardsClick = loadImage('img/cardsclick.png');
  cardsResults = loadImage('img/cardsresults.png');
  cootieImg = loadImage('img/cootie.png');
  cootieHover = loadImage('img/cootiehover.png');
  cootieClick = loadImage('img/cootieclick.png');
  cootieResults = loadImage('img/cootieresults.png');
  cornerImg = loadImage('img/logo.png');
  downImg = loadImage('img/down.png');
  downImg2 = loadImage('img/down2.png');
  dsiImg = loadImage('img/dsi.png');
  dsiClick = loadImage('img/dsiclick.png');
  dsiHover = loadImage('img/dsihover.png');
  dsiResults = loadImage('img/dsiresults.png');
  endResultImg = loadImage('img/results.png');
  exitImg = loadImage('img/x.png');
  exitImg2 = loadImage('img/x2.png');
  font = loadFont('sourceCodeProSB.ttf');
  gameOverScreenImg = loadImage('img/gameoverscreen.png');
  gameOverImg = loadImage('img/gameover.png');
  gameOverImg2 = loadImage('img/gameover2.png');
  glCandyImg = loadImage('img/glcandy.png');
  glCandyClick = loadImage('img/glcandyclick.png');
  glCandyHover = loadImage('img/glcandyhover.png');
  glCandyResults = loadImage('img/glcandyresults.png');
  howToPlay = loadImage('img/instruction.png');
  lightingImg = loadImage('img/sunlight.png');
  lockedResults = loadImage('img/lockitem.png');
  lpsImg = loadImage('img/lps.png');
  lpsHover = loadImage('img/lpshover.png');
  lpsClick = loadImage('img/lpsclick.png');
  lpsResults = loadImage('img/lpsresults.png');
  lycheeImg = loadImage('img/lychee.png');
  lycheeHover = loadImage('img/lycheehover.png');
  lycheeClick = loadImage('img/lycheeclick.png');
  lycheeResults = loadImage('img/lycheeresults.png');
  nextImg = loadImage('img/next.png');
  nextImg2 = loadImage('img/next2.png');
  origamiStarImg = loadImage('img/luckystar.png');
  origamiStarHover = loadImage('img/luckystarhover.png');
  origamiStarClick = loadImage('img/luckystarclick.png');
  origamiStarResults = loadImage('img/luckystarresults.png')
  pcImg = loadImage('img/pc.png');
  pcHover = loadImage('img/pchover.png');
  pcClick = loadImage('img/pcclick.png');
  pcResults = loadImage('img/pcresults.png');
  playAgainImg = loadImage('img/playagain.png');
  playAgainImg2 = loadImage('img/playagain2.png');
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
  createCanvas(650, 400);
  frameRate(60); //set frameRate
  textFont(font);

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
    gameState = 'instruction';
  }
  start.onOutside = function() {
    start.imageScale = 1.0;
    start.image = startImg;
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
  cards.text = "";
  cards.strokeWeight = 0;
  cards.image = cardsImg;
  cards.fitImage = true;
  cards.width = 40;
  cards.height = 40;
  let cardsPopUp = cardsHover;
  cards.onHover = function() {
    cards.imageScale = 1.2;
    image(cardsPopUp, 75, 230); //125, 30
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
  cootieCatcher.onHover = function() {
    cootieCatcher.imageScale = 1.2;
    image(cootiePopUp, 325, 250);
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
  dsi.onHover = function() {
    dsi.imageScale = 1.2;
    image(dsiPopUp, 425, 200);
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
  goodLuckCandy.onHover = function() {
    goodLuckCandy.imageScale = 1.2;
    image(glCandyPopUp, 200, 220);
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
  lps.onHover = function() {
    lps.imageScale = 1.2;
    image(lpsPopUp, 250, 180);
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
  lycheeJelly.onHover = function() { //when on hover
    lycheeJelly.imageScale = 1.2;
    image(lycheePopUp, 80, 240);
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
  pc.onHover = function() {
    pc.imageScale = 1.2;
    image(pcPopUp, 430, 180);
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
  origamiStar.onHover = function() {
    origamiStar.imageScale = 1.2;
    image(origamiStarPopUp, 300, 175);
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

  about = new Clickable();
  about.locate(350, 340);
  about.color = '#d9d1a000';
  about.text = "";
  about.strokeWeight = 0;
  about.image = aboutImg;
  about.fitImage = true;
  about.width = 90;
  about.height = 30;
  about.onHover = function() {
    about.image = aboutImg2;
    about.imageScale = 1.2;
  }
  about.onPress = function() {
    gameState = 'aboutTheGame';
  }
  about.onOutside = function() {
    about.image = aboutImg;
    about.imageScale = 1.0;
  }
}

function draw() {
  background(bg);

  //program wireframe
  switch (gameState) {
    case 'title':
      titleScreen();
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
    case 'aboutTheGame':
      aboutScreen();
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
}

function instructionScreen() {
  image(lightingImg, 0, 0);
  image(cornerImg, 0, 0);
  image(howToPlay, 0, 0);
  next.draw();
  exit.draw();
}

function mainScreen() {
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
  image(bg2, 0, 0);
  up.draw();
  image(cornerImg, 0, 0);

  if (frameCount > timeFrame) {
    gameState = 'gameOver';
  }
}

function gameOverScreen() {
  image(lightingImg, 0, 0);
  image(cornerImg, 0, 0);
  image(gameOverScreenImg, 0, 0);
  // image(gameOverImg, 250, 150);
  gameOver.draw();
}

function aboutScreen() {
  image(lightingImg, 0, 0);
  image(cornerImg, 0, 0);
  image(aboutScreenImg, 0, 0);
  playAgain.draw();
  gameOver.draw();
}

function endScreen() {
  image(lightingImg, 0, 0);
  image(cornerImg, 0, 0);
  image(endResultImg, 0, 0);
  playAgain.draw();
  // about.draw();

  if (cardsDiscovery) {
    image(cardsResults, 200, 140);
  } else {
    image(lockedResults, 200, 140);
  }

  if (cootieDiscovery) {
    image(cootieResults, 260, 140);
  } else {
    image(lockedResults, 260, 140);
  }

  if (dsiDiscovery) {
    image(dsiResults, 320, 140);
  } else {
    image(lockedResults, 320, 140);
  }

  if (glCandyDiscovery) {
    image(glCandyResults, 380, 140);
  } else {
    image(lockedResults, 380, 140);
  }

  if (lpsDiscovery) {
    image(lpsResults, 200, 230);
  } else {
    image(lockedResults, 200, 230);
  }

  if (origamiStarDiscovery) {
    image(origamiStarResults, 260, 230);
  } else {
    image(lockedResults, 260, 230);
  }

  if (lycheeDiscovery) {
    image(lycheeResults, 320, 230);
  } else {
    image(lockedResults, 320, 230);
  }

  if (pcDiscovery) {
    image(pcResults, 380, 230);
  } else {
    image(lockedResults, 380, 230);
  }
}
