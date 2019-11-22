let bird;
let pipe1;
let pipe2;
let ran1;
let ran2;
//let fr;

function setup() {
  createCanvas(400, 400);
  //fr = 30;
  //frameRate(fr);
  bird = new Bird();
  pipe1 = new Pipe();
  pipe2 = new Pipe(200);
  
}

function draw() {
  background(0);
  if (bird.x < pipe1.x) {
    bird.run(pipe1);
  } else if (bird.x > pipe1.x + pipe1.w) {
      bird.run(pipe2);
    }
  bird.show();
  bird.move();
  bird.border();
  if (bird.x < width-3) {
    pipe1.show();
    pipe2.show();
  } else if (bird.x >= width-3) {
    pipe1.h = floor(random(50, width/2-15));
    pipe1.show();
    pipe2.h = floor(random(50, width/2-15));
    pipe1.show();
  }
  console.log(bird.y);
}