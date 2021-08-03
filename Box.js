/*
    1. Agregar contorno a las cajas más gruepo
    2. Pintar de un color distinto el contorno para diferenciar mejor
*/

class Box{ //Clase (plano) para crear las cajas que guardaran a los puerquitos
//PROPIEDADES de los objetos
    constructor(x, y, width, height){ //constructor para inicializar los objetos, recibe los parámetros del objeto pasados en sketch.js
    var options = {'restitution': 0.7, 'friction': 0.5, 'density': 1.0}
    // a) this.body = Bodies.rectangle(200,100,50,50, options);    //body de un rectangulo asignado a this.body
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
fill(0,150,0); //pintar de blanco el rectángulo
//strokeWeight(4);   //grosor del contorno
//stroke(184, 229, 3 );  //color del contorno
rect(0,0, this.width, this.height);
pop();    //vuelve a la configuración original cuando se dibuja el objeto
}
}

/*
Fricción:   https://www.youtube.com/watch?v=LIq1YBJdT3I
Densidad:   https://www.youtube.com/watch?v=pQ3OE5UKn9A
Traslación: https://www.youtube.com/watch?v=QW602kH52Ec
Rotación:   https://www.youtube.com/watch?v=kXwJOefEjJs
*/