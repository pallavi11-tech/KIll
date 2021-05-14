class Monster{
    constructor(x,y,r){
        var options={
            frictionAir:0.005,
            density:1
        }
        this.x=x;
		this.y=y;
		this.r=r;
        this.image = loadImage("Monster-01.png");
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
        
       // this.image = loadImage("images/Monster-01.png");
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill(255,0,255)
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r)
        pop()
    }
}