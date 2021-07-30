/*PRO C24 <src = "Lucy.007">
  1. Diseñar distintas clases para los diferentes objetos del juego: cerdos, cajas, troncos, suelo y ave
  2. Crear distintos objetos, usando las clases anteriores
  3. Aplicar los objetos en pantalla
  4. El objeto del ave, se moverá con el mouse
*/
 
const Engine = Matter.Engine;  //Constante Engine, crea el motor físico
const World = Matter.World;   //Constante World, crea el mundo físico
const Bodies = Matter.Bodies; //Constante Bodies, crea los bojetos físicos que habitan el mundo

var engine, world;
var box1; //variable para la primer y segunda cajas
var ground; //variable para el piso
var pig1;    //variable para el puerquito1

function setup() {
//a) var canvas = createCanvas(400,400);
var canvas = createCanvas(1200,400);
engine = Engine.create(); //crea el motor físico y lo guarda en la variable engine
world = engine.world; //crea un "mundo" utilizando el motor físico y lo guarda en la variable world

//a) box1 = new Box(300,50,50,50);    //pasa los valores de los parametros al constructor para la box1
//a) box1 = new Box(240,50,50,50);
//a) pig1 = new Pig(200,200);    //objeto pig1 de la clase Pig, pasando los argumentos para x,y de 200,200      
//a) ground = new Ground(200,380,400,20);  //pasa los valores de los parametros al constructor para el groun
//a) log1 = new Log(100,300,100,180); //objeto log1 de la clase Log, pasando argumentos para x,y, alto y ángulo (PI=180, PI/2=90, PI/4=45)

//Estructura para el escondite de los puerquitos
ground = new Ground(600,height,1200,20);
box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);  //hace que las cajas se caigan por separado reaccionando al rebote por colocarlas desfasadas
pig1 = new Pig(810,350);    //objeto pig1 de la clase Pig, pasando los argumentos para x,y de 200,200      
log1 = new Log(810,260,300,90);

box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
pig2 = new Pig(810,220);
log2 = new Log(810,180,300,90);

box5 = new Box(810,160,70,70);
log3 = new Log(760,120,150,45);
log4 = new Log(870,120,150,135);
}

function draw() {
background(0);  //da color al fondo del canvas
Engine.update(engine);  //actualiza el motor físico para que se actualice regularmente

box1.display(); //manda a lamar la función para mostrar box1
box2.display(); //manda a llamar la función para mostrar box2
ground.display(); //manda a llamar la función para mostrar ground
pig1.display(); //manda a llamar la función para mostrar pig1
log1.display(); //manda a llamar la función pra mostrar log1

box3.display();
box4.display();
pig2.display();
log2.display();

box5.display();
log3.display();
log4.display();
} 