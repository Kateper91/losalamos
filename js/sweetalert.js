const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault
})
const capturar =() =>{
    function contacto (nombre, mail, telefono, mensaje){
        this.nombre=nombre;
        this.mail=mail;
        this.telefono=telefono;
        this.mensaje=mensaje;
    }
    const nombreCapturar = document.getElementById("nombre").value;
    const mailCapturar= document.getElementById("mail").value;
    const telefonoCapturar= document.getElementById("telefono").value;
    const mensajeCapturar =document.getElementById("mensaje").value;
    
    let nuevoContacto = new contacto (nombreCapturar,mailCapturar,telefonoCapturar,mensajeCapturar);
    agregar(nuevoContacto)
}


const baseDatos = [];
const agregar = (contacto) =>{
    baseDatos.push(contacto);
    localStorage.setItem('mensajeContacto', JSON.stringify(contacto));
    console.log(baseDatos);
    console.log(localStorage.getItem('mensajeContacto'));
}

let boton = document.getElementById('btn');
boton.addEventListener("click",()=>{
Swal.fire({
    title:"Mensaje Enviado",
    text:"Su mensaje fue enviado correctamente",
    icon:'success',
    backdrop: true,
    timer: 10000,
    allowOutsideClick: true,
    allowEscapeKey:true,
    allowEnterJey: true,
    stopKeydownPropagation: false,
})
})