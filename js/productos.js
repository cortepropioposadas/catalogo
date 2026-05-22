// === BASE DE DATOS DE CORTEPROPIO ===
// Añade aquí tus nuevos productos copiando la estructura.

const productos = [
    {
        id: 1,
        titulo: "Llavero Anime Criatura Eléctrica",
        precioUnidad: 3.50,
        precioPack: "Apartir de 10 unidades -5%",
        descripcion: "Llavero redondo con grabado inspirado en un popular personaje de anime y videojuegos. Diámetro de 5 cm. Incluye cadenita metálica lista para colgar.",
        material: "MDF lacado en blanco",
        tematica: ["llaveros", "friki"],
        imagenes: [
            "img/llaveroanime.jpg",
            "img/llaveroanime1.jpg"
        ]
    },
    {
        id: 2,
        titulo: "Abalorio cruz",
        precioUnidad: 1.50,
        precioPack: "Preguntar",
        descripcion: "Formas recortadas ideales para montar llaveros, pulseras o collares. Diseño personalizable: podemos fabricarlos en diferentes medidas y opciones de orificio. Tamaño aproximado: 3 cm.",
        material: "MDF",
        tematica: ["llaveros", "abalorios", "eventos"],
        imagenes: [
            "img/abaloriocruz.jpg",
            "img/abaloriocruzmariposa.jpg"
        ]
    },
    {
        id: 3,
        titulo: "Abalorio mariposa",
        precioUnidad: 1.50,
        precioPack: "Preguntar",
        descripcion: "Formas recortadas con delicado diseño de mariposa, ideales para montar llaveros, pulseras o collares. Totalmente personalizable: podemos fabricarlos en diferentes medidas y opciones de orificio. Tamaño aproximado: 3 cm de ancho por 2,5 cm de alto.",
        material: "MDF",
        tematica: ["llaveros", "abalorios"],
        imagenes: [
            "img/abaloriomariposa.jpg",
            "img/abaloriocruzmariposa.jpg"
        ]
    },
    {
        id: 4,
        titulo: "Bola de navidad personalizada",
        precioUnidad: 4.0,
        precioPack: "No aplica pack",
        descripcion: "Adorno de navidad personalizable con el nombre que elijas y un elegante diseño. Ideal para darle un toque único y especial a la decoración de tu árbol. Diámetro: 9 cm.",
        material: "MDF",
        tematica: "navidad",
        imagenes: [
            "img/bolanavidadpersonalizada2.jpg",
            "img/bolanavidadpersonalizada3.jpg"
        ]
    },
    {
        id: 5,
        titulo: "Imán recuerdo mi primera comunión",
        precioUnidad: 4.0,
        precioPack: "+10 unidades -5% y +20 unidades -10%",
        descripcion: "Imán de madera personalizado, ideal como detalle inolvidable para invitados. Incluye espacio tipo marco para la fotografía que elijas y grabado láser con el nombre y la fecha del evento. Altura: 9 cm.",
        material: "MDF",
        tematica: "eventos",
        imagen: "img/imancomunion.jpg"
    },
    {
        id: 6,
        titulo: "Letras decorativas",
        precioUnidad: 0,
        precioPack: "El precio depende del tamaño",
        descripcion: "Letras corpóreas de madera totalmente personalizadas. Tú eliges la tipografía y las medidas. Ideales para mesas dulces, bodas, comuniones o decoración infantil. Precios de referencia: 15 cm de alto aprox. 17€/ud. | 25 cm de alto aprox. 21€/ud.",
        material: "MDF",
        tematica: ["eventos", "decoración"],
        imagen: "img/letras.jpg"
    },
    {
        id: 7,
        titulo: "Llavero caballo",
        precioUnidad: 2.50,
        precioPack: "+10 unidades -5% y +20 unidades -10%",
        descripcion: "Llavero con diseño de silueta de caballo. Incluye cadenita metálica lista para colgar. Altura aproximada: 4 cm.",
        material: "MDF",
        tematica: "llaveros",
        imagen: "img/llaverocaballo.jpg"
    },
    {
        id: 8,
        titulo: "Llavero evento puzle",
        precioUnidad: 3.50,
        precioPack: "+10 unidades -5% y +20 unidades -10%",
        descripcion: "Llavero en forma de pieza de puzle. Grabado láser 100% personalizable con el nombre, fecha, hora o lugar del evento. Un recuerdo original y a medida para tus invitados. Tamaño aproximado: 3,5 cm. Incluye cadenita metálica lista para colgar.",
        material: "MDF",
        tematica: ["llaveros", "eventos"],
        imagenes: [
            "img/llaverobautizo.jpg",
            "img/llaverobautizo2.jpg"
        ]
    },
    {
        id: 9,
        titulo: "Nombre decorativo",
        precioUnidad: 8.00,
        precioPack: "No disponible",
        descripcion: "Nombre decorativo de madera, perfecto para habitaciones infantiles, mesas dulces o eventos. Se entrega al natural, ideal para que puedas pintarlo o decorarlo a tu gusto. Tipografía y medidas 100% personalizables. Tamaño de referencia: 25 cm de largo.",
        material: "MDF",
        tematica: ["decoración", "eventos"],
        imagenes: [
            "img/nombre.jpg",
            "img/nombre1.jpg",
            "img/nombre2.jpg",
            "img/nombre3.jpg",
            "img/nombre4.jpg"
        ]
    },
    {
        id: 10,
        titulo: "Llavero cofrade personalizado",
        precioUnidad: 4.50,
        precioPack: "No disponible",
        descripcion: "Incluye el emblema o la imagen que elijas junto a tu nombre. Un detalle ideal para tu hermandad o agrupación. Las medidas finales pueden variar para adaptarse perfectamente al diseño solicitado. Incluye cadenita metálica lista para colgar.",
        material: "MDF",
        tematica: ["llaveros", "semana santa"],
        imagenes: [
            "img/llavaeroimagennombress1.jpg",
            "img/llavaeroimagennombress2.jpg",
            "img/llaveroimagen.jpg"
        ]
    },
    {
        id: 11,
        titulo: "Llavero evento circular",
        precioUnidad: 3.50,
        precioPack: "+10 unidades -5% y +20 unidades -10%",
        descripcion: "Llavero circular de madera, 100% personalizable mediante grabado láser con el nombre, fecha, hora o lugar de la celebración. Un recuerdo elegante y a medida para tus invitados. El modelo de la imagen tiene un diámetro aproximado de 4,5 cm. Incluye cadenita metálica lista para colgar.",
        material: "MDF",
        tematica: ["llaveros", "eventos"],
        imagenes: [
            "img/llaverocomunion1.jpg",
            "img/llaverocomunion2.jpg"
        ]
    },
    {
        id: 12,
        titulo: "Llavero empresa",
        precioUnidad: 4.00,
        precioPack: "+10 unidades -5% y +20 unidades -10%",
        descripcion: "Llavero con el logotipo de tu empresa o negocio mediante grabado láser. Un artículo ideal como merchandising, fidelización de clientes o regalo corporativo. El diseño y el corte se adaptan a la forma de tu marca. Tamaño de referencia: entre 4,5 y 5 cm.",
        material: "MDF",
        tematica: "llaveros",
        imagenes: [
            "img/llaveroempresa2.jpg",
            "img/llaveroempresa3.jpg",
            "img/llaveroempresa4.jpg",
            "img/llaveroempresa1.jpg",
            "img/llaveroempresa5.jpg",
        ]
    },
    {
        id: 13,
        titulo: "Llavero con nombre y forma",
        precioUnidad: 4.50,
        precioPack: "No disponible",
        descripcion: "Elige la silueta que más te guste (aficiones, piezas mecánicas, animales...) y añade el nombre o apellido que prefieras. Un detalle único, original y hecho totalmente a medida.",
        material: "MDF",
        tematica: "llaveros",
        imagen:"img/llaveronombreforma.jpg"
    },
    {
        id: 14,
        titulo: "Llavero nombre relieve",
        precioUnidad: 5.2,
        precioPack: "No disponible",
        descripcion: "Con efecto 3D. Tu nombre destacado en relieve sobre una base sólida. El tamaño aproximado es de 4,5 cm de largo, aunque variará ligeramente dependiendo de la cantidad de letras del nombre elegido.",
        material: "MDF",
        tematica: "llaveros",
        imagen:  "img/llaveronombrerelieve.jpg" 
    },
    {
        id: 15,
        titulo: "Llavero nombre simple",
        precioUnidad: 3.50,
        precioPack: "---",
        descripcion: "Un diseño clásico, ligero y perfecto para el día a día. El tamaño aproximado es de 5 cm de largo, adaptándose proporcionalmente según la cantidad de letras del nombre elegido.",
        material: "MDF",
        tematica: "llaveros",
        imagenes: [
            "img/llaveronombresimple.jpg",
            "img/llaveronombresimple1.jpg",
            "img/llaveronombresimple2.jpg",
            "img/llaveronombresimple3.jpg",
            "img/llaverosnombres.jpg",
            "img/llaverosnombresconjunto1.jpg"
        ]
    },
    {
        id: 16,
        titulo: "Llavero nombre simple",
        precioUnidad: 3.50,
        precioPack: "---",
        descripcion: "---tamaño unos 6cm, depende de las letras del nombre",
        material: "MDF lacado en blanco",
        tematica: "llaveros",
        imagenes: [
            "img/llaveronombresimpleblanco.jpg",
            "img/llaveronombresimpleblanco1.jpg",
            "img/llaveronombresimpleblanco2.jpg",
            "img/llaverosnombres.jpg",
            "img/llaverosnombresconjunto1.jpg"
        ]
    },
    {
        id: 17,
        titulo: "Llavero nombre simple",
        precioUnidad: 4.50,
        precioPack: "---",
        descripcion: "--- tamaño unos 4 cm, depende de las letras del nombre",
        material: "METACRILATO",
        tematica: "llaveros",
        imagenes: [
            "img/llaveronombresimplemetraquilato.jpg",
            "img/llaveronombresimplemetraquilato1.jpg"
        ]
    },
    {
        id: 18,
        titulo: "Llavero imagen",
        precioUnidad: 4.0,
        precioPack: "---",
        descripcion: "--- TAMAÑO UNOS 5CM",
        material: "---",
        tematica: "llaveros",
        imagen:  "img/llaverosemanasanta.jpg",
    },
    {
        id: 19,
        titulo: "Tablero ajedrez",
        precioUnidad: 8,
        precioPack: "---",
        descripcion: "---",
        material: "--- tamaño hay que medirlo. Las piezas consultar disponibilidad y precio.",
        tematica: "Juegos de mesa",
        imagenes: [
            "img/tableroajedez.jpg",
            "img/tableroajedez1.jpg"
        ]
    },
    {
        id: 20,        
        titulo: "Bola navidad personalizada",
        precioUnidad: 4.0,
        precioPack: "No aplica",
        descripcion: "--- TAMAÑO 9 CM",
        material: "---",
        tematica: "profesores",
        imagen: "img/bolanavidadpersonalizada.jpg"
    },
    {
        id: 21,
        titulo: "Boligrafos",
        precioUnidad: 1.80,
        precioPack: "Preguntar disponibilidad",
        descripcion: "Boligrafo personalizado, ya sea para comunión, boda, regalo de graduación...",
        material: "BAMBÚ, tinta aleatoria (posiblemente negra)",
        tematica: ["profesores", "Bautizo y comunión"],
         imagenes: [
            "img/boligrafobautizo.jpg",
            "img/boligrafobautizo1.jpg",
            "img/boligrafobautizo2.jpg",
            "img/boligrafocomunion.jpg",
            "img/boligrafocomunion1.jpg",
            "img/boligrafocomunion2.jpg",
            "img/boligrafocomunion3.jpg"
        ]
    },
    {
        id: 22,
        titulo: "Llaveros caras y fecha",
        precioUnidad: 0,
        precioPack: "Desde 4,5€ dependiendo de los detalles de la imagen.",
        descripcion: "Llaveros como detalle de comunión o bautizo.",
        material: "MDF lacado en blanco",
        tematica: ["Bautizo y comunión"],
        imagenes: [
            "img/llaveroscaras.jpg",
            "img/llaveroscaras1.jpg"
        ]
    },
    {
        id: 23,
        titulo: "Llavero imagen pintado a mano",
        precioUnidad: 6,
        precioPack: "más 10 unidades -5% y +20 unidades -10%",
        descripcion: "---",
        material: "MDF",
        tematica: "llaveros",
        imagen:  "img/llaveroimagencolor.jpg"
    },
    {
        id: 24,
        titulo: "Cuadro familia",
        precioUnidad: 35.5,
        precioPack: "Para más o menos miembros familiares consultar diseño.",
        descripcion: "---,Grabado y con marco de color negro o blanco a elección, tamaño 40x30 cm",
        material: "MDF",
        tematica: "decoración",
        imagen:  "img/cuadro.jpg"
    },
    {
        id: 25,
        titulo: "Abanico",
        precioUnidad: 0,
        precioPack: "---",
        descripcion: "---",
        material: "---",
        tematica: "Abanicos",
         imagenes: [
            "img/abanico1.jpg",
            "img/abanico2.jpg",
            "img/abanico3.jpg",
            "img/abanico4.jpg"
        ]
    }
];
