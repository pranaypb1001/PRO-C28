class Stone{
  constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.r = 20;
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos  = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      image(this.image, 0, 0, 60, 60);
      pop();
    }
}