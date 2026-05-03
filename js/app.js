const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="img-container">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="card-info">
                <h3>${producto.nombre}</h3>
                <span class="precio">${producto.precio}</span>
                <a href="${urlIG}" target="_blank" class="btn-comprar">Consultar disponibilidad</a>
            </div>
        `;
        grid.appendChild(card);
