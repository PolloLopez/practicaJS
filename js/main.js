// para llamar correctamente la funcion despues hay que poner parentesis abierto y cerrado ()

// Arreglo para almacenar los productos en el carrito
let carrito = [];

// Esta función se ejecuta cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Aquí puedes comenzar a trabajar con el DOM

    // Ejemplo de manejo de eventos: Agregar un listener al botón de compra
    const botonesCompra = document.querySelectorAll('.botonTienda');
    botonesCompra.forEach(boton => {
        boton.addEventListener('click', function () {
            const producto = boton.parentElement;
            const nombreProducto = producto.querySelector('.producto').textContent;
            const precioProducto = parseFloat(producto.querySelector('.tiendaPrecio').textContent.replace('$', ''));
            agregarAlCarrito(nombreProducto, precioProducto);
        });
    });
});

// Función para agregar productos al carrito
function agregarAlCarrito(producto, precio) {
    // Creamos un objeto con la información del producto
    const nuevoProducto = {
        nombre: producto,
        precio: precio
    };

    // Agregamos el producto al carrito
    carrito.push(nuevoProducto);

    // Actualizamos la visualización del carrito
    mostrarCarrito();
}
// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Elimina el producto del arreglo de carrito
    mostrarCarrito(); // Actualiza la visualización del carrito
}


// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const elementoCarrito = document.createElement('li');
        elementoCarrito.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(elementoCarrito);
    });

    // Calculamos el total de la compra
    const total = carrito.reduce((total, producto) => total + producto.precio, 0);
    document.getElementById('total-carrito').textContent = total.toFixed(2);

    // Mostramos el carrito
    document.getElementById('carrito').style.display = 'block';
}

// Función para realizar la compra
function realizarCompra() {
    // Aquí puedes agregar la lógica para procesar la compra
    alert('Compra realizada con éxito! ¡Gracias por tu compra!');
    // Limpiamos el carrito después de realizar la compra
    carrito = [];
    mostrarCarrito();
}

/* BOTON DARK MODE */
const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");


// funcion del boton activar - desactivar dark-mode
function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
    actualizarTextoModo(); //llamo la funcion actualizar texto ??
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
    actualizarTextoModo(); //llamo la funcion actualizar texto ??
}

// para que iniciar como se cerro
if (darkMode === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}

//aca el boton llama a las funciones
botonColorMode.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})


//Función para cambiar el texto del botón según el modo
function actualizarTextoModo() {
    const botonColorMode = document.getElementById("color-mode");
    if (body.classList.contains("dark-mode")) {
        botonColorMode.textContent = "Claro";
    } else {
        botonColorMode.textContent = "Oscuro";
    }
}

//Lógica para activar/desactivar el modo oscuro
if (localStorage.getItem("dark-mode") === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}