const fs = require('fs');

let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(
  /id: 'emilia-blanca',[\s\S]*?imageType:/,
  `id: 'emilia-blanca',
    name: 'Silla Emilia Oficina Ergonómica Blanca Completa',
    brand: 'Vidita',
    price: 49990,
    url: 'https://www.mercadolibre.cl/silla-escritorio-emilia-oficina-ergonomica-acolchada-blanca/up/MLCU450810064?pdp_filters=shipping%3Afulfillment%7CSHIPPING_ORIGIN%3A10215068#polycard_client=search-desktop&be_origin=backend&search_layout=grid&position=43&type=product&float_highlight=last_units&tracking_id=f22429c3-f35f-4228-89d6-faa692b76f44&wid=MLC1512734201&sid=search',
    color: 'Blanco con Negro',
    materials: {
      backrest: 'Malla transpirable resistente',
      seat: 'Esponja natural de alta densidad',
      base: 'Nailon ABS resistente con pistón SGS Clase 3',
      wheels: 'Ruedas silenciosas de alta resistencia (giratorio 360°)'
    },
    ergonomics: {
      lumbarSupport: '3 puntos de apoyo (espalda/cadera/mano) y soporte lumbar',
      headrest: 'No incluye',
      backrestType: 'Respaldo medio'
    },
    adjustments: {
      height: 'Regulable por pistón neumático clase 3 SGS',
      armrests: 'Apoyabrazos abatibles de 90°',
      recline: 'Sistema basculante libre o bloqueable verticalmente',
      footrest: false,
      swivel: true
    },
    dimensions: {
      totalWidth: '58 cm',
      totalHeight: '92 - 102 cm',
      seatWidth: '47 cm',
      seatDepth: '48 cm',
      seatHeightMinMax: '42 - 52 cm'
    },
    maxWeight: 120,
    highlights: [
      'Apoyabrazos abatibles 90°, ideal para ahorrar espacio',
      'Fácil armado en 10-15 minutos',
      'Pistón clase 3 SGS testeado con más de 100.000 elevaciones'
    ],
    pros: [
      'Excelente precio y prestaciones',
      'Se guarda fácilmente debajo del escritorio',
      'Estructura resistente con materiales certificados'
    ],
    cons: [
      'Sin soporte cervical',
      'Los plásticos blancos requieren mayor cuidado de limpieza',
      'No tiene múltiples posiciones de reclinación'
    ],
    ratings: {
      ergonomics: 4.2,
      comfort: 4.0,
      materials: 4.0,
      adjustability: 4.0
    },
    imageType:`
);

fs.writeFileSync('src/data.ts', data);
console.log('Emilia data updated completely');
