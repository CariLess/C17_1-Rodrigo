var cajita;

function setup() 
{
  createCanvas(400, 400);
  cajita = new Box(100,200,20,20,4);
}

function draw() 
{
  background(220);
  cajita.mostrar();
  cajita.moverX();
  
}

