const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

// Update lubabycas price
data = data.replace(
  /id: 'lubabycas-w901',[\s\S]*?price: 149990,/,
  `id: 'lubabycas-w901',
    name: 'Silla Escritorio Lubabycas W901 Gris con Cabezal',
    brand: 'by Lubabycas',
    price: 85990,`
);

// Update vonconn-gamer
data = data.replace(
  /id: 'vonconn-gamer',[\s\S]*?imageType: 'gamer_white',/,
  `id: 'vonconn-gamer',
    name: 'Silla Ergonómica VONCONN Reclinable con Soporte Lumbar',
    brand: 'Vonconn',
    price: 63573,
    url: 'https://www.mercadolibre.cl/silla-ergonomica-vonconn-silla-de-oficina-reclinable-con-soporte-lumbar-ajustable-giratoria/p/MLC73915406',
    color: 'Negro / Malla',
    materials: {
      backrest: 'Malla transpirable de alta elasticidad',
      seat: 'Espuma moldeada de alta densidad',
      base: 'Plástico, nailon y metal',
      wheels: 'Nailon'
    },
    ergonomics: {
      lumbarSupport: 'Cojín lumbar independiente y ajustable',
      headrest: 'Tiene apoya cabeza',
      backrestType: 'Respaldo biomimético con curva en S de 60 cm'
    },
    adjustments: {
      height: 'Altura regulable (115 a 125 cm)',
      armrests: 'Cómodos apoyabrazos',
      recline: 'Inclinación de balanceo de hasta 35 grados (90° - 135°)',
      footrest: false,
      swivel: true
    },
    dimensions: {
      totalWidth: '65 cm',
      totalHeight: '115 - 125 cm',
      seatWidth: '52 cm',
      seatDepth: '52 cm',
      seatHeightMinMax: '50 - 60 cm'
    },
    maxWeight: 120,
    highlights: [
      'Respaldo de malla biomimético con curva en S',
      'Inclinación de balanceo de hasta 35 grados',
      'Fácil de instalar en 15 minutos'
    ],
    pros: [
      'Cojín lumbar independiente para soporte preciso',
      'Asiento de espuma moldeada de alta densidad',
      'Material transpirable ideal para largas horas'
    ],
    cons: [
      'No es reclinable de manera fija (solo balanceo)',
      'La estructura contiene elementos de plástico y nailon'
    ],
    ratings: {
      ergonomics: 4.5,
      comfort: 4.4,
      materials: 4.1,
      adjustability: 4.0
    },
    imageType: 'mesh_standard',`
);

// emilia-blanca is already at 49990. Let's make sure its name matches.
data = data.replace(
  /id: 'emilia-blanca',[\s\S]*?brand: 'Vidita',/,
  `id: 'emilia-blanca',
    name: 'Silla Escritorio Emilia Oficina Ergonomica Acolchada Blanca',
    brand: 'Vidita',`
);


fs.writeFileSync('src/data.ts', data);
console.log('Updated');
