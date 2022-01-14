class Condiciones{
    constructor(tit="sin titulo"){ //recibe un parametro
        this.titulo=tit
    }
    condicion(){  //metodos son funciones que se escriben dentro de una clase
        let $code=document.getElementById("condicion")  
        $code.innerHTML = `
        var num = 8;

        if (num < 10) {
        console.log("El número es menor a 10");
        } else {
        if (num > 10) {
            console.log("El número es mayor a 10");  
        } else {
            console.log("El número es igual a 10");
        }
        }`;
    }
}

export default Condiciones