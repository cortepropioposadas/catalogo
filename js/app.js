// === BASE DE DATOS DE PRODUCTOS DE PRUEBA ===
// Aquí es donde meteremos tus productos reales más adelante.
const productos = [
    {
        id: 1,
        titulo: "Llavero Costalero Personalizado",
        precioUnidad: 3.50,
        precioPack: "30€ (Pack de 10 unid.)",
        descripcion: "Llavero detallado con silueta de costalero. Ideal para cuadrillas o hermandades.",
        material: "Madera DM 3mm",
        tematica: "semana-santa",
        imagen: "https://via.placeholder.com/400x400/d9d9d9/1a1a1a?text=Foto+Llavero"
    },
    {
        id: 2,
        titulo: "Marca Sitios Boda Elegance",
        precioUnidad: 1.20,
        precioPack: "50€ (Pack de 50 unid.)",
        descripcion: "Nombres recortados en acrílico para colocar en los platos de los invitados.",
        material: "Metacrilato espejo (Varios colores)",
        tematica: "bodas",
        imagen: "https://via.placeholder.com/400x400/d9d9d9/1a1a1a?text=Foto+Marcasitios"
    },
    {
        id: 3,
        titulo: "Placa 'Gracias Profe'",
        precioUnidad: 18.00,
        precioPack: "No aplica",
        descripcion: "Placa conmemorativa de gran tamaño con los nombres de todos los alumnos grabados.",
        material: "Madera de pino + Metacrilato",
        tematica: "profesores",
        imagen: "https://via.placeholder.com/400x400/d9d9d9/1a1a1a?text=Foto+Placa+Profe"
    }
];

// Función para renderizar los productos en la web
function mostrarProductos(listaProductos) {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = ''; // Limpiamos antes de mostrar

    if(listaProductos.length === 0) {
        contenedor.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem;">No hay productos que coincidan con estos filtros.</p>';
        return;
    }

    listaProductos.forEach(prod => {
        // Preparamos el mensaje para el DM de Instagram
        const mensajeDM = encodeURIComponent(`¡Hola! Me interesa el producto: ${prod.titulo}. ¿Podéis darme más info?`);
        
        // Formateamos la temática para que se lea bonita
        const tematicaTexto = prod.tematica.replace('-', ' ').toUpperCase();

        const tarjetaHTML = `
            <div class="card">
                <img src="${prod.imagen}" alt="${prod.titulo}" class="card-img">
                <div class="card-body">
                    <span class="etiqueta-tematica">${tematicaTexto}</span>
                    <h3 class="card-title">${prod.titulo}</h3>
                    <p class="card-desc">${prod.descripcion}</p>
                    
                    <div class="card-detalles">
                        <strong>Material:</strong> ${prod.material}
                    </div>

                    <div class="precio-box">
                        <div>
                            <div class="precio-unidad">${prod.precioUnidad.toFixed(2).replace('.', ',')} € / ud</div>
                            <div class="precio-pack">${prod.precioPack}</div>
                        </div>
                    </div>
                    
                    <a href="https://ig.me/m/cortepropio?text=${mensajeDM}" target="_blank" class="btn-dm">
                        Consultar por DM
                    </a>
                </div>
            </div>
        `;
        contenedor.innerHTML += tarjetaHTML;
    });
}

// Función que lee los filtros seleccionados y actualiza la vista
function aplicarFiltros() {
    const tematicaSeleccionada = document.querySelector('input[name="tematica"]:checked').value;
    const precioSeleccionado = document.querySelector('input[name="precio"]:checked').value;

    let productosFiltrados = productos;

    // Filtro por temática
    if (tematicaSeleccionada !== 'todas') {
        productosFiltrados = productosFiltrados.filter(p => p.tematica === tematicaSeleccionada);
    }

    // Filtro por precio
    if (precioSeleccionado !== 'todos') {
        productosFiltrados = productosFiltrados.filter(p => {
            if (precioSeleccionado === 'bajo') return p.precioUnidad < 5;
            if (precioSeleccionado === 'medio') return p.precioUnidad >= 5 && p.precioUnidad <= 15;
            if (precioSeleccionado === 'alto') return p.precioUnidad > 15;
            return true;
        });
    }

    mostrarProductos(productosFiltrados);
}

// Al cargar la página, mostramos todos los productos inicialmente
window.onload = () => {
    mostrarProductos(productos);
};
