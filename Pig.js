//Clase para los objetos "puerquitos"

class Pig{
    //PROPIEDADES de los objetos
    constructor(x, y){   //recibe los parámetros de las posiciones x,y para cada puerquito
        var options = {'restitution': 0.8, 'friction': 0.3, 'density': 1.0} //opciones de los objetos: rebote, friccion y densidad
        this.body = Bodies.rectangle(x,y,50,50,options);    //rectangulo del Bodie guardado en this.body
        this.width = 50;    //ancho de los puerquitos   
        this.height = 50;   //alto de los puerquitos

        World.add(world, this.body); //agrega el objeto this.body al mundo World
    }

    //FUNCIONES de los objetos
    display(){  //función para mostrar los objetos en pantalla
        var pos = this.body.position;   //objtiene la propiedad de las posiciones x,y del body y los asigna a la variable pos
        var angle = this.body.angle;    //obtiene la propiesdad del ángulo del body y lo asigna a la variable angle
        push();     //capta y almacena las posiciones de x,y y del ángulo
        translate(pos.x, pos.y);    //traslación del objeto en las posiciones capturadas x,y
        rotate(angle);  //rota el ángulo
        rectMode(CENTER);   //coloca las coordenadas x,y en el centro del rectángulo
        strokeWeight(4);    //grosor del contorno
        stroke(255,0,0);    //color del contorno
        fill(249,70, 149);  //relleno de los puerquitos
        rect(0,0,this.width, this.height);
        pop();  //regresa a la configuración original de los objetos
    }
}