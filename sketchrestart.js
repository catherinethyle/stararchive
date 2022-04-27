// let gameState = 'mainGame';
let gameState = 'title';
let font;

function preload() {
  bg = loadImage('img/bg.png');
  cardsImg = loadImage('img/cards.png');
  cardsHover = loadImage('img/cardshover.png');
  cardsClick = loadImage('img/cardsclick.png');
  cootieImg = loadImage('img/cootie.png');
  cootieHover = loadImage('img/cootiehover.png');
  cootieClick = loadImage('img/cootieclick.png');
  cornerImg = loadImage('img/logo.png');
  dsiImg = loadImage('img/dsi.png');
  dsiClick = loadImage('img/dsiclick.png');
  dsiHover = loadImage('img/dsihover.png');
  endResultImg = loadImage('img/results.png');
  exitImg = loadImage('img/x.png');
  font = loadFont('sourceCodeProSB.ttf');
  gameOverImg = loadImage('img/gameover.png');
  gameOverImg2 = loadImage('img/gameover2.png');
  glCandyImg = loadImage('img/glcandy.png');
  glCandyClick = loadImage('img/glcandyclick.png');
  glCandyHover = loadImage('img/glcandyhover.png');
  howToPlay = loadImage('img/instruction.png');
  lightingImg = loadImage('img/sunlight.png');
  lpsImg = loadImage('img/lps.png');
  lpsHover = loadImage('img/lpshover.png');
  lpsClick = loadImage('img/lpsclick.png');
  lycheeImg = loadImage('img/lychee.png');
  lycheeHover = loadImage('img/lycheehover.png');
  lycheeClick = loadImage('img/lycheeclick.png');
  nextImg = loadImage('img/next.png');
  nextImg2 = loadImage('img/next2.png');
  origamiStarImg = loadImage('img/luckystar.png');
  origamiStarHover = loadImage('img/luckystarhover.png');
  origamiStarClick = loadImage('img/luckystarclick.png');
  pcImg = loadImage('img/pc.png');
  pcHover = loadImage('img/pchover.png');
  pcClick = loadImage('img/pcclick.png');
  playAgainImg = loadImage('img/playagain.png');
  playAgainImg2 = loadImage('img/playagain2.png');
  startImg = loadImage('img/start.png');
  startImg2 = loadImage('img/start2.png');
  titleImg = loadImage('img/title.png');
}

function setup() {
  createCanvas(650, 400);
  frameRate(60); //set frameRate
  textFont(font);

  start = new Clickable();
  start.locate(525, 250);
  start.color = '#d9d1a0';
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
  next.color = '#d9d1a0';
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
  }
  next.onOutside = function() {
    next.imageScale = 1.0;
    next.image = nextImg;
  }

  exit = new Clickable();
  exit.locate(600, 25);
  exit.color = '#d9d1a0';
  exit.text = "";
  exit.strokeWeight = 0;
  exit.image = exitImg;
  exit.fitImage = true;
  exit.width = 30;
  exit.height = 30;
  exit.onHover = function() {
    exit.imageScale = 1.2;
  }
  exit.onPress = function() {
    gameState = 'mainGame';
  }
  exit.onOutside = function() {
    exit.imageScale = 1.0;
  }

  cards = new Clickable();
  cards.locate(200, 250);
  cards.color = '#d9d1a0';
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
  }
  cards.onOutside = function() {
    cards.imageScale = 1.0;
    cardsPopUp = cardsHover;
  }

  cootieCatcher = new Clickable();
  cootieCatcher.locate(300, 255);
  cootieCatcher.color = '#d9d1a0';
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
  }
  cootieCatcher.onOutside = function() {
    cootieCatcher.imageScale = 1.0;
    cootiePopUp = cootieHover;
  }

  dsi = new Clickable();
  dsi.locate(380, 220);
  dsi.color = '#d9d1a0';
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
  }
  dsi.onOutside = function() {
    dsi.imageScale = 1.0;
    dsiPopUp = dsiHover;
  }

  goodLuckCandy = new Clickable();
  goodLuckCandy.locate(245, 240);
  goodLuckCandy.color = '#d9d1a0';
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
  }
  goodLuckCandy.onOutside = function() {
    goodLuckCandy.imageScale = 1.0;
    glCandyPopUp = glCandyHover;
  }

  lps = new Clickable();
  lps.locate(275, 200);
  lps.color = '#d9d1a0';
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
  }
  lps.onOutside = function() {
    lpsPopUp = lpsHover;
    lps.imageScale = 1.0;
  }

  lycheeJelly = new Clickable();
  lycheeJelly.locate(145, 265);
  lycheeJelly.color = '#d9d1a0';
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
    // lycheeDiscovered = true;
  }
  lycheeJelly.onOutside = function() { //when outside button
    lycheeJelly.imageScale = 1.0;
    lycheePopUp = lycheeHover;
  }

  pc = new Clickable();
  pc.locate(475, 100);
  pc.color = '#d9d1a0';
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
  }
  pc.onOutside = function(){
    pc.imageScale = 1.0;
    pcPopUp = pcHover;
  }

  origamiStar = new Clickable();
  origamiStar.locate(350, 200);
  origamiStar.color = '#d9d1a0';
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
  }
  origamiStar.onOutside = function() {
    origamiStar.imageScale = 1.0;
    origamiStarPopUp = origamiStarHover;
  }

  gameOver = new Clickable();
  gameOver.locate(250, 200);
  gameOver.color = '#d9d1a0';
  gameOver.text = "";
  gameOver.strokeWeight = 0;
  gameOver.image = gameOverImg;
  gameOver.fitImage = true;
  gameOver.width = 175;
  gameOver.height = 30;
  gameOver.onHover = function() {
    gameOver.image = gameOverImg2;
    gameOver.imageScale = 1.2;
  }
  gameOver.onPress = function() {
    gameState = 'endScreen';
  }
  gameOver.onOutside = function() {
    gameOver.image = gameOverImg;
    gameOver.imageScale = 1.0;
  }

  playAgain = new Clickable();
  playAgain.locate(250, 340);
  playAgain.color = '#d9d1a0';
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
    gameState = 'instruction';
  }
  playAgain.onOutside = function() {
    playAgain.image = playAgainImg;
    playAgain.imageScale = 1.0;
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
    case 'gameOver':
      ;
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
  image(lightingImg, 0, 0);
  image(cornerImg, 0, 0);
  gameOver.draw();
}

function endScreen() {
  image(endResultImg, 0, 0);
  playAgain.draw();
}
