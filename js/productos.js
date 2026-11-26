// === BASE DE DATOS DE CORTEPROPIO ===
// Añade aquí tus nuevos productos copiando la estructura.

const productos = [
    {
        id: 1,
        titulo: "Llavero Anime Criatura Eléctrica",
        precioUnidad: 3.50,
        precioPack: " ",
        descripcion: "Llavero redondo con grabado inspirado en un popular personaje de anime y videojuegos. Diámetro de 5 cm. Incluye cadenita metálica lista para colgar.",
        material: "MDF lacado en blanco",
        tematica: ["llaveros", "friki"],
        imagenes: [
            "img/llaveroanime.jpg",
            "img/llaveroanime1.jpeg"
        ]
    },
    {
        id: 2,
        titulo: "Abalorio cruz",
        precioUnidad: 1.50,
        precioPack: " ",
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
        precioPack: " ",
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
        precioPack: " ",
        descripcion: "Adorno de navidad personalizable con el nombre que elijas y un elegante diseño. Ideal para darle un toque único y especial a la decoración de tu árbol. Diámetro: 9 cm.",
        material: "MDF",
        tematica: ["navidad"],
        imagenes: [
            "img/bolanavidadpersonalizada2.jpg",
            "img/bolanavidadpersonalizada3.jpg",
            "img/bolanavidadpersonalizada4.jpg"
        ]
    },
    {
        id: 5,
        titulo: "Imán recuerdo mi primera comunión",
        precioUnidad: 5.0,
        precioPack: "+10 unidades -5% y +20 unidades -10%",
        descripcion: "Imán de madera personalizado, ideal como detalle inolvidable para invitados. Incluye espacio tipo marco para la fotografía que elijas y grabado láser con el nombre y la fecha del evento. Altura: 9 cm.",
        material: "MDF",
        tematica: ["eventos"],
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
        precioPack: " ",
        descripcion: "Llavero con diseño de silueta de caballo. Incluye cadenita metálica lista para colgar. Altura aproximada: 4 cm.",
        material: "MDF",
        tematica: ["llaveros"],
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
            "img/llaverobautizo2.jpg"
        ]
    },
    {
        id: 9,
        titulo: "Nombre decorativo",
        precioUnidad: 8.00,
        precioPack: " ",
        descripcion: "Nombre decorativo de madera, perfecto para habitaciones infantiles, mesas dulces o eventos. Se entrega al natural, ideal para que puedas pintarlo o decorarlo a tu gusto. Tipografía y medidas 100% personalizables. Tamaño de referencia: 25 cm de largo.",
        material: "MDF",
        tematica: ["decoración", "eventos"],
        imagenes: [
            "img/nombre.jpg",
            "img/nombre1.jpg",
            "img/nombre2.jpg",
            "img/nombre3.jpg"
        ]
    },
    {
        id: 10,
        titulo: "Llavero cofrade personalizado",
        precioUnidad: 4.50,
        precioPack: " ",
        descripcion: "Incluye el emblema o la imagen que elijas junto a tu nombre. Un detalle ideal para tu hermandad o agrupación. Las medidas finales pueden variar para adaptarse perfectamente al diseño solicitado. Incluye cadenita metálica lista para colgar.",
        material: "MDF",
        tematica: ["llaveros", "semana santa"],
        imagenes: [
            "img/llavaeroimagennombress1.jpg",
            "img/llaverohermandad.jpg"
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
            "img/llaverocomunion2.jpg",
            "img/llaveroscomunion3.jpg"
        ]
    },
    {
        id: 12,
        titulo: "Llavero empresa",
        precioUnidad: 4.00,
        precioPack: "+10 unidades -5% y +20 unidades -10%",
        descripcion: "Llavero con el logotipo de tu empresa o negocio mediante grabado láser. Un artículo ideal como merchandising, fidelización de clientes o regalo corporativo. El diseño y el corte se adaptan a la forma de tu marca. Tamaño de referencia: entre 4,5 y 5 cm.",
        material: "MDF o MDF lacado en blanco",
        tematica: ["llaveros", "empresas"],
        imagenes: [
            "img/llaveroempresa2.jpg",
            "img/llaveroempresa3.jpg",
            "img/llaveroempresa4.jpg",
            "img/llaveroempresa1.jpg",
            "img/llaveroempresa5.jpg",
            "img/llaverosNombreEmpresa.jpeg"
        ]
    },
    {
        id: 13,
        titulo: "Llavero con nombre y forma",
        precioUnidad: 4.50,
        precioPack: " ",
        descripcion: "Elige la silueta que más te guste (aficiones, piezas mecánicas, animales...) y añade el nombre o apellido que prefieras. Un detalle único, original y hecho totalmente a medida.",
        material: "MDF",
        tematica: ["llaveros", "friki"],
        imagenes: [
            "img/llaverofutbolnombre.jpg",
            "img/llaveronombreforma.jpg"
        ]
    },
    {
        id: 14,
        titulo: "Llavero nombre relieve",
        precioUnidad: 5.2,
        precioPack: " ",
        descripcion: "Con efecto 3D. Tu nombre destacado en relieve sobre una base sólida. El tamaño aproximado es de 4,5 cm de largo, aunque variará ligeramente dependiendo de la cantidad de letras del nombre elegido.",
        material: "MDF",
        tematica: ["llaveros"],
        imagen:  "img/llaveronombrerelieve.jpg" 
    },
    {
        id: 15,
        titulo: "Llavero nombre simple",
        precioUnidad: 3.50,
        precioPack: " ",
        descripcion: "Un diseño clásico, ligero y perfecto para el día a día. El tamaño aproximado es de 5 cm de largo, adaptándose proporcionalmente según la cantidad de letras del nombre elegido.",
        material: "MDF",
        tematica: ["llaveros"],
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
        precioPack: " ",
        descripcion: "Ideal para nombres compuestos, frases cortas, colegios o asociaciones. El tamaño aproximado es de 6 cm, ajustándose en función de la longitud del texto elegido.",
        material: "MDF lacado en blanco",
        tematica: ["llaveros", "empresas"],
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
        precioPack: " ",
        descripcion: "Un diseño moderno, resistente y con un acabado elegante. El tamaño aproximado es de 4 cm, ajustándose proporcionalmente a la cantidad de letras del nombre.",
        material: "METACRILATO",
        tematica: ["llaveros"],
        imagenes: [
            "img/llaveronombresimplemetraquilato.jpg",
            "img/llaveronombresimplemetraquilato1.jpg"
        ]
    },
    {
        id: 18,
        titulo: "Llavero imagen Semana Santa",
        precioUnidad: 4.00,
        precioPack: " ",
        descripcion: "Llavero circular de madera con grabado láser detallado de temática religiosa. Un detalle ideal para cofrades, hermandades o como recuerdo especial. Tamaño aproximado: 5 cm de diámetro.",
        material: "MDF",
        tematica: ["llaveros", "semana santa"],
        imagen:  "img/llaverosemanasanta.jpg",
    },
    {
        id: 19,
        titulo: "Tablero de ajedrez",
        precioUnidad: 8.00,
        precioPack: " ",
        descripcion: "Tablero de ajedrez clásico con cuadrícula y coordenadas grabadas a láser. Ideal para amantes de los juegos de mesa tradicionales. (Nota: El tamaño exacto está pendiente de confirmación. Las piezas no están incluidas en el precio base; consultar disponibilidad y precio del juego completo).",
        material: "MDF",
        tematica: ["Juegos de mesa"],
        imagenes: [
            "img/tableroajedez.jpg",
            "img/tableroajedez1.jpg"
        ]
    },
    {
        id: 20,        
        titulo: "Bola de navidad profesores",
        precioUnidad: 4.00,
        precioPack: " ",
        descripcion: "El detalle perfecto para regalar a los profesores ('Seño', 'Profe', etc.) y agradecerles su labor durante el curso. Diseño elegante con copos de nieve y el nombre integrado en el interior. Tamaño: 9 cm de diámetro.",
        material: "MDF",
        tematica: ["profesores","navidad"],
        imagen: "img/bolanavidadpersonalizada.jpg"
    },
    {
        id: 21,
        titulo: "Boligrafos",
        precioUnidad: 1.80,
        precioPack: " ",
        descripcion: "Un detalle práctico y elegante, perfecto para bodas, comuniones, graduaciones o regalos para profesores. Graba el nombre, la fecha o una frase corta para hacerlo único.",
        material: "BAMBÚ, color de tinta sujeto a disponibilidad (habitualmente negro)",
        tematica: ["profesores", "eventos", "empresas"],
         imagenes: [
            "img/boligrafobautizo.jpg",
            "img/boligrafobautizo1.jpg",
            "img/boligrafocomunion1.jpg",
            "img/boligrafocomunion2.jpg",
            "img/boligrafocomunion3.jpg"
        ]
    },
    {
        id: 22,
        titulo: "Llaveros con retrato personalizado",
        precioUnidad: 0,
        precioPack: "Desde 5.00€/unidad (dependiendo de los detalles de la imagen)",
        descripcion: "Llavero de madera con retrato grabado a láser a partir de tu fotografía favorita. Un detalle sorprendente y único, ideal para regalar a los invitados de bautizos, comuniones o eventos especiales. Incluye la personalización con el nombre y la fecha.",
        material: "MDF lacado en blanco",
        tematica: ["llaveros", "eventos"],
        imagenes: [
            "img/llaveroscaras.jpg",
            "img/llaveroscaras1.jpg",
            "img/llaverosretrato.jpg"
        ]
    },
    {
        id: 23,
        titulo: "Llavero imagen pintado a mano",
        precioUnidad: 6.00,
        precioPack: "-",
        descripcion: "Llavero personalizado con grabado láser y pintado a mano a todo color. Un acabado artesanal y muy llamativo, perfecto para dar vida a tu logotipo, diseño de asociación o evento. (El diseño de la imagen es un ejemplo de nuestro trabajo a medida).",
        material: "MDF",
        tematica: ["llaveros", "empresas"],
        imagenes: [
            "img/llaveroimagencolor.jpg",
            "img/llaveropintado.jpg"
        ]
    },
    {
        id: 24,
        titulo: "Cuadro familiar",
        precioUnidad: 35.50,
        precioPack: " ",
        descripcion: "Cuadro decorativo de madera con grabado láser personalizado. Un diseño emotivo ideal para representar la unión de tu familia. Incluye marco a elegir en color negro o blanco. Tamaño: 40x30 cm. Para más o menos miembros familiares consultar diseño.",
        material: "MDF",
        tematica: ["decoración"],
        imagen:  "img/cuadro.jpg"
    },
    {
        id: 25,
        titulo: "Abanico",
        precioUnidad: 0,
        precioPack: " ",
        descripcion: "Combate el calor con estilo y un toque de humor. Opciones de personalización: Solo frase (15€) | Frase + dibujo simple (20€) | Caricatura/rostro + frase (25€).",
        material: "Madera y tela",
        tematica: ["abanicos", "eventos"],
        imagenes: [
            "img/abanico4.jpg",
            "img/abanico1.jpg",
            "img/abanico2recorte.jpg"
        ]
    },
    {
        id: 26,
        titulo: "Árbol de navidad decorativo",
        precioUnidad: 10.00,
        precioPack: " ",
        descripcion: "Ideal para decorar cualquier rincón de tu hogar. El diseño estándar con las palabras de la imagen (Fe, Paz, Amor, Familia, Felicidad) cuesta 10€. Si prefieres modificar las palabras y hacerlo 100% personalizado con tus propios textos o nombres, el precio es de 15€. Tamaño: 25 cm aproximadamente.",
        material: "MDF",
        tematica: ["navidad", "decoración"],
        imagenes: [
            "img/arbolnavidad.jpg"
        ]
    }, 
    {
        id: 27,
        titulo: "Medallero deportivo personalizado",
        precioUnidad: 20.00,
        precioPack: " ",
        descripcion: "Exhibidor de medallas de madera, ideal para que los campeones de la casa luzcan sus logros. Personalizable con el nombre y la silueta del deporte o afición que prefieras (fútbol, gimnasia, ciclismo...). Un regalo original para motivar y decorar. Tamaño aproximado: 40 cm de ancho.",
        material: "MDF",
        tematica: ["decoración"],
        imagenes: [
            "img/medallero1.jpg",
            "img/medallero2.jpg"
        ]
    },
    {
        id: 28,
        titulo: "Catavino grabado",
        precioUnidad: 0.00,
        precioPack: " ",
        descripcion: "Un detalle elegante, clásico y muy nuestro para bodas, aniversarios o eventos especiales. Opciones: Solo texto (11€/ud) | Imagen sencilla + nombre (15€/ud).",
        material: "Cristal",
        tematica: ["eventos","decoración", "Cristalería"],
        imagenes: [
            "img/catavinos.jpg"
        ]
    },
    {
        id: 29,
        titulo: "Cuadro guerrero anime personalizado",
        precioUnidad: 11.00,
        precioPack: " ",
        descripcion: "Cuadro circular decorativo de madera en 3D inspirado en personajes clásicos de anime. Personalizable con el nombre en relieve. Puedes elegir el color de la base (sujeto a disponibilidad). Tamaño aproximado: 18 cm de diámetro.",
        material: "MDF",
        tematica: ["friki","decoración"],
        imagenes: [
            "img/cuadrofriki.jpg",
            "img/cuadrofriki1.jpg"
        ]
    },
    {
        id: 30,
        titulo: "Letra gigante para firmas",
        precioUnidad: 75.00,
        precioPack: " ",
        descripcion: "Letra inicial gigante de madera, ideal como alternativa original al clásico libro de firmas (¡que luego nunca se mira!). Perfecta para que los invitados dejen sus firmas, huellas o mensajes en bodas, comuniones o bautizos, y luego usarla como decoración en casa. Personalizable con nombre en relieve, fecha o dibujo. El tamaño máximo es 90x60cm.",
        material: "MDF",
        tematica: ["eventos","decoración"],
        imagenes: [
            "img/letrafirmas.jpg",
            "img/letrafirmas1.jpg",
            "img/letrafirmas2.jpg",
            "img/letrafirmas3.jpg"
        ]
    },
    {
        id: 31,
        titulo: "Medalla graduación",
        precioUnidad: 6.00,
        precioPack: "Ver opciones de precio en descripción",
        descripcion: "El recuerdo perfecto para celebrar el fin de curso, instituto o universidad. Incluye cinta para colgar (color sujeto a disponibilidad). Opciones: Genérica sin nombre (4,50€/ud) | Personalizada con nombre, promoción y logo (6,00€/ud) | Personalizada a doble cara con dedicatoria en el reverso (7,50€/ud).",
        material: "MDF",
        tematica: ["eventos","profesores","graduación"],
        imagenes: [
            "img/medallagraduacion1.jpg",
            "img/medallasgraduacion.jpg"
        ]
    },
    {
        id: 32,
        titulo: "Lámpara grabada (iluminación multicolor)",
        precioUnidad: 25.00,
        precioPack: " ",
        descripcion: "Incluye mando a distancia para controlar los colores. Funciona mediante cable USB (incluido, sin cabezal) o con pilas (no incluidas). Base disponible en color negro o blanco según stock. ¿Quieres ir un paso más allá? Hacemos grabados 100% personalizados a partir de fotografías (consultar precio).",
        material: "Metracrilato y base LED (RGB)",
        tematica: ["eventos", "decoración", "profesores", "graduación"],
        imagenes: [
            "img/lampara1.jpg",
            "img/lampara2.jpg"
        ]
    },
    {
        id: 33,
        titulo: "Cuadro natalicio",
        precioUnidad: 22.00,
        precioPack: " ",
        descripcion: "Precioso marco de fotos de mesa personalizado con los datos de nacimiento del bebé (nombre, fecha, peso y altura). Un recuerdo único, emotivo y 100% modificable a tu gusto. Diseñado para colocar una fotografía estándar de 10x15 cm. Tamaño total aproximado: 25 cm de ancho.",
        material: "MDF",
        tematica: ["bebe"],
        imagenes: [
            "img/cuadrobautizodatos.jpg"
        ]
    },
    {
        id: 34,
        titulo: "Llavero de silueta animada",
        precioUnidad: 3.50,
        precioPack: " ",
        descripcion: "Presenta la silueta de personajes clásicos del cine de animación y los videojuegos. Un accesorio ligero, resistente y perfecto para lucir tus aficiones o hacer un regalo original.",
        material: "MDF",
        tematica: ["llaveros", "friki"],
        imagenes: [
            "img/llaveroimagen.jpg"
        ]
    },
    {
        id: 35,
        titulo: "Figura manzana / trofeo para profesores",
        precioUnidad: 22.00,
        precioPack: " ",
        descripcion: "Figura de mesa en forma de manzana con efecto 3D en relieve y detalles a color. El regalo perfecto para agradecer a los profes su gran dedicación. 100% personalizable: incluye el nombre del profesor/a en la pieza del puzzle, el curso escolar en la hoja y colores a elegir (sujetos a disponibilidad). Tamaño aproximado: [consultar] cm.",
        material: "MDF",
        tematica: ["profesores"],
        imagenes: [
            "img/regalosenyo.jpg"
        ]
    },
    {
        id: 36,
        titulo: "Portafotos de graduación premium",
        precioUnidad: 0.00,
        precioPack: "Consultar descuentos por cantidad para clases.",
        descripcion: "Marco portafotos con base de mesa, el recuerdo ideal para celebrar el fin de etapa escolar. Fabricación artesanal con bordes y esquinas lijados a mano para un acabado extra suave. Cuenta con ranura superior para introducir la fotografía fácilmente. La foto tiene un tamaño de 6,5cm de alto y 5cm ancho. Opciones: Genérica sin nombre (10,00€/ud) | Grabado frontal personalizado (12,00€/ud) | Grabado a doble cara con dedicatoria en el reverso (14,00€/ud).",
        material: "MDF",
        tematica: ["eventos", "profesores", "decoración"],
        imagenes: [
            "img/portafotograduacion.jpeg",
            "img/portafotograduacion1.jpeg",
            "img/portafotograduacion2.jpeg",
            "img/portafotograduacion3.jpeg",
        ]
    },
    {
        id: 37,
        titulo: "Cuadro grabado cofrade",
        precioUnidad: 15.00,
        precioPack: "Consultar precio para réplicas en otro tamaño.",
        descripcion: "Placa de madera con grabado láser de alta definición de estilo cofrade. Ideal para regalar o decorar. Disponemos de varios diseños (Cristo, Virgen, Nazareno...) y podemos personalizarlo con la imagen del titular de tu hermandad bajo pedido (preguntar posible suplemento). Se puede colgar o apoyar. Tamaño aproximado: 17cm de alto y 12cm de ancho.",
        material: "MDF",
        tematica: ["Semana santa"],
        imagenes: [
            "img/cuadrocristo.jpeg",
            "img/cuadronazareno.jpeg",
            "img/cuadrovirgen.jpeg"
        ]
    },
    {
        id: 38,
        titulo: "Cuadro grabado cofrade gran formato",
        precioUnidad: 25.00,
        precioPack: "Consultar precio para réplicas en otro tamaño.",
        descripcion: "Ideal para presidir una habitación, un altar o como regalo de gran valor para cofrades. Su gran tamaño permite apreciar cada sombra y detalle de la imagen. Personalizable con el titular de tu hermandad bajo pedido (preguntar posible suplemento de diseño). Tamaño: 27,5 cm de alto y 19,5 cm de ancho.",
        material: "MDF",
        tematica: ["Semana santa"],
        imagenes: [
            "img/cuadrovirgengrande.jpeg",
            "img/cuadrovirgengrande1.jpeg"
        ]
    },
    {
        id: 39,
        titulo: "Llavero cuadro cofrade",
        precioUnidad: 4.50,
        precioPack: " +10 unidades -5%",
        descripcion: "Incorpora un orificio superior, ideal para usar como llavero o colgante para el coche. Diseños disponibles: Cristo, Virgen y Nazareno. Tamaño: 6,5 cm de alto y 5 cm de ancho.",
        material: "MDF",
        tematica: ["Semana santa", "llaveros"],
        imagenes: [
            "img/cuadrollaverovirgen.jpeg",
            "img/cuadrollaveronazareno.jpeg",
            "img/cuadrollaverocristo.jpeg"
        ]
    },
    {
        id: 40,
        titulo: "Llavero nombre inicial",
        precioUnidad: 4.00,
        precioPack: " +10 unidades -5%",
        descripcion: "Llavero con la silueta de tu inicial y tu nombre completo grabado. Un detalle sencillo, original y muy práctico para identificar llaves o mochilas. Incluye anilla y cadenita metálica lista para colgar.",
        material: "MDF",
        tematica: ["llaveros"],
        imagenes: [
            "img/llaveronombreinicial.jpg"
        ]
    }, 
    {
        id: 41,
        titulo: "Elfos decoración",
        precioUnidad: 4,
        precioPack: "Consultar precio para réplicas en otro tamaño, o grosor.",
        descripcion: "Simpáticas figuras de elfos/gnomos con estrellas y detalles para decorar cualquier rincón. El de la imagen mide unos 11 cm.",
        material: "MDF",
        tematica: ["navidad"],
        imagenes: [
            "img/elfo.jpeg", 
            "img/elfos.jpeg", 
            "img/elfodoble.jpeg"
        ]
    }, 
    {
        id: 42,
        titulo: "Colgador / Manivela Llave Santa",
        precioUnidad: 10.00,
        precioPack: "Preguntar precio por modelo y personalización, entre 9-12€",
        descripcion: "Colgador de puerta 'Querido Santa' con silueta de casitas y llave mágica.",
        material: "MDF o MDF lacado en blanco",
        tematica: ["navidad"],
        imagenes: [
            "img/marcapuerta.jpeg", 
            "img/llavePapaNoel.jpeg"
        ]
    }, 
    {
        id: 43,
        titulo: "Bolas de Navidad con imagen",
        precioUnidad: 5.50,
        precioPack: " ",
        descripcion: "Bolas de madera personalizadas para poner tu foto favorita el precio va desde los 5,50€-6,50€ dependiendo del diseño.",
        material: "MDF",
        tematica: ["navidad"],
        imagenes: [
            "img/bolaFoto.jpeg", 
            "img/bolafoto2.jpeg"
        ]
    }, 
    {
        id: 44,
        titulo: "Bandeja de Navidad (Papá Noel / Reyes Magos)",
        precioUnidad: 15.00,
        precioPack: " ",
        descripcion: "Bandeja de madera aprox. 30x20 cm para dejar las galletas, leche y zanahorias.",
        material: "MDF o MDF lacado en blanco",
        tematica: ["navidad"],
        imagenes: [
            "img/bandejaPapaNoel.jpeg", 
            "img/bandejaReyes.jpeg"
        ]
    }, 
    {
        id: 45,
        titulo: "Llaves Mágicas Personalizadas",
        precioUnidad: 4.00,
        precioPack: " ",
        descripcion: "Llave de madera de aprox. 9 cm de largo grabada con el nombre (ej. Mario, Alba).",
        material: "MDF lacado en blanco",
        tematica: ["navidad"],
        imagenes: [
            "img/llavesPersonalizadas.jpeg"
        ]
    },
    {
        id: 46,
        titulo: "Llavero escudo de equipo personalizado",
        precioUnidad: 0,
        precioPack: "Desde 5,50€/unidad (dependiendo de los detalles de la imagen y los extras)",
        descripcion: "Llavero con diseño en forma de escudo personalizado para equipos y clubes. La imagen frontal se diseña desde 0 a medida a partir de vuestra foto de equipo o idea. Posibilidad de añadir una dedicatoria o frase emotiva grabada en la parte trasera (con un pequeño suplemento). El regalo perfecto para fin de temporada, campeonatos o para toda la plantilla.",
        material: "MDF lacado en blanco",
        tematica: ["llaveros", "deportes"],
        imagenes: [
            "img/llaveroEquipo.jpeg",
            "img/llaveroEquipo1.jpeg"
        ]
    },
    {
        id: 47,
        titulo: "Pizarra del Elfo",
        precioUnidad: 16.00,
        precioPack: " ",
        descripcion: "Cartel de MDF con la divertida silueta de un gorro de elfo en la parte superior y el grabado 'Un mensaje de tu Elfo'. Cuenta con una superficie blanca central tipo pizarra o panel para escribir notas personalizadas de los elfos cada mañana. Tamaño: 24x20 cm.",
        material: "MDF",
        tematica: ["navidad"],
        imagenes: [
            "img/pizarraElfo.jpeg"
        ]
    },
    {
        id: 48,
        titulo: "Postal mágica del Elfo",
        precioUnidad: 10.50,
        precioPack: " ",
        descripcion: "Postal de MDF grabada a áser simulando un envio oficial desde el Polo Norte. El texto incluye un divertido mensaje del elfo espía avisando de que vigila si se portan bien. Tamaño: 21x14 cm. Posibles modificaciones a la imagen de base, con un posible suplemento.",
        material: "MDF",
        tematica: ["navidad"],
        imagenes: [
            "img/postalElfo.jpeg"
        ]
    },
    {
        id: 49,
        titulo: "Escudo de fútbol decorativo para pared",
        precioUnidad: 20.00,
        precioPack: "Consultar precio para tamaños superiores (40-50 cm)",
        descripcion: "Silueta de pared de tu equipo de fútbol favorito fabricada mediante corte láser de alta precisión. Su acabado en negro mate aporta un toque moderno, minimalista y elegante a cualquier habitación, salón o zona gamer. Personalizable con el escudo del club que elijas (Betis, Sevilla, Real Madrid, Barça, equipos locales...). Tamaño aproximado: 30x30 cm (varía proporcionalmente según la forma del escudo).",
        material: "MDF negro",
        tematica: ["decoración", "deportes"],
        imagenes: [
            "img/escudoParedFutbol.jpeg"
        ]
    },
    {
        id: 50,
        titulo: "Set discos cumplemes bebé persobalizados (11 piezas)",
        precioUnidad: 28.00,
        precioPack: "Consultar suplemento para grabar la bola extra o por más piezas.",
        descripcion: "Set completo de 11 discos de madera grabados a doble cara para inmortalizar el primer año del bebé. Incluye: 1 disco con dedicatoria personalizada y nuestro sello detrás, 1 disco de bienvenida ('Hola soy [Nombre]') con los datos de nacimiento en el reverso, 6 discos con los 12 meses ('1 mes' a 'Mi primer añito'), 2 discos con 4 hitos especiales ('Asoma mi primer diente', 'Mi primera Navidad', 'Con los abuelos' y 'Mi primer Carnaval') y 1 disco en blanco para escribir con rotulador acrílico (no incluido). ¡Los hitos son 100% modificables a tu gusto y el disco extra puede ir grabado por un pequeño suplemento!",
        material: "Madera natural (contrachapado / MDF)",
        tematica: ["bebe"],
        imagenes: [
            "img/cumpleMes9.jpeg",
            "img/cumpleMes10.jpeg",
            "img/cumpleMes8.jpeg",
            "img/cumpleMes6.jpeg",
            "img/cumpleMes5.jpeg",
            "img/cumpleMes4.jpeg",
            "img/cumpleMes3.jpeg",
            "img/cumpleMes2.jpeg",
            "img/cumpleMes1.jpeg",
            "img/cumpleMes7.jpeg"
        ]
    },
    {
        id: 51,
        titulo: "Bola de navidad inicial y nombre en relieve (doble capa)",
        precioUnidad: 5.50,
        precioPack: "Pack familia (4 unidades): 5.00€/ud",
        descripcion: "Adorno navideño de diseño exclusivo fabricado en doble capa para lograr un elegante efecto 3D en relieve. Combina una base de madera MDF con el aro exterior y la letra inicial superpuestos en MDF lacado en blanco, junto al nombre grabado a láser. Un detalle sofisticado y duradero para personalizar el árbol de toda la familia. Diámetro: 8 cm.",
        material: "MDF y MDF lacado en blanco (doble capa)",
        tematica: ["navidad"],
        imagenes: [
            "img/bolaNombreInicial.jpeg"
        ]
    },
    {
        id: 52,
        titulo: "Bola navidad personalizada nombre con fondo",
        precioUnidad: 4.50,
        precioPack: "Consultar colores de fieltro disponibles y descuentos por cantidad",
        descripcion: "Adorno navideño de madera calada con el nombre personalizado, detalle de copo de nieve y una trasera de fieltro rojo que aporta un contraste cálido y muy navideño. Incluye cordón listo para colgar en el árbol. Posibilidad de elegir otros colores de fieltro bajo disponibilidad. (Nota: La bolsita de yute de la imagen no está incluida; si es para regalo, puedes solicitar envoltorio especial bajo un pequeño suplemento). Diámetro: 9 cm.",
        material: "MDF y fieltro",
        tematica: ["navidad"],
        imagenes: [
            "img/bolaNombreFieltro.jpeg",
            "img/bolaNombreFieltro1.jpeg"
        ]
    },
    {
        id: 53,
        titulo: "Expositor / Tótem QR personalizado para negocios",
        precioUnidad: 12.00,
        precioPack: "Consultar descuentos por varias unidades para mesas o mostradores",
        descripcion: "Expositor de mesa con diseño moderno en forma de arco y base encajable, ideal para mostradores, tiendas, peluquerías, clínicas o restaurantes. Grabado láser de alta precisión para que tus clientes escaneen al instante tu Instagram, Reseñas de Google, Carta Digital, WhatsApp o WiFi. Incluye el logotipo o nombre de tu negocio en la parte inferior. Tamaño aproximado: 20 cm de ancho x 25 cm de alto.",
        material: "MDF",
        tematica: ["empresas"],
        imagenes: [
            "img/soporteInstagram1.jpeg",
            "img/soporteInstagram2.jpeg",
            "img/soporteInstagram3.jpeg"
        ]
    },
    {
        id: 54,
        titulo: "Bola / corona de navidad doble capa personalizada (gran formato)",
        precioUnidad: 12.00,
        precioPack: "Consultar precio para otros tamaños (20 cm, 25 cm, 30 cm...) o pedidos por cantidad",
        descripcion: "Adorno navideño de gran formato fabricado en doble capa con efecto relieve 3D. Combina una base de madera MDF grabada con el logotipo de tu negocio, apellido familiar o texto que elijas, y un espectacular marco calado en MDF negro con motivos navideños de copos de nieve y acebo. Ideal para decorar escaparates, puertas de comercios, mostradores o presidir el árbol de Navidad. Tamaño estándar: 17 cm de diámetro (modificable bajo demanda).",
        material: "MDF y MDF negro (doble capa)",
        tematica: ["empresas","navidad", "decoración"],
        imagenes: [
            "img/bolaDobleCapaEmpresa1.jpeg",
            "img/bolaDobleCapaEmpresa.jpeg"
        ]
    },
    {
        id: 55,
        titulo: "Corazón grabado con ilustración y bolígrafo para testigos o eventos",
        precioUnidad: 28.00,
        precioPack: " ",
        descripcion: "Regalo conmemorativo 100% personalizado, ideal para testigos de boda, bodas de plata, aniversarios o agradecimientos especiales. Incluye figura en forma de corazón fabricada en doble capa (MDF lacado en blanco y base en contraste) con ilustración personalizada a partir de vuestra fotografía y dedicatoria grabada a láser, acompañada de su base-estante de mesa y bolígrafo de bambú grabado a juego. (Nota: Caja de presentación no incluida en el precio base; puedes solicitar envoltorio especial de regalo bajo un posible pequeño suplemento).",
        material: "MDF lacado en blanco",
        tematica: ["eventos", "decoración"],
        imagenes: [
            "img/regaloBodasPlata.jpeg",
            "img/regaloBodasPlataEnvuelto.jpeg"
        ]
    }
    
];
