// === BASE DE DATOS DE CORTEPROPIO ===
// Añade aquí tus nuevos productos copiando la estructura.

const productos = [
    {
        id: 1,
        titulo: "Llavero Pokémon",
        precioUnidad: 3.50,
        precioPack: "29,75€ (Pack de 10 unid.) [-15%]",
        descripcion: "Llavero con el logo y la figura de Pikachu ",
        material: "---",
        tematica: ["llaveros", "friki"],
        imagen: "img/llaveropokemon.jpg"
    },
    {
        id: 2,
        titulo: "Abalorio cruz",
        precioUnidad: 1.50,
        precioPack: "13,50€ (Pack de 10 unid.) [-10%]",
        descripcion: "Formas recortadas para llaveros, pulseras, collares... Podemos hacerlos en diferentes tipos de medidas y orificios.",
        material: "---",
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
        descripcion: "Formas recortadas para llaveros, pulseras, collares... Podemos hacerlos en diferentes tipos de medidas y orificios.",
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
        precioPack: "No aplica",
        descripcion: "Placa conmemorativa de gran tamaño con los nombres de todos los alumnos grabados.",
        material: "---",
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
        precioPack: "60€ (Pack de 20 unid.) [-25%]",
        descripcion: "Imán con --- medidas, foto a elegir del niño.",
        material: "---",
        tematica: ["Bautizo y comunión"],
        imagen: "img/imancomunion.jpg"
    },
    {
        id: 6,
        titulo: "Letras decoración",
        precioUnidad: 0,
        precioPack: "Precio depende del tamaño",
        descripcion: "Letras con tipografia y medidas personalizadas.",
        material: "---",
        tematica: ["Bautizo y comunión", "decoraciones"],
        imagen: "img/letras.jpg"
    },
    {
        id: 7,
        titulo: "Llavero caballo",
        precioUnidad: 2.50,
        precioPack: "21,25€ (Pack de 10 unid.) [-15%]",
        descripcion: "Llavero silueta de un caballo",
        material: "---",
        tematica: "llaveros",
        imagen: "img/llaverocaballo.jpg"
    },
    {
        id: 8,
        titulo: "Llavero evento puzle",
        precioUnidad: 3.50,
        precioPack: "52,50€ (Pack de 20 unid.) [-25%]",
        descripcion: "Llavero con los datos del niño, fecha, hora, lugar, personalizable al 100%",
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
        precioUnidad: 5,
        precioPack: "No disponible",
        descripcion: "Nombre con las medidas ---, se puede pintar",
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
        precioUnidad: 4,
        precioPack: "No disponible",
        descripcion: "---",
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
        precioPack: "---",
        descripcion: "Llavero con los datos del niño, fecha, hora, lugar, personalizable al 100%",
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
        precioUnidad: 3.50,
        precioPack: "---",
        descripcion: "Llavero con el logo de la empresa",
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
        precioUnidad: 4,
        precioPack: "---",
        descripcion: "Llavero con el nombre / apellido, lo que quiera y la imagen / forma de lo que más le guste, personalizable al 100%",
        material: "---",
        tematica: "llaveros",
        imagen:"img/llaveronombreforma.jpg"
    },
    {
        id: 14,
        titulo: "Llavero nombre relieve",
        precioUnidad: 3.50,
        precioPack: "---",
        descripcion: "---",
        material: "---",
        tematica: "llaveros",
        imagen:  "img/llaveronombrerelieve.jpg" 
    },
    {
        id: 15,
        titulo: "Llavero nombre simple",
        precioUnidad: 3.50,
        precioPack: "---",
        descripcion: "---",
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
        descripcion: "---",
        material: "---",
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
        precioUnidad: 3.50,
        precioPack: "---",
        descripcion: "---",
        material: "---",
        tematica: "llaveros",
        imagenes: [
            "img/llaveronombresimplemetraquilato.jpg",
            "img/llaveronombresimplemetraquilato1.jpg"
        ]
    },
    {
        id: 18,
        titulo: "Llavero imagen",
        precioUnidad: 3.50,
        precioPack: "---",
        descripcion: "---",
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
        material: "---",
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
        descripcion: "Placa conmemorativa de gran tamaño con los nombres de todos los alumnos grabados.",
        material: "---",
        tematica: "profesores",
        imagen: "img/bolanavidadpersonalizada.jpg"
    },
    {
        id: 21,
        titulo: "Boligrafos",
        precioUnidad: 0,
        precioPack: "No aplica",
        descripcion: "Boligrafo personalizado, ya sea para comunión, boda, regalo de graduación...",
        material: "---",
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
        titulo: "Llaveros caras",
        precioUnidad: 0,
        precioPack: "No aplica",
        descripcion: "Llaveros como detalle de comunión o bautizo.",
        material: "---",
        tematica: ["Bautizo y comunión"],
         imagenes: [
            "img/llaveroscaras.jpg",
            "img/llaveroscaras1.jpg"
        ]
    },
    {
        id: 23,
        titulo: "Llavero imagen pintado a mano",
        precioUnidad: 0,
        precioPack: "---",
        descripcion: "---",
        material: "---",
        tematica: "llaveros",
        imagen:  "img/llaveroimagencolor.jpg",
    },
    {
        id: 24,
        titulo: "Cuadro familia",
        precioUnidad: 0,
        precioPack: "---",
        descripcion: "---",
        material: "---",
        tematica: "decoración",
        imagen:  "img/cuadro.jpg",
    }
];
