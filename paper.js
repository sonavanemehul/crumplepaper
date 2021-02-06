class paper 
{
constructor(x,y,r)
{
  
  var options ={
    isStatic: false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
  }
     
  

//this.radius = radius 
this.body=Bodies.circle(250,540,20,options);
this.width=33;
this.image= loadImage("paper.png");
World.add(world, this.body);

}

display()
{

 var pos=this.body.position;
var angle=this.body.angle;

push()
//translate(paperpos.x,paperpos.y);
 fill("white");
rotate(angle);
ellipseMode(CENTER);
ellipse(this.body.position.x,this.body.position.y,33,33);
pop()

//imageMode(RADIUS);
//image(this.image, pos.x , pos.y, 33, 33);




}
}