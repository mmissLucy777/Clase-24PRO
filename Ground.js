class Ground{   //clase (plano) para objetos tipo ground
    //PROPIEDADES de los objetos ground
    constructor(x, y, width, height){  //constructor que inicializa todos los objetos de la clase, recibiendo los valores de los parámetros pasados en el sketch.js
        var options = {isStatic: true}  //opciòn para dejar estático los objetos
        this.body = Bodies.rectangle(x, y, width, height, options); //objeto rectángulo guardado en this.body
        this.width = width;
        this.height = height;
        World.add(world, this.body);    //agrega this.body al mundo "world"
    }

    //FUNCIONES de los objetos ground
    display(){ //función para mostrar los objetos en pantalla
        var pos = this.body.position;   //objtiene las posiciones x,y del cuerpo y las guarda en la variable pos
        rectMode(CENTER);   //coloca las coordenadas el rectángulo al centro
        fill(199,63,0);  //cambiar a color café en RGB
        rect(pos.x, pos.y, this.width, this.height);    //crea un rectángulo y le pasa las propiedades creadas


    }
}