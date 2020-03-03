var miHonda = {color: "rojo", ruedas: 4, motor: {cilindros: 4, tamanio: 2.2}};

console.log(Object.keys(miHonda));

console.log(Object.getOwnPropertyNames(miHonda));

function mostrarAutos() {
    var resultado = `Un bonito ${this.marca} ${this.modelo} ${this.annio}`;
    imprimir_con_estilo(resultado);
  }