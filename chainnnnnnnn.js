class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bird.body,
            bodyB: constrl.body,
            stiffness:0.04,
            length:11
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain);
    }
    display(){
        var ww=this.chain.bodyA.position;
        var rr =this.chain.bodyB.position;
        strokeWeight(12);
        line(ww.x,ww.y,rr.x,rr.y);
    }
}