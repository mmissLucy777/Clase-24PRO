class Box{ //Clase (plano) para crear las cajas que guardaran a los puerquitos
//PROPIEDADES de los objetos
    constructor(x, y, width, height){ //constructro para inicializar los objetos, recibe los parámetros del objeto pasados en sketch.js
    var options = {'restitution': 0.8, 'friction': 1.0, 'density': 1.0}
    this.body = Bodies.rectangle(x, y, width, height, options);  //le pasa los parámetros al bojeto rectágulo
    this.width = width;
    this.height = height;
    World.add(world, this.body);    //agrega el objeto this.body al mundo
}

//FUNCIONES de los objetos
display(){ //función para mostrar el objeto en pantalla
var pos = this.body.position; //obtener la posición del objeto y guardarlo en pos
var angle = this.body.angle;    //obtener el ángulo del objeto y guardarlo en angle
push(); //captura la nueva configuración con las posiciones y ángulo captados
translate(pos.x, pos.y); //probar que pasa comentando esta línea y dejando en rect(pos.x,pos.y, this.with, this.heigth) y comentando pop()
rotate(angle);
rectMode(CENTER);   //colocar las coordenadas del rectángulo al centro
fill(109,220,11);  //interior color verde en rgb
strokeWeight(4);    //grosor del contorno
stroke(244,244,17);    //color del contorno amarillo en rgb
rect(0,0, this.width, this.height);
pop();    //vuelve a la configuración original cuando se dibuja el objeto
}
}

/*

*/