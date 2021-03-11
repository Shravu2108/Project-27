class Paper{

	constructor(x,y,w,h){
	
		var options={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2

		}	
        
        this.body = Bodies.circle(x,y,20,options);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
			
		
	}
	display(){
	
        var position=this.body.position;		

			push()
			translate(this.body.position.x, this.body.position.y);
			ellipseMode(RADIUS);
			//strokeWeight(4);
			fill(128,128,128)
			ellipse(this.body.position.x,this.body.position.y,20,20);
			pop()
			
			
			
	}

}