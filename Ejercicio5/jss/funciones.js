class Funciones{
    constructor(tit="sin titulo"){ //recibe un parametro
        this.titulo=tit
    }
    funcion(){  //metodos son funciones que se escriben dentro de una clase
        let $code=document.getElementById("funcion")  
        $code.innerHTML = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec rhoncus libero sit amet ante laoreet tempor. Ut cursus 
        augue eget scelerisque sodales. Cras viverra leo elit, id facilisis
        nunc iaculis eu. Mauris interdum molestie placerat. Donec vehicula  
        mauris non elementum varius. Sed vitae venenatis orci.`;
    }
}

export default Funciones