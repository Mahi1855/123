class Line{
    constructor(x,y,width,height){
        var linen = {
        isStatic:true
        }
      this.body = Bodies.rectangle(x,y,width,height,linen)
      this.width = width
      this.height = height
      World.add(world,this.body)
         this.image = loadImage("dustbingreen.png")
    }
    display(){
    

        image(this.image,900,500,150,200)
    }
}