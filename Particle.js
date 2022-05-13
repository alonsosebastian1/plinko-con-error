class Particle{
    constructor(x,y,radius){
        var options ={
            friction:0.1,
            
        }
      this.particles =Bodies.circle(x,y,10,options);
      this.radius = 10;
      World.add(world,this.particles);
      this.color=color(random(0, 255), random(0, 255), random (0, 255));
    }
    display(){
        //this.color=color(random(0, 255), random(0, 255), random (0, 255));
        ellipse(this.particles.position.x,this.particles.position.y,this.radius,this.radius);
    }
  
}