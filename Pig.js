/*
CLASE Pig, para definir los objetos que representarán los puerquitos del juego

*/

class Pig{
    //PROPIEDADES de los objetos
    constructor(x,y){  //inicialización de los objetos, reciben los parámetros de x,y provenientes de sketch.js
        var options = {'restitution': 0.8, 'friction': 0.3, 'density': 1.0 } //propiedades del motor de física a los objetos
        this.body=Bodies.rectangle(x,y,50,50, options);  //definición del objeto rectánguo de Bodies, de propiedades, x,y,with y heiht fijos, propiedades del motor
        this.width = 50;
        this.height = 50;
        
        World.add(world, this.body);  //agregar el mundo al cuerpo en nuestro Mundo
    }//Fin constructor

    //FUNCIONES de los objetos
    display(){  //función para mostrar en pantalla
        var pos= this.body.position;    //propiedad de posición al cuerpo, guardad en pos
        var angle = this.body.angle;    //propiedad de angulo al cuerpo, guardada en angle
        
        push(); //toma los ángulos del juego
        translate(pos.x, pos.y);
        rotate (angle); //rotar objeto en el ángulo definido arriba
        rectMode (CENTER);
        //strokeWeight(4); //grueso del contorno
        //stroke(250, 82, 179);   //color rosa fuerte del contorno
        fill(243, 13, 117); //color rosa a los puerquitos

        rect(0,0,this.width, this.height);   //dibujar un rectángulo
        pop();      //regresa los angulos iniciales a los objetos
    }//fin display
}//fin class