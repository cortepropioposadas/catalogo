// Tu base de datos de productos
const productos = [
    {
        id: 1,
        nombre: "Llavero 'Profe, gracias por tanto'",
        categoria: "regalos",
        precio: "12,00 €",
        imagen: "ruta/a/tu/foto-profe.jpg", 
        descripcion: "Llavero en madera con mensaje personalizado."
    },
    {
        id: 2,
        nombre: "Llaveros Semana Santa",
        categoria: "eventos",
        precio: "8,50 €",
        imagen: "ruta/a/tu/foto-ss.jpg",
        descripcion: "Un detalle con alma y significado."
    },
    {
        id: 3,
        nombre: "Caja Regalo Papá + Brújula",
        categoria: "regalos",
        precio: "25,00 €",
        imagen: "ruta/a/tu/foto-papa.jpg",
        descripcion: "Caja de madera grabada con nombre."
    }
];

const grid = document.getElementById('grid-productos');

// Función para pintar los productos
function mostrarProductos(categoriaFiltrada) {
    grid.innerHTML = ''; // Limpiamos la pantalla
    
    const productosFiltrados = categoriaFiltrada === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === categoriaFiltrada);

    productosFiltrados.forEach(producto => {
        // Enlace al DM de Instagram con un texto predefinido 
        const mensaje = encodeURIComponent(`¡Hola! Me interesa el producto: ${producto.nombre} (${producto.precio}). ¿Me das más info?`);
        const urlIG = `https://ig.me/m/cortepropio`; // Enlace directo a mensajes (alternativa: https://instagram.com/cortepropio)

        cconst card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="card-overlay">
                <h3>${producto.nombre}</h3>
                <span class="precio">${producto.precio}</span>
                <a href="${urlIG}" target="_blank" class="btn-dm">Consultar por DM</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Lógica para los botones de filtros
function filtrar(categoria) {
    // Quitar la clase active de todos los botones
    document.querySelectorAll('.filtros button').forEach(btn => btn.classList.remove('active'));
    // Ponérsela al que hemos hecho clic
    event.target.classList.add('active');
    
    mostrarProductos(categoria);
}

// Mostrar todos los productos al cargar la página
mostrarProductos('todos');
