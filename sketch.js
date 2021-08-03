/*PRO C24 <src = "Lucy.007">
  1. Crear controno de las cajas y darles un color distinto para distinguirlas (ancho y alto fijos)
  2. Crear clase Pig para los puerquitos y mostrar uno en pantalla (ancho y alto fijos)
  3. Crear clase Log para los troncos y mostrar uno en pantalla (considerar que los troncos pueden estar en distintos ángulos; ancho fijo)
  4. Aumentar el canvas a 1600 x 400
  5. Aumentar el tamaño del suelo
  6. Colocar las dos cajas y el puerquito 1 entre ellas
  7. Colocar un tronco encima de las dos cajas, a 90 grados (en radianes)
*/
 
const Engine = Matter.Engine;  //Constante Engine, crea el motor físico
const World = Matter.World;   //Constante World, crea el mundo físico
const Bodies = Matter.Bodies; //Constante Bodies, crea los bojetos físicos que habitan el mundo

var engine, world;
//var box1, box2, box3, box4, box5; //variables para las cajas
var ground; //variable para el piso
//var pig1, pig2;   //variables para los puerquitos
//var log1, log2,log3,log4;   //variables para los troncos
var box1, pig1;

function setup() {
    //a) var canvas = createCanvas(400,400);
    var canvas = createCanvas(1200,400);  
    engine = Engine.create(); //crea el motor físico y lo guarda en la variable engine
    world = engine.world; //crea un "mundo" utilizando el motor físico y lo guarda en la variable world

    ground = new Ground(600,height,1200,20);  //pasa los valores de los parametros al constructor para el ground
    //a) box1 = new Box(200,100,50,50);    //pasa los valores de los parametros al constructor para la box1
    //a) box2 = new Box(300,100,50,50);  //hace que las cajas se caigan por separado reaccionando al rebote por colocarlas desfasadas
    //a) pig1 = new Pig(50,50); // crea un nuevo objeto de la clase Pig y le asigna los parámetros de x, y
    //a) log1 = new Log(100,300,100,90);   //crea el objeto log1 de la clase Log, para los parámetros (x,y,height y ángulo). Ángulo en grados
    box1 = new Box(700,320,70,70);  //crea la primer caja 
    box2 = new Box(920, 320, 70,70);    //crea la segunda caja
    pig1 = new Pig(800,350); //coloca el puerquito en medio de las dos cajas
    log1 = new Log(820,260,300,90); //crea el primer tronco y lo pone encima de las dos cajas a 90°, pasa los parámetros: x,y, height, ángulo
    //log1 = new Log(820,260,300,PI/2);

    box3 = new Box(700,100,70,70);
    box4 = new Box(920,100,70,70);
    pig2 = new Pig(750,220);

    log2 = new Log(810,50,300,90);
    //log2 = new Log(810,50,300,PI/2);
    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,150,45);
    log4 = new Log(870,120,150,135);
    //log3 = new Log(760,120,150,PI/7);
    //log4 = new Log(870,120,150,-PI/7);
    
}

function draw() {
    background(0);      //color del fondo
    Engine.update(engine);  //actualiza el motor físico para que se actualice regularmente
    //console.log("BOX1 ANGULO: ", log1.body.angle);
    //console.log("BOX2 ANGULO: ", log1.body.angle);
    //console.log("GROUND ANGULO: ", ground.body.angle);
    console.log("LOG1 ANGULO: ", log1.body.angle);
    ground.display(); //manda a llamar la función para mostrar ground
    box1.display(); //manda a lamar la función para mostrar box1
    box2.display(); //manda a llamar la función para mostrar box2
    pig1.display(); //manda a llamar la función para mostrar pig1
    log1.display(); //manda a llamar la función para mostrar log1
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}