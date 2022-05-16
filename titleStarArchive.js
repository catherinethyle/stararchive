class TitleStarArchive {
  constructor(xPos, yPos, scale, rotation) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.scale = scale;
    this.rotation = rotation;
    angleMode(DEGREES);
  }

  preload() {
    titleStarImg = loadImg('img/title.png');
  }

  dispay() {
    image(titleStarImg, this.xPos, this.yPos);
    scale(this.scale);
    rotation(this.rotation);
  }

  move() {
    if (this.rotation = 0) {
      this.rotation = 20;
    } else if (this.rotation > 20) {
      this.rotation = -20
    } else if (this.roation > -20) {
      this.rotation = 0
    }
  }
}
