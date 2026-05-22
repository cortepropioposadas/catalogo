// === BASE DE DATOS DE CORTEPROPIO ===
// Añade aquí tus nuevos productos copiando la estructura.

const productos = [
    {
        id: 1,
        titulo: "Llavero Anime Criatura Eléctrica",
        precioUnidad: 3.50,
        precioPack: "Apartir de 10 unidades -5%",
        descripcion: "Llavero redondo con grabado inspirado en un popular personaje de anime y videojuegos. Diámetro de 5 cm.",
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
        precioPack: "13,50€ (Pack de 10 unid.) [-10%]",
        descripcion: "Formas recortadas para llaveros, pulseras, collares... Podemos hacerlos en diferentes tipos de medidas y orificios. tamaño aprox 3cm, modificable",
        material: "MDF",
        tematica: ["llaveros", "abalorios", "Bautizo y comunión"],
        imagenes: [
            "img/abaloriocruz.jpg",
            "img/abaloriocruzmariposa.jpg"
        ]
    },
    {
        id: 3,
        titulo: "Abalorio mariposa",
        precioUnidad: 1.50,
        precioPack: "13,50€ (Pack de 10 unid.) [-10%]",
        descripcion: "Formas recortadas para llaveros, pulseras, collares... Podemos hacerlos en diferentes tipos de medidas y orificios.tamaño aprox 3cm ancho y 2,5 de alto, modificable",
        material: "---",
        tematica: ["llaveros", "abalorios"],
        imagenes: [
            "img/abaloriomariposa.jpg",
            "img/abaloriocruzmariposa.jpg"
        ]
    },
    {
        id: 4,
        titulo: "Bola navidad personalizada",
        precioUnidad: 4.0,
        precioPack: "No aplica pack",
        descripcion: "ideal para arbol, diametro 9cm",
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
        precioPack: "hasta 10 unidades -5% y +20 unidades -10%",
        descripcion: "Imán con 9cm de alto medidas, foto a elegir del niño.",
        material: "MDF",
        tematica: ["Bautizo y comunión"],
        imagen: "img/imancomunion.jpg"
    },
    {
        id: 6,
        titulo: "Letras decoración",
        precioUnidad: 0,
        precioPack: "El precio depende del tamaño",
        descripcion: "Letras con tipografia y medidas personalizadas. Por letra de 15 cm de alto aproximadamente 17€. Por letra de 25 cm de alto aproximadamente 21€.",
        material: "MDF",
        tematica: ["Bautizo y comunión", "decoraciones"],
        imagen: "img/letras.jpg"
    },
    {
        id: 7,
        titulo: "Llavero caballo",
        precioUnidad: 2.50,
        precioPack: "21,25€ (Pack de 10 unid.) [-15%]",
        descripcion: "Llavero silueta de un caballo, UNOS 4CM DE ALTO, incluye su cadenita pra colgar",
        material: "MDF",
        tematica: "llaveros",
        imagen: "img/llaverocaballo.jpg"
    },
    {
        id: 8,
        titulo: "Llavero evento puzle",
        precioUnidad: 3.50,
        precioPack: "hasta 10 unidades -5% y +20 unidades -10%",
        descripcion: "Llavero con los datos del niño, fecha, hora, lugar, personalizable al 100%. APROXIMADAMENTE 3,5 CM",
        material: "---",
        tematica: ["llaveros", "Bautizo y comunión"],
        imagenes: [
            "img/llaverobautizo.jpg",
            "img/llaverobautizo2.jpg"
        ]
    },
    {
        id: 9,
        titulo: "Nombre",
        precioUnidad: 8,
        precioPack: "No disponible",
        descripcion: "Nombre con las medidas 25 cm de largo, se puede pintar, tamaño personalizable y tipografia de letra tambien",
        material: "---",
        tematica: "decoraciones",
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
        titulo: "Llaveros con imagen y nombre",
        precioUnidad: 4.5,
        precioPack: "No disponible",
        descripcion: "Las medidas pueden variar en funcion de diseño a gusto.",
        material: "---",
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
        precioPack: "hasta 10 unidades -5% y +20 unidades -10%",
        descripcion: "Llavero con los datos del niño, fecha, hora, lugar, personalizable al 100%. el de la imagen tiene unos 4,5 cm de diametro.",
        material: "---",
        tematica: ["llaveros", "Bautizo y comunión"],
        imagenes: [
            "img/llaverocomunion1.jpg",
            "img/llaverocomunion2.jpg"
        ]
    },
    {
        id: 12,
        titulo: "Llavero empresa",
        precioUnidad: 4,
        precioPack: "Preguntar descuentos por cantidad",
        descripcion: "Llavero con el logo de la empresa. El tamaño depende del logo, aproximadamente 4,5-5 cm",
        material: "---",
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
        titulo: "Llavero nombre con forma",
        precioUnidad: 4.5,
        precioPack: "---",
        descripcion: "Llavero con el nombre / apellido, lo que quiera y la imagen / forma de lo que más le guste, personalizable al 100%",
        material: "---",
        tematica: "llaveros",
        imagen:"img/llaveronombreforma.jpg"
    },
    {
        id: 14,
        titulo: "Llavero nombre relieve",
        precioUnidad: 5,
        precioPack: "---",
        descripcion: "---. tamaño unos 4,5cm, depende de las letras del nombre",
        material: "---",
        tematica: "llaveros",
        imagen:  "img/llaveronombrerelieve.jpg" 
    },
    {
        id: 15,
        titulo: "Llavero nombre simple",
        precioUnidad: 3.50,
        precioPack: "---",
        descripcion: "--- tamaño unos 5cm, depende de las letras del nombre",
        material: "---",
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
