class Pendulum{
    constructor(x,y,radius){
     
        var options = {
            isStatic:true
        }

        this.radius = radius;
        this.body = Bodies.circle(x,y,this,radius,options);
        World.add(world,this.body);

    }

    display(){
        ellipseMode(RADIUS);
        ellipse(x,y,this.radius);
    }
}