// === LÓGICA DE LA TIENDA ===
// Este archivo ya no se toca cuando añadas productos nuevos.

function mostrarProductos(listaProductos) {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = ''; 

    if(listaProductos.length === 0) {
        contenedor.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem;">No hay productos que coincidan con estos filtros.</p>';
        return;
    }

    listaProductos.forEach(prod => {
        const mensajeDM = encodeURIComponent(`¡Hola! Me interesa el producto: ${prod.titulo}. ¿Podéis darme más info?`);
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

function aplicarFiltros() {
    const tematicaSeleccionada = document.querySelector('input[name="tematica"]:checked').value;
    const precioSeleccionado = document.querySelector('input[name="precio"]:checked').value;

    let productosFiltrados = productos; 

    if (tematicaSeleccionada !== 'todas') {
        productosFiltrados = productosFiltrados.filter(p => p.tematica === tematicaSeleccionada);
    }

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

window.onload = () => {
    mostrarProductos(productos); 
};
