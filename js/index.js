// repuesteanos disponibles
let repuestos = [
    { id: 1, nombre: 'Disco Re Duro', precio: 200000, descuento: 0 },
    { id: 2, nombre: 'Memoria RAM (Dory)', precio: 80000, descuento: 0 },
    { id: 3, nombre: 'Tarjeta Gráfica Full Realidad', precio: 500000, descuento: 10 },
    { id: 4, nombre: 'Procesador de sueños', precio: 350000, descuento: 15 },
    { id: 5, nombre: 'Fuente de Poder Noxiana', precio: 120000, descuento: 0 },
    { id: 6, nombre: 'Placa Madre (casi abuela)', precio: 150000, descuento: 5 },
    { id: 7, nombre: 'Monitor 72x2 Mhz', precio: 300000, descuento: 0 },
    { id: 8, nombre: 'Teclado de Pablito Lezcano', precio: 50000, descuento: 0 },
    { id: 9, nombre: 'Mouse Mickey', precio: 45000, descuento: 0 },
    { id: 10, nombre: 'Ventilador Liliana', precio: 75000, descuento: 0 }
];

let carrito = [];

// mostrar productiferos en la página
function mostrarProductos(productos = repuestos) {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = '';

    productos.forEach(repuesto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <h2>${repuesto.nombre}</h2>
            <p>Precio: $${repuesto.precio}</p>
            <p>Descuento: ${repuesto.descuento}%</p>
            <button onclick="agregarAlCarrito(${repuesto.id})">Agregar al Carrito</button>
        `;
        productosDiv.appendChild(productoDiv);
    });
}

// agregar al carrinho
function agregarAlCarrito(id) {
    const repuesto = repuestos.find(r => r.id === id);
    carrito.push(repuesto);
    alert(`${repuesto.nombre} naa con eso vuela el gta vice city!.`);
}

// eliminar un productifero del carrinho
function eliminarDelCarrito(id) {
    const index = carrito.findIndex(r => r.id === id);
    if (index !== -1) {
        const [repuesto] = carrito.splice(index, 1);
        alert(`${repuesto.nombre} eliminado pero arrepentirse es de cobardes!.`);
    } else {
        alert('No tenes eso.');
    }
}

// mostrar el carrinho y calcular la dolorosa
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert('Aun no llevas nada raton.');
        return;
    }

    let total = 0;
    let mensaje = 'Un carrito con tus sueños:\n';

    carrito.forEach((repuesto, index) => {
        const precioDescuento = repuesto.precio * (1 - repuesto.descuento / 100);
        total += precioDescuento;
        mensaje += `${index + 1}. ${repuesto.nombre} - Precio: $${precioDescuento.toFixed(2)}\n`;
    });

    mensaje += `\nLa dolorosa es: $${total.toFixed(2)}\n`;
    mensaje += '\n¿Queres eliminar algún producto del carrito? Ingresa el número del producto si sos cobarde o presiona cancelar para tomar la mejor decision de tu vida.';
    const respuesta = prompt(mensaje);

    if (respuesta !== null) {
        const numero = parseInt(respuesta);
        if (!isNaN(numero) && numero > 0 && numero <= carrito.length) {
            eliminarDelCarrito(carrito[numero - 1].id);
        } else {
            alert('No tenes nada en esa opcion.');
        }
    }
}

// filtrar por los nombres
function filtrarProductos() {
    const busqueda = document.getElementById('buscar').value.toLowerCase();
    const productosFiltrados = repuestos.filter(repuesto =>
        repuesto.nombre.toLowerCase().includes(busqueda)
    );
    mostrarProductos(productosFiltrados);
}

// Voila!
mostrarProductos();

