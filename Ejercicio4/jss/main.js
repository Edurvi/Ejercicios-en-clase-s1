/*Creacion de clases*/
class persona {
  /*Toda instruccion contenedora va con llaves*/

  /*Es un metodo especial que crea e inicializa los atributos de la clase y se ejecuta
  al instaciar la clase */
  constructor(nombre, cedula, fecnacimiento, sexo, activo = true) {
    /*Parametros del constructor que guardan valores */
    /*Atributos de la clase (this)*/
    this.nombre = nombre;
    this._ruc = cedula; /*Atributo privado */
    this.nacimiento = fecnacimiento;
    this.sexo = sexo;
    this.activo = activo;
  }
  /*getter y setter se los pone a los atributos privados, el setter te pone el valor a un atributo privado y el getter para obtener 
  el valor de ese atributo, los atributos privados no pueden ser instaciados/referenciados fuera de la clase y para acceder se usa
  setter y getter */
  /*setter asigna un valor */
  set ruc(value) {
    this._ruc = value;
  }
  /*getter retorna el valor del atributo privado */
  get ruc() {
    return this._ruc;
  }
  /*Metodos */
  mostrar(msg = "datos de la persona") {
    console.log(msg); /*Muestra en pantalla */
    console.log(
      `${this.nombre} - ${this.ruc} - ${this.nacimiento} - ${this.sexo} - ${this.activo} `
    );
  }
  mostrarReturn() {
    return `${this.nombre} - ${this.ruc} - ${this.nacimiento} - ${this.sexo} - ${this.activo}`;
  }
  mostrarArreglo() {
    return [this.nombre, this.ruc, this.nacimiento, this.sexo, this.activo];
  }
  mostrarObjetos() {
    let nom = this.nombre,
      ced = this.cedula,
      nac = this.nacimiento,
      sex = this.sexo,
      act = this.activo;
    return { nom, ced, nac, sex, act };
  }
}
//Instanciar la clase y
//Declarar variables
/*Const se pone a objetos y clases | let a los enteros , booleanos , stream */
let fecha = new Date(2000, 8, 20); /*Forma de crear fechas */
/*Intaciamos la clase con const y instaciamos la clase persona */
/*Humano Es un objeto */
const humano1 = new persona(
  "Edgar",
  "0994689633",
  fecha,
  "Hombre"
); /*New es para instaciar la clase */
/*Trabajar con la clase humano */
humano1.mostrar();
const humano2 = new persona(
  "Nicole",
  "0994689633",
  new Date(2021, 5, 15),
  "Mujer",
  false
);
humano2.mostrar("Datos de nicole");

let cadena = humano2.mostrarReturn();
console.log("Mostrar return");
console.log(cadena);
console.log("Mostrar arreglo");
let arreglo = humano2.mostrarArreglo();
console.log(arreglo);
//destructuring de un arreglo
let [nombre, ced, nac, sex, act] = arreglo;
let fecNac = nac.toLocaleDateString();
console.table(nombre, ced, fecNac, sex, act);
console.log("mostrar objeto");
const datos = humano2.mostrarObjetos();
console.log(datos);
names = "nom";
console.log(datos.nom, datos["nom"], datos[names]);
// destructurign objeto
let { nom, ced: cedu, nac: naci, sex: sexo, act: activo } = datos;
console.warn(nom, cedu, naci, sexo, activo);
console.log("mostrar setter y getter de _ruc");
console.log(`Ruc: ${humano2.ruc}`);
humano2.ruc = "99999999";
console.log(`Ruc2: ${humano2.ruc}`);
let c = humano2.ruc;
console.log(`ruc2: ${c}`);
//Herencia
class estudiante extends persona {
  constructor(
    nombre,
    cedula,
    fecNacimiento,
    sexo,
    email,
    carreras,
    semestres,
    activo = true
  ) {
    //ejecuta el constructor de la clase base
    super(nombre, cedula, fecNacimiento, sexo, activo);
    // crea los nuevos atributos de la clase(estudiante)
    this.email = email;
    this.carrera = carrera;
    this.semestre = semestre;
  }
  edad() {
    let fechahoy = new Date();
    let hoy = new Date(
      fechahoy.getFullYear(),
      fechahoy.getMonth(),
      fechahoy.getDate()
    );
    let anio = hoy.getFullYear() - this.nacimiento.getFullYear();
    let mas =(hoy.getMonth(),hoy.getDate()) <(this.nacimiento.getMonth(),this.nacimiento.getDate()); 
    return anio+mas;
  }
  //Aplica polimorfismo al metodo de la clase base:mostrarretrun( )
  mostrarReturn() {
    return (
      /*El super sirve para llamar al constructor de la clase base como tambien a los metodos que quiero llamar */
      super.mostrarReturn() +
      "-" +
      this.email +
      "this.carrera" +
      "-" +
      this.semestre
    );
  }
}
//instaciar la clase estudiante
const est1 = new estudiante(
  "daniel",
  "0923480271",
  fecha,
  "m",
  "egui-vm@hotmail.com",
  "sistemas",
  8
);
est1.mostrar();
const est2 = new estudiante("ana@adsa.com", "sisetmas", 8);
est1.mostrar();
let estu = est1.mostrarReturn();
console.log(`edad:${est1.edad()}`);
