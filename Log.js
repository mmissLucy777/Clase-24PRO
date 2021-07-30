//clase para los Logs (troncos)

class Log {
    //PROPIEDADES de los objetos
    constructor(x, y, height, angle){  //constructor para inicializar los objetos, recibiendo como argumentos x,y, ancho y el ángulo
        var options = {'restitution': 0.8, 'friction': 1.0, 'density': 1.0}    //propiedades de los bodies
        this.body = Bodies.rectangle(x, y,  20, height, options);    //crea un cuerpo del tipo rectangulo
        this.width = 20;    //ancho fijo a 20 pixeles
        this.height = height;   //ancho obtenido de los parámetros pasados en sketch
        Matter.Body.setAngle(this.body, angle); //establece el angulo del cuerpo al instante
        World.add(world, this.body);    //agrega el cuerpo al mundo
    }    
    //FUNCIONES de los objetos
    display(){  //función para mostrar los troncos en pantalla
        var pos = this.body.position;   //obtiene la posición del cuerpo y lo guarda en poss
        var angle = this.body.angle;    //obtiene el ángulo del cuerpo y lo guarda en angle
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);    //grosor del contorno
        stroke(108,52,131) //color del contorno
        fill(3,155,229);   //color del tronco
        rect(0,0, this.width, this.height);
        pop();
    }
}