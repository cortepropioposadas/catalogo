// === LÓGICA DE LA TIENDA (BLINDADA) ===

function generarFiltrosTematica() {
    const contenedor = document.getElementById('contenedor-filtros-tematica');
    
    contenedor.innerHTML = `
        <h3>Filtrar por Temática</h3>
        <label class="filter-option">
            <input type="radio" name="tematica" value="todas" checked onchange="aplicarFiltros()"> Todas
        </label>
    `;

    let tematicasUnicas = new Set();

    productos.forEach(prod => {
        if (Array.isArray(prod.tematica)) {
            prod.tematica.forEach(t => tematicasUnicas.add(t.toLowerCase().trim()));
        } else if (prod.tematica) {
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
        } else if (prod.tematica) {
            tematicaTexto = prod.tematica.toUpperCase();
        }

        // --- MAGIA CARRUSEL (A prueba de errores) ---
        let arrayFotos = [];
        if (Array.isArray(prod.imagenes)) arrayFotos = prod.imagenes;
        else if (Array.isArray(prod.imagen)) arrayFotos = prod.imagen;
        else if (prod.imagenes) arrayFotos = [prod.imagenes];
        else if (prod.imagen) arrayFotos = [prod.imagen];
        else arrayFotos = ["https://via.placeholder.com/400x400/d9d9d9/1a1a1a?text=Sin+Foto"];

        let slidesHTML = arrayFotos.map(imgSrc => `
            <div class="carousel-slide">
                <img src="${imgSrc}" alt="${prod.titulo}" loading="lazy" onclick="abrirModal('${imgSrc}')" style="cursor: zoom-in;">
            </div>
        `).join('');

        let botonesHTML = '';
        if (arrayFotos.length > 1) {
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
        // --- FIN MAGIA CARRUSEL ---

        // Protegemos el precio por si pones texto o un 0
        let precioMostrado = "";
        if (typeof prod.precioUnidad === 'number' && prod.precioUnidad > 0) {
            precioMostrado = `${prod.precioUnidad.toFixed(2).replace('.', ',')} € / ud`;
        } else {
            precioMostrado = "Consultar precio";
        }

        const tarjetaHTML = `
            <div class="card">
                ${carruselEstructura}
                <div class="card-body">
                    <span class="etiqueta-tematica">${tematicaTexto}</span>
                    <h3 class="card-title">${prod.titulo}</h3>
                    <p class="card-desc">${prod.descripcion}</p>
                    
                    <div class="card-detalles">
                        <strong>Material:</strong> ${prod.material}
                    </div>

                    <div class="precio-box">
                        <div>
                            <div class="precio-unidad">${precioMostrado}</div>
                            <div class="precio-pack">${prod.precioPack || ""}</div>
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

function moverCarrusel(evento, direccion) {
    evento.preventDefault(); 
    const boton = evento.target;
    const contenedor = boton.closest('.carousel-container');
    const track = contenedor.querySelector('.carousel-track');
    const anchoSlide = track.offsetWidth;
    track.scrollBy({ left: anchoSlide * direccion, behavior: 'smooth' });
}

function aplicarFiltros() {
    document.querySelectorAll('.filter-option').forEach(label => label.classList.remove('activa'));
    document.querySelectorAll('input[type="radio"]:checked').forEach(radio => radio.parentElement.classList.add('activa'));

    const tematicaSeleccionada = document.querySelector('input[name="tematica"]:checked').value;
    const precioSeleccionado = document.querySelector('input[name="precio"]:checked').value;

    let productosFiltrados = productos; 

    if (tematicaSeleccionada !== 'todas') {
        productosFiltrados = productosFiltrados.filter(p => {
            if (Array.isArray(p.tematica)) {
                return p.tematica.map(t => t.toLowerCase().trim()).includes(tematicaSeleccionada.toLowerCase());
            } else if (p.tematica) {
                return p.tematica.toLowerCase().trim() === tematicaSeleccionada.toLowerCase();
            }
            return false;
        });
    }

    if (precioSeleccionado !== 'todos') {
        productosFiltrados = productosFiltrados.filter(p => {
            if (typeof p.precioUnidad !== 'number') return false; // Ignora los que no tengan número
            if (precioSeleccionado === 'bajo') return p.precioUnidad < 5 && p.precioUnidad > 0;
            if (precioSeleccionado === 'medio') return p.precioUnidad >= 5 && p.precioUnidad <= 15;
            if (precioSeleccionado === 'alto') return p.precioUnidad > 15;
            return true;
        });
    }

    mostrarProductos(productosFiltrados);
}

// === FUNCIONES DEL MODAL (IMAGEN GRANDE) ===
function abrirModal(srcImagen) {
    const modal = document.getElementById('image-modal');
    const imagenModal = document.getElementById('modal-img');
    imagenModal.src = srcImagen;
    modal.classList.remove('modal-oculto');
    modal.classList.add('modal-visible');
}

function cerrarModal() {
    const modal = document.getElementById('image-modal');
    modal.classList.remove('modal-visible');
    modal.classList.add('modal-oculto');
}

window.onload = () => {
    generarFiltrosTematica(); 
    aplicarFiltros();
};
