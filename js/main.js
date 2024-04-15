// Arreglo para almacenar los productos en el carrito
let carrito = [];

// Función para realizar la compra
function realizarCompra() {
    // Aquí puedes agregar la lógica para procesar la compra
    alert('¡Gracias por tu compra! Ahora necesitamos tus datos');
    mostrarFormulario(); // Llamada a la función para mostrar el formulario después de la compra
}

// Función para mostrar el formulario después de realizar la compra
function mostrarFormulario() {
    document.getElementById('carrito').style.display = 'none';
    document.getElementById('formulario-compra').style.display = 'block';
}
/* BOTON DARK MODE */
const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

// Función del botón para activar el modo oscuro
function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
    actualizarTextoModo();
}

// Función del botón para desactivar el modo oscuro
function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
    actualizarTextoModo();
}

// Iniciar con el modo oscuro si está activado
if (darkMode === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}

// Función para cambiar el texto del botón según el modo
function actualizarTextoModo() {
    const botonColorMode = document.getElementById("color-mode");
    if (body.classList.contains("dark-mode")) {
        botonColorMode.textContent = "Claro";
    } else {
        botonColorMode.textContent = "Oscuro";
    }
}

// Lógica para activar/desactivar el modo oscuro al hacer clic en el botón
botonColorMode.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
});

// Esta función se ejecuta cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function () {
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

// Agregar un evento de escucha para el botón "Finalizar Compra"
document.getElementById('btn-finalizar-compra').addEventListener('click', function() {
    mostrarFormulario();
});