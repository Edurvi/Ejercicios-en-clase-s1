  import { Persona,Estudiante,getEstudiante,valCedula } from "./clases.js "
  import condicion from './condiciones.js'
  import Bucle from './bucles.js'
  import Funciones from './funciones.js'
  import Colecciones from './colecciones.js'
  import Promesas from './promesas.js'
  
  /*Dar una alerta cuando se cargue el main*/
  document.addEventListener('DOMContentLoaded', (e) =>{
    //alert("Pagina cargada")
    // const $code=document.getElementById("clase")
    // console.log($code);
    // const $pre=document.querySelector(".js")
    // console.log($pre);
    // console.log(e.target);
    getEstudiante()
    const condicion1= new condicion() //llamar a la funcion
    condicion1.condicion()

    const bucle1= new Bucle()
    bucle1.bucle()

    const funcion1= new Funciones()
    funcion1.funcion()

    const coleccion1 = new Colecciones()
    coleccion1.coleccion()

    const promesa1 = new Promesas();
    promesa1.promesa()



  })
