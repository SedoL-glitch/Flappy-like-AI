class Bird {
  constructor() {
    this.x = 20;
    this.y = height/2;
    this.diameter = 20;
    this.velocity = 7;
    this.acceleration = 5;
  }
  
  show() {
    fill(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  
  border() {
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = 0+3;
    if (this.y < 0) this.y = 0+3;
    if (this.y > height) this.y = height-3;
  }
  
  move() {
    this.x += this.velocity;
  }
  
  up() {
    this.y -= this.velocity;
  }
  
  down() {
    this.y += this.velocity;
  }
  
  run(obj) {
    if (this.y < obj.h + 25) {
      this.y += this.acceleration;
    } else if (this.y > obj.h + 25) {
      this.y -= this.acceleration;
    } else {
      console.log('centered');
    }
  }
}
