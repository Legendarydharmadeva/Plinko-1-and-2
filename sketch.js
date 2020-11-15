
var divisionHeight;

var score = 0;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 
  particle = new Particle(random,20,20);
  ground = new Ground(400,790,800,10);
  division = new Divisions(random);
  
}

function draw() {
  background(255,255,255);  

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  if(particle.isTouching(division)){
    score = score+10;
  }

  for (var k = 0; k <=width; k = k + 80) { 
    divisions.push(new Divisions(k, height-divisionHeight/2 , divisionHeight)); } 

  for (var j = 0; j < particles.length; j++) { 
      particles[j].display(); 
      }

  for (var k = 0; k < divisions.length; k++) { 
      divisions[k].display(); 
      } 

  for(var j = 40; j <=width; j = j+50){
        plinkos.push(new Plinko(j,75));
      }

  for(var j = 15; j <=width-10; j = j+50){
        plinkos.push(new Plinko(j,175));
      }

      
  particle.display();
  ground.display();
  division.display();

  drawSprites();
}