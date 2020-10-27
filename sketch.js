let myBall; 

// let ballsSpeed= 4

function setup() {
  createCanvas(400, 400); 
  myBall=new Ball();
      }

function draw() {
  background(200);
    myBall.update();
    myBall.display();
   
 }

  class Ball {
    constructor(height, width){
      this.x = 200;
      this.y = 200;
      this.diameter = random(0, 20);
    }

      update(){
        this.x = this.x - 10
        this.y = this.y + 100
        this.diameter = this.diameter - 5
        if(this.x>=width) {
    this.diameter=-0.96*this.diameter
  }
      }
      display(){
        ellipse(this.x, this.y, this.diameter);
      }
  }