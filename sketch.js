let myBallSpeed=4

// let ballsSpeed= 4

function setup() {
  createCanvas(400, 400); 
  myBall=new Ball();
      }

function draw() {
  background(255);
    myBall.update();
    myBall.display();
   
 }

  class Ball {
    constructor(height, width){
      this.x = 0;
      this.y = 200;
      this.diameter = 20;
    }

      update(){
        this.x = this.x +myBallSpeed
        // this.y = this.y + 10
        // this.diameter = this.diameter - 5
        if(this.x<0 || this.x>=width) {
   myBallSpeed=-myBallSpeed
  }
      }
      display(){
        ellipse(this.x, this.y, this.diameter,this.diameter);
        fill(0)
      }
  }