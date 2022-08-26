
document.getElementById('btn_socios').addEventListener("click", sesionSocios);
document.getElementById('btn_admin').addEventListener("click", sesionAdmin);

var formulario__socios = document.querySelector(".formulario__socios");
var formulario__admin = document.querySelector('.formulario__admin');
var contenedor__formulario = document.querySelector(".contenedor__formulario");
var fondo_login_socios = document.querySelector(".fondo_login_socios");
var fondo_login_admin = document.querySelector(".fondo_login_admin");

function sesionSocios(){
        formulario__socios.style.display ="block";
        contenedor__formulario.style.left="15px";
        formulario__admin.style.display="none";
        fondo_login_admin.style.opacity = "1";
        fondo_login_socios.style.opacity ="0";
}

function sesionAdmin(){
        formulario__admin.style.display="block";
        contenedor__formulario.style.left="400px";
        formulario__socios.style.display ="none";
        fondo_login_admin.style.opacity= "0";
        fondo_login_socios.style.opacity ="1";
}

let baseDatos = {
    user: "socios",
    pass: "socios",
    userAdmi: "admin",
    passAdmi: "admin",
}
const botonSocios = document.querySelector(".entrada-boton");
const botonAdmin = document.querySelector ("#ingresoAdmin");
const entradaUser = document.querySelector("#entrada-input-user");
const entradaAdmin = document.querySelector("#userAdmin");
const entradaPass = document.querySelector("#entrada-input-pass");
const passAdmin = document.querySelector("#passAdmin");
console.log(baseDatos)
botonSocios.addEventListener("click", () => {
    if (entradaUser.value === baseDatos.user && entradaPass.value === baseDatos.pass) {
        window.location.href = "./socios.html";
    } else {
        Swal.fire({
            title:"Error",
            text:"Contraseña o usuario incorrecto",
            icon:'error',
            backdrop: true,
            timer: 8000,
            allowOutsideClick: true,
            allowEscapeKey:true,
            allowEnterJey: true,
            stopKeydownPropagation: false,
        })
    }
})

botonAdmin.addEventListener("click", ()=>{
    if (entradaAdmin.value === baseDatos.userAdmi && passAdmin.value === baseDatos.passAdmi){
        window.location.href = "./admin.html";
    }else {
        Swal.fire({
            title:"Error",
            text:"Contraseña o usuario incorrecto",
            icon:'error',
            backdrop: true,
            timer: 8000,
            allowOutsideClick: true,
            allowEscapeKey:true,
            allowEnterJey: true,
            stopKeydownPropagation: false,

        })
    }
})


