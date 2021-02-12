class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution: 1,
            friction:0.5,
            density:0.2
        }
        this.body = Bodies.circle(x,y,radius,options)
      this.radius = radius
      World.add(world,this.body)
      this.image = loadImage("Paper1.png")
    }
    display(){
        ellipseMode(CENTER)
        image(this.image,50,650,70,70)

    }
}