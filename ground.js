class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true
			//'restitution':0,
			//'friction':0,
			//'density':1			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("red")
			rect(0,0,this.w, this.h);
			pop()
			
	}

}