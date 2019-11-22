let distance;
let ran;

class Pipe {
  constructor(distance=0) {
    ran = () => {
      return floor(random(50, width/2-15));
    }
    
    
    this.x = bird.x + 100 + distance;
    this.y = 0;
    this.h = ran();
    this.w = 40;
  }
  
  show() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
    
    fill(255);
    rect(this.x, this.h + 50, this.w, height - (this.h + 50));
  }
}