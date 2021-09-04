class Slingshot{
constructor(b1,b2){
  var options={
  bodyA:b1,bodyB:b2,
  stiffness:0.1,length:2
  }
    this.chain=  Matter.Constraint.create(options)
    Matter.World.add(world,this.chain)
}
display(){
push ()
strokeWeight(1)
line (this.chain.bodyA.position.x,
    this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)

pop ()
}


}