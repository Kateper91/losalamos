let stockProductos=[
    {id:1, nombre:"Tomate", cantidad: 1, precio:140, img:'./imagenes/tomate.jfif'},
    {id:2, nombre:"Lechuga", cantidad: 1, precio:200, img:'./imagenes/lechuga.jpg'},
    {id:3, nombre:"Limon", cantidad: 1, precio:100, img:'./imagenes/limon.webp'},
    {id:4, nombre:"Vacio", cantidad: 1, precio:500, img:'./imagenes/vacio.jpg'},
    {id:5, nombre:"Pollo", cantidad: 1, precio:750, img:'./imagenes/pollo.webp'},
    {id:6, nombre:"Asado", cantidad: 1, precio:550, img:'./imagenes/asado.jpg'},
    {id:7, nombre:"Coca Cola", cantidad: 1, precio:250, img:'./imagenes/coca-cola.webp'},
    {id:8, nombre:"Corona", cantidad: 1, precio:350, img:'./imagenes/corona.webp'},
]

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const precioTotal = document.getElementById('precioTotal');
const botonComprar = document.getElementById('comprar-carrito');
let carrito = []

document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('carrito')){
        carrito =JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', ()=>{
    carrito.length=0
    actualizarCarrito()
})
botonComprar.addEventListener('click',() =>{
    carrito.length=0;
    actualizarCarrito();
    Swal.fire({
        title:"Compra realizada",
        text:"Su compra fue realizada con exito, en minutos la recibira en la puerta de su casa",
        icon:'success',
        backdrop: true,
        timer: 10000,
        allowOutsideClick: true,
        allowEscapeKey:true,
        allowEnterJey: true,
        stopKeydownPropagation: false,
    })
})
stockProductos.forEach((producto) =>{
    const div = document.createElement('div');
    div.classList.add ('producto')
    div.innerHTML = `
    <img src= ${producto.img} alt="">
    <h3> ${producto.nombre} </h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class ="boton-agregar"> Agregar al carrito </button>
    `
    contenedorProductos.appendChild(div)
    const boton = document.getElementById (`agregar${producto.id}`)
    boton.addEventListener('click', ()=>{
        agregarCarrito(producto.id)
    })
});

const agregarCarrito = (prodId) =>{
    const cantidad= carrito.some(prod => prod.id === prodId)
    if(cantidad){
        const prod =carrito.map(prod =>{
            if (prod.id === prodId){
                prod.cantidad++

            }
        })
    }else{
    const item = stockProductos.find ((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
} 
actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
    console.log(carrito)
}
const actualizarCarrito = () =>{
    contenedorCarrito.innerHTML = "";

    carrito.forEach((prod)=>{
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML= `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id ="cantidad">${prod.cantidad}</p>
        <button onclick ="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div) 
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc,prod)=> acc + prod.cantidad * prod.precio, 0)

}
