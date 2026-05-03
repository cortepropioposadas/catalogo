// === LÓGICA DE LA TIENDA ===
// Este archivo ya no se toca cuando añadas productos nuevos.

// 1. Generar los filtros laterales dinámicamente
function generarFiltrosTematica() {
    const contenedor = document.getElementById('contenedor-filtros-tematica');
    
    // Reiniciamos el contenedor dejando solo el botón de "Todas"
    contenedor.innerHTML = `
        <h3>Filtrar por Temática</h3>
        <label class="filter-option">
            <input type="radio" name="tematica" value="todas" checked onchange="aplicarFiltros()"> Todas
        </label>
    `;

    let tematicasUnicas = new Set();

    productos.forEach(prod => {
        // ¿Es una lista [] o una palabra normal?
        if (Array.isArray(prod.tematica)) {
            prod.tematica.forEach(t => tematicasUnicas.add(t.toLowerCase().trim()));
        } else {
            tematicasUnicas.add(prod.tematica.toLowerCase().trim());
        }
    });

    let tematicasArray = Array.from(tematicasUnicas).sort();

    tematicasArray.forEach(tematica => {
        let nombreBonito = tematica.charAt(0).toUpperCase() + tematica.slice(1);
        let htmlFiltro = `
            <label class="filter-option">
                <input type="radio" name="tematica" value="${tematica}" onchange="aplicarFiltros()"> ${nombreBonito}
            </label>
        `;
        contenedor.innerHTML += htmlFiltro;
    });
}

// 2. Mostrar los productos en la cuadrícula (ACTUALIZADO PARA CARRUSEL)
function mostrarProductos(listaProductos) {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = ''; 

    if(listaProductos.length === 0) {
        contenedor.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem;">No hay productos que coincidan con estos filtros.</p>';
        return;
    }

    listaProductos.forEach(prod => {
        const mensajeDM = encodeURIComponent(`¡Hola! Me interesa el producto: ${prod.titulo}. ¿Podéis darme más info?`);
        
        let tematicaTexto = "";
        if (Array.isArray(prod.tematica)) {
            tematicaTexto = prod.tematica.join(' • ').toUpperCase();
        } else {
            tematicaTexto = prod.tematica.toUpperCase();
        }

        // --- LÓGICA DEL CARRUSEL ---
        // Soportar tanto la nueva lista "imagenes" como si olvidaste cambiarlo y dejaste "imagen"
        let arrayImagenes = prod.imagenes || [prod.imagen]; 
        
        // Crear las imágenes de HTML
        let slidesHTML = arrayImagenes.map(imgSrc => `
            <div class="carousel-slide">
                <img src="${imgSrc}" alt="${prod.titulo}" loading="lazy">
            </div>
        `).join('');

        // Poner flechas SOLO si hay más de 1 imagen
        let botonesHTML = '';
        if (arrayImagenes.length > 1) {
            botonesHTML = `
                <button class="carousel-btn prev" onclick="moverCarrusel(event, -1)">&#10094;</button>
                <button class="carousel-btn next" onclick="moverCarrusel(event, 1)">&#10095;</button>
            `;
        }

        let carruselEstructura = `
            <div class="carousel-container">
                <div class="carousel-track">
                    ${slidesHTML}
                </div>
                ${botonesHTML}
            </div>
        `;
        // --- FIN LÓGICA CARRUSEL ---

        const tarjetaHTML = `
            <div class="card">
                ${carruselEstructura} <!-- Insertamos el carrusel aquí -->
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
//FUNCIÓN: Hace que las flechas muevan las fotos
function moverCarrusel(evento, direccion) {
    evento.preventDefault(); // Evita que la web salte o haga cosas raras
    const boton = evento.target;
    const contenedor = boton.closest('.carousel-container');
    const track = contenedor.querySelector('.carousel-track');
    const anchoSlide = track.offsetWidth;
    
    track.scrollBy({ left: anchoSlide * direccion, behavior: 'smooth' });
}

// 3. Aplicar los filtros cuando el usuario hace clic
function aplicarFiltros() {
    const tematicaSeleccionada = document.querySelector('input[name="tematica"]:checked').value;
    const precioSeleccionado = document.querySelector('input[name="precio"]:checked').value;

    let productosFiltrados = productos; 

    // Filtrar temática (soportando listas y palabras sueltas)
    if (tematicaSeleccionada !== 'todas') {
        productosFiltrados = productosFiltrados.filter(p => {
            if (Array.isArray(p.tematica)) {
                // Si es lista, comprobamos si incluye la categoría elegida
                const tematicasMinuscula = p.tematica.map(t => t.toLowerCase().trim());
                return tematicasMinuscula.includes(tematicaSeleccionada.toLowerCase());
            } else {
                // Si es palabra sola, comprobamos si coincide exactamente
                return p.tematica.toLowerCase().trim() === tematicaSeleccionada.toLowerCase();
            }
        });
    }

    // Filtrar precio
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

// 4. Arranque inicial
window.onload = () => {
    generarFiltrosTematica(); 
    mostrarProductos(productos); 
};
