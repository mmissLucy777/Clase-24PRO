class Log{//Clase Log para los troncos
//PROPIEDADES de los objetos
constructor(x,y,height,angle){  //constructor para inicializar los objetos, recibe parámetros x,y, alto y ángulo del tronco
    var options = { 'restitution': 0.1, 'friction': 1.0, 'density': 1.0}    //propiedades del motor físico (rebote, fricción y densidad)
    this.body  = Bodies.rectangle(x,y,20,height, options);   //rectángulo del objeto Bodies (recibe propiedades x,y, alto y opciones del motor físico. El ancho es fijo)
    this.width = 20;    //ancho fijo del rectángulo
    this.height = height;   //alto variable recibido de sketch
    Matter.Body.setAngle(this.body, angle); //asigna el angulo al cuerpo body rectanble
    World.add(world, this.body); //agrega body y mundo a nuestro Mundo
}//fin del constructor

//FUNCIONES de los objetos
display(){  //función para mostrar objetos en pantalla
    var pos = this.body.position;   //obtiene posiciones x,y del cuerpo y los guarda en pos
    var angle = this.body.angle;    //obtiene angulo del cuerpo y lo guarda en angle
    push(); //guarda los angulos de la posición original del objeto
    translate(pos.x, pos.y);    //realiza translacion del objeto en las posiciones x,y
    rotate(angle);  //genera rotación en el ángulo objetido del cuerpo
    rectMode(CENTER);   //coloca los ejes del rectángulo en el centro
    strokeWeight(4);  //asigna un grosor al contorno del objeto
    stroke(110, 44, 0);  //pinta de color café obscuro el controno
    fill(220, 118, 51); //rellena el cuadro de color café claro
    rect(0,0,this.width, this.height);   //crea un rectángulo 
    pop();  //regresa los angulos iniciales a los objetos

}//fin de display()
}//fin class Log