class Mango {
    constructor(x,y,options){
       var options = {
           isStatic: true,
           'restitution':0,
           'friction':1.0
        }
    this.body = Bodies.rectangle(x,y,30,68,options);
    World.add(world, this.body);
    }
    display(){
          push();
          translate(this.body.position.x, this.body.position.y);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width,this.height);
          pop();
        }
    }