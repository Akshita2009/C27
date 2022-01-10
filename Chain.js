class Chain{
    constructor(a,b)
    
{
var option = {
    bodyA :a,bodyB :b,stiffness:0.04
     
}
    this.chain=Constraint.create(option)
    World.add (world,this.chain)
}
display(){
    var pointA = this.chain.bodyA.position
    var pointB = this.chain.bodyB.position
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y)

}
}