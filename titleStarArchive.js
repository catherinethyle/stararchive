class TitleStarArchive {
  constructor(xPos, yPos, scale) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.scale = scale;
  }

  dispay() {
    image(titleImg, this.xPos, this.yPos);
    scale(this.scale);
  }

  move() {

  }
}
