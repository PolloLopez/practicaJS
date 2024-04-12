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

    // Más código y funciones pueden ir aquí
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
const body = document.body;
const botonColorMode = document.getElementById("color-mode");

function activarDarkMode() {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    localStorage.setItem("dark-mode", "desactivado");
}


// Lógica para activar/desactivar el modo oscuro
if (localStorage.getItem("dark-mode") === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}


botonColorMode.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})