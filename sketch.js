const plane = Matter.Engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(400,400);

    
	engine = Engine.create();
	world = engine.world;
	
    Engine.run(engine);
	//Crie os Corpos Aqui.
  
   var plane_options={
	isStatic: true
   }

   var ground_options ={
	isStatic: true
  };

 ground = Bodies.rectangle(200,390,400,20,ground_options);
 World.add(world,ground);

    var block1_options ={
     restitution:9
    }
	var block1_options = {
	 restitution:0,
	 friction:0.02,
	 frictionAir:0   	
	}
	block1 = Bodies.circle(300,10,20,block1_options);
	World.add(world,block1); 
	
	

	var block2_options = {
		restitution:0.7,
		friction:0.02,
		frictionAir:0 	
    }
	
	block2 = Bodies.rectangle(110,280,10,10,block2_options);
	World.add(world,block2);

	var block3_options = {
		restitution:0,
		friction:0.02,
		frictionAir:0  	
	}
	
	block3 = Bodies.rectangle(350,110,10,10,block3_options);
	World.add(world,block3);

	
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);


  ellipse(block1.position.x,block1.position.y,30);
  rect(block2.position.x,block2.position.y,35,45);
  rect(block3.position.x,block3.position.y,90,20);
  rect(ground.position.x,ground.position.y,400,30);

  drawSprites();
 
}



