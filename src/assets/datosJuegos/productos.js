const datos = [
    {
        id:0,
        categoryId:'Videojuegos',
        title: 'Dragon ball Z kakarot',
        description: 'Kakarot es principalmente un juego de rol de acción con elementos de Videojuegos de lucha. El jugador puede luchar contra oponentes y realizar actividades como pescar, recolectar orbes Z, comer, conducir un auto flotante, entrenar y poner personajes en emblemas del alma.',
        price: 60,
        urlPic: 'https://cdn.cloudflare.steamstatic.com/steam/apps/851850/header.jpg?t=1658451413',
        stock: 5,
    },
    {
        id:1,
        categoryId:'Videojuegos',
        title: 'Final Fantasy VII Remake',
        description: 'Es una nueva versión del videojuego Final Fantasy VII del año 1997 para la consola PlayStation. La historia sigue al mercenario Cloud Strife mientras él y el grupo ecoterrorista AVALANCHE luchan contra la corrupta megacorporación de Shinra y el legendario exsoldado de Shinra Sefirot.',
        price: 60,
        urlPic: 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/4/8/hthjdf72mtthkltjvuoj/final-fantasy-7-consejos',
        stock: 8,
    },
    {
        id:2,
        categoryId:'Videojuegos',
        title: 'Final Fantasy XV',
        description: 'Final Fantasy XV es un videojuego del género ARPG desarrollado por Square Enix, para PlayStation 4, Xbox One y Microsoft Windows. Junto con Final Fantasy XIII, Final Fantasy XIII-2, Final Fantasy Type-0 y Lightning Returns: Final Fantasy XIII, forma parte del proyecto Fabula Nova Crystallis: Final Fantasy. Final Fantasy XV fue llamado durante sus primeras etapas de desarrollo Final Fantasy Versus XIII pero acabó por convertirse en la decimoquinta entrega de la saga.',
        price: 60,
        urlPic: 'https://store-images.s-microsoft.com/image/apps.40669.66449414671167720.4b6da05c-9526-4098-b52c-6a6b7f5b7668.6ecb5c5a-93af-4884-ac9b-03f80b0547d5?q=90&w=480&h=270',
        stock: 3,
    },
    {
        id:3,
        categoryId:'Videojuegos',
        title: 'Resident Evil Remake',
        description: 'Es el año 1998. Un grupo de fuerzas especiales es destinado a las afueras de Raccoon City para investigar una serie de extraños asesinatos. A su llegada, una jauría de perros sedientos de sangre ataca al grupo, obligándoles a refugiarse en una mansión cercana.',
        price: 40,
        urlPic: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2015/01/436198-analisis-resident-evil-hd-remaster.jpg?itok=emWX2MdQ',
        stock: 7,
    },
    {
        id:4,
        categoryId:'Videojuegos',
        title: 'Marvels Spiderman',
        description: 'Spider-Man es un videojuego de acción y aventuras con un estilo jugable de mundo abierto, que permite al jugador desplazarse de un lugar a otro con total libertad de movimientos y que tiene por escenario donde de desarrolla la historia, la ciudad de Nueva York.',
        price: 60,
        urlPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxzSrWirlWrJ-8uxvKOLumM2kY6PZI09kQw&usqp=CAU',
        stock: 10,
    },
    {
        id:5,
        categoryId:'Videojuegos',
        title: 'Chrono Cross The radical dreamers',
        description: 'CHRONO CROSS es un RPG que transciende el tiempo y el espacio, al desarrollarse en dos mundos paralelos e interconectados. Con más de 40 miembros del equipo a los que conocer, personajes y dimensiones se entrelazarán en este drama épico sobre el planeta.',
        price: 60,
        urlPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxN8hhPIlEbFBy-jDyBS3BJp_QVbZ0YWvgQ&usqp=CAU',
        stock: 13,
    },
    {
        id:6,
        categoryId:'Computadoras',
        title: 'PC Gamer GEN 1',
        description: 'Computadora para uso cotidiano',
        price: 80,
        urlPic: 'https://tecnovortex.com/wp-content/uploads/2014/11/gabinete-shure.jpg',
        stock: 10,
    },
    {
        id:7,
        categoryId:'Computadoras',
        title: 'PC Gamer GEN 5',
        description: 'Notebook para uso de tareas algo exigentes (ya sea por trabajo o facultad)',
        price: 110,
        urlPic: 'https://http2.mlstatic.com/D_NQ_NP_689379-MLA49377889175_032022-O.webp',
        stock: 8,
    },
    {
        id:8,
        categoryId:'Computadoras',
        title: 'PC Gamer GEN 7',
        description: 'Computadora para uso con programas pesados (pensado para diseñadores graficos, de video o gamers exigentes)',
        price: 170,
        urlPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyXxnco1UpBXdDfXA-2t5gjAOsXbi809HPLKbBJVAuant0SuguzPZq3LP8oTxkFjuPGs&usqp=CAU',
        stock: 5,
    },
    {
        id:9,
        categoryId:'Computadoras',
        title: 'PC Gamer GEN 10',
        description: 'Nada que decir, solo que te corre todo en extremo o ultra dependiendo del setting... garantizado',
        price: 250,
        urlPic: 'https://http2.mlstatic.com/D_NQ_NP_762272-MLA51262744118_082022-W.jpg',
        stock: 3,
    },
    
    {
        id:10,
        categoryId:'Notebooks',
        title: 'Notebook Casual/Hogareña',
        description: 'Notebook para uso cotidiano (agregar mas especificaciones tecnicas)',
        price: 100,
        urlPic: 'https://www.necxus.com.ar/cache/26091_250x250_1.jpg',
        stock: 20,
    },
    {
        id:11,
        categoryId:'Notebooks',
        title: 'Notebook Normal/trabajo/Estudio',
        description: 'Notebook para uso de tareas algo exigentes (ya sea por trabajo o facultad)',
        price: 200,
        urlPic: 'https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/d/_/d_nq_np_2x_989992-mla47934600734_102021-f.jpg',
        stock: 10,
    },
    {
        id:12,
        categoryId:'Notebooks',
        title: 'Notebooks Exigentes/Hardcore',
        description: 'Notebook para uso con programas pesados (pensado para diseñadores graficos, de video o gamers exigentes) (agregar mas especificaciones tecnicas)',
        price: 400,
        urlPic: 'https://images.fravega.com/f500/0ee794a62ce7ee4d1930a71aebf68868.jpg',
        stock: 5,
    },
    {
        id:13,
        categoryId:'Notebooks',
        title: 'Notebooks DOOM',
        description: 'Nada que decir, solo que te corre todo en extremo o ultra dependiendo del setting... garantizado',
        price: 1000,
        urlPic: 'https://i0.wp.com/www.inovamusicnet.com/wp-content/uploads/2022/01/71Xe-KI4vQL.AC_SL600_.jpg?fit=600%2C456&ssl=1',
        stock: 1,
    },
    {
        id:15,
        categoryId:'Merchandising',
        title: 'Figura Tai y Greymon',
        description: 'Figura edicion original japonesa --- Tamaño: 25CM de alto',
        price: 50,
        urlPic: 'https://media3.nin-nin-game.com/193233-pos_thickbox/gem-ex-series-pokemon-dialga-palkia-limited-edition-megahouse-.jpg',
        stock: 5,
    },
    {
        id:16,
        categoryId:'Merchandising',
        title: 'Figura Wargreymon',
        description: 'Figura edicion original japonesa --- Tamaño: 15CM de alto',
        price: 60,
        urlPic: 'https://media2.nin-nin-game.com/12406-pos_thickbox/digimon-wargreymon-original-designer-s-edition-limited-edition-d-arts-en.jpg',
        stock: 4,
    },
    {
        id:17,
        categoryId:'Merchandising',
        title: 'Figura Omegamon',
        description: 'Figura edicion original japonesa --- Tamaño: 15CM de alto',
        price: 100,
        urlPic: 'https://media3.nin-nin-game.com/24759-pos_large/digimon-digital-monsters-omegamon-d-arts-en.jpg',
        stock: 5,
    },
    {
        id:18,
        categoryId:'Merchandising',
        title: 'Figura Garurumon',
        description: 'Figura edicion original japonesa --- Tamaño: 28CM de alto',
        price: 80,
        urlPic: 'https://media3.nin-nin-game.com/188760-pos_thickbox/precious-gem-series-digimon-adventure-garurumon-battle-ver-limited-edition-megahouse-.jpg',
        stock: 50,
    },
    {
        id:19,
        categoryId:'Merchandising',
        title: 'Figura Imperialdramon-FM',
        description: 'Figura edicion original japonesa --- Tamaño: 15CM de alto',
        price: 50,
        urlPic: 'https://media2.nin-nin-game.com/25129-pos_thickbox/digimon-imperialdramon-fighter-mode-en.jpg',
        stock: 50,
    },
    {
        id:20,
        categoryId:'Merchandising',
        title: 'Taza Guardians of the Galaxy Water Heat Change',
        description: 'Esta Taza de The Guardian of the Galaxy con water heat change, cuenta con una imagen de Rocket sosteniendo una regadera cuando la taza está fría, pero cuando agregas agua caliente, la magia sucede y aparece una imagen de groot en maceta en la que grita ¡soy groot! asustando de Rocket. Lavar únicamente a mano, no apto para lavavajillas, no microondas.',
        price: 10,
        urlPic: 'https://www.cdmarket.com.ar/Image/0/400_400-3799598.jpg',
        stock: 50,
    },
    {
        id:21,
        categoryId:'Merchandising',
        title: 'Taza Space Invaders',
        description: 'Taza temática de cerámica de Space Invaders',
        price: 10,
        urlPic: 'https://www.cdmarket.com.ar/Image/0/400_400-3854323.jpg',
        stock: 50,
    },
    {
        id:22,
        categoryId:'Merchandising',
        title: 'Auriculares HyperX Cloud II - 7.1 / Gun Metal',
        description: 'Los auriculares para juegos HyperX Cloud se caracterizan por su diseño ultracómodo y su increíble calidad de sonido. Nos hemos esmerado en todos los detalles de la espuma viscoelástica exclusiva HyperX, la polipiel de primera calidad, la fuerza de sujeción y la distribución del peso para crear unos auriculares cómodos durante las largas sesiones de juego. Por ello, son los auriculares para juegos más populares entre millones de jugadores. Siempre hay unos Cloud perfectos para ti, tanto si quieres centrarte en la competición como si quieres relajarte con tu juego favorito.Espuma viscoelástica exclusiva y una diadema de gran calidad de HyperX.',
        price: 100,
        urlPic: 'https://www.cdmarket.com.ar/image/0/600_750-auricular-hyperx-cloud-ii-71-gaming-gun-metal-kingston-D_NQ_NP_691857-MLA31020927764_062019-F.jpg',
        stock: 50,
    },
    {
        id:23,
        categoryId:'Merchandising',
        title: 'Cubre Alfombra Para Auto - Spider Man',
        description: 'Marca: PlasticolorProducto OFICIAL de Marvel made in USA.Fácil del limpiar [sólo agua y jabón]Diseño universal que se adapta a todos los vehículosFabricados con la más alta calidad de PVC vinilico, con colores moldeados [NO pintados, NO se desgasta el color]Un diseño que dejará a todos los fans de Spíderman más que contentos  ;)',
        price: 50,
        urlPic: 'https://www.cdmarket.com.ar/image/0/600_750-750281_3.jpg',
        stock: 2,
    },
    {
        id:24,
        categoryId:'Merchandising',
        title: 'Mochila Batman',
        description: 'Producto Oficial de DC',
        price: 60,
        urlPic: 'https://www.cdmarket.com.ar/image/0/600_750-91mssa8TepL._SL1500_1.jpg',
        stock: 5,
    },
    {
        id:25,
        categoryId:'Merchandising',
        title: 'Figura Funko Pop! Games: Kingdom Hearts 3 - Riku',
        description: 'Espectacular figura Funko Riku, basado en el personaje del Juego Kingdom Hearts no dejes de coleccionarlos todos producto con licencia oficial medida aprox: 11 cm (alto)',
        price: 20,
        urlPic: 'https://www.cdmarket.com.ar/Image/0/600_750-751127_1.png',
        stock: 50,
    },
    {
        id:26,
        categoryId:'Merchandising',
        title: 'Remera Joystick - Playstation - Talle L',
        description: 'Remera para Hombre PS Joystick producto con Licencia Oficial de Playstation 100% Algodón Talle: Large Color: Gris Topo',
        price: 20,
        urlPic: 'https://www.cdmarket.com.ar/image/0/600_750-PSJOYSTICK1-11.png',
        stock: 50,
    },
    {
        id:27,
        categoryId:'Merchandising',
        title: 'Llavero TOMY Control Nintendo Retro SORPRESA',
        description: 'Si sos Nintendo fan, lleva con tus llaves, los controles clasico, y recordá la magia.Producto con licencia oficial de Nintendo.¡Son 5 distintos, coleccionalos!',
        price: 10,
        urlPic: 'https://www.cdmarket.com.ar/image/0/600_750-nintendo-danglers-variedad.jpg',
        stock: 20,
    },
    {
        id:28,
        categoryId:'Merchandising',
        title: 'Duchador Oxygenics Star Wars R2D2',
        description: 'Cabezal de ducha con licencia oficial de Star Wars 3 diferentes ajustes de rociado, instalación rápida! no requiere herramientas, uso eficiente del agua, base de metal de alta calidad',
        price: 60,
        urlPic: 'https://www.cdmarket.com.ar/image/0/600_750-Oxygenics%2073268%20STAR%20WARS%20R2-D2%20Shower%20Head5.jpg',
        stock: 10,
    },
    {
        id:29,
        categoryId:'Merchandising',
        title: 'Bolsa de Dormir SPIDER-MAN',
        description: 'Bolsa de dormir de tu aracnido favorito. Medidas142 x 71 cm.',
        price: 40,
        urlPic: 'https://www.cdmarket.com.ar/Image/0/600_750-bolsa-dormir-spidey.jpg',
        stock: 50,
    },
    {
        id:30,
        categoryId:'Merchandising',
        title: 'Llavero Logo Overwatch',
        description: '¿Necesita un accesorio excepcionalmente impresionante para sus llaves?¡Impresiona y entusiasma a tus amigos con este llavero con el logo de Overwatch!¡Este llavero seguramente será un tema de conversación para vos y tus compañeros!La cadena de llave mide aproximadamente 1 1/2-pulgadas de diámetro.De 15 años en adelante',
        price: 10,
        urlPic: 'https://www.cdmarket.com.ar/image/0/600_750-overwatch-llavero.jpg',
        stock: 50,
    },
    {
        id:31,
        categoryId:'Merchandising',
        title: '¡Funko Pop! Atracciones: Crash Team Racing - Crash Bandicoot',
        description: 'De las carreras de equipo de choque, Crash Bandicoot, estilizado como un paseo pop de Funko. El artículo viene en una caja de escaparate. ¡Recoge todos los objetos de Crash Bandicoot de Funko!',
        price: 60,
        urlPic: 'https://m.media-amazon.com/images/I/61F7cG6waWL._AC_SL1074_.jpg',
        stock: 50,
    },
    {
        id:'randomVideojuego',
        categoryId:'Videojuegos',
        title: 'Videojuego random',
        description: 'Un videojuego random que nuestro algoritmo recomienda',
        price: '???',
        urlPic: 'https://i.pinimg.com/736x/48/5d/34/485d3490861e058d4af3c69c7f41eb2d.jpg',
        stock: '???',
    },
    {
        id:'randomComputadoras',
        categoryId:'Computadoras',
        title: 'Computadora random',
        description: 'Una computadora random que nuestro algoritmo recomienda',
        price: '???',
        urlPic: 'https://i.pinimg.com/736x/48/5d/34/485d3490861e058d4af3c69c7f41eb2d.jpg',
        stock: '???',
    },
    {
        id:'randomNotebooks',
        categoryId:'Notebooks',
        title: 'Notebook random',
        description: 'Una Notebook random que nuestro algoritmo recomienda',
        price: '???',
        urlPic: 'https://i.pinimg.com/736x/48/5d/34/485d3490861e058d4af3c69c7f41eb2d.jpg',
        stock: '???',
    },
    {
        id:'randomMerchandising',
        categoryId:'Merchandising',
        title: 'Merchandising random',
        description: 'Un Merchandising random que nuestro algoritmo recomienda',
        price: '???',
        urlPic: 'https://i.pinimg.com/736x/48/5d/34/485d3490861e058d4af3c69c7f41eb2d.jpg',
        stock: '???',
    },
]

export default datos