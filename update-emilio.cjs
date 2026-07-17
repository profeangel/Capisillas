const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(
  /id: 'emilio-premium',[\s\S]*?imageType:/,
  `id: 'emilio-premium',
    name: 'Silla Escritorio Ejecutiva Emilio Premium+ Oficina Pu Rosado',
    brand: 'Vidita',
    price: 127390,
    url: 'https://www.mercadolibre.cl/silla-escritorio-ejecutiva-emilio-premium-oficina-pu-rosado-rosa-cuero-sintetico-marca-vidita/p/MLC53288980?pdp_filters=item_id%3AMLC3003845828&sid=bookmarks#polycard_client=bookmark&wid=MLC3003845828&sid=bookmarks',
    color: 'Rosado',
    materials: {
      backrest: 'Cuero PU impermeable y resistente + Metal',
      seat: 'Cojín de asiento de esponja de doble capa (10 cm)',
      base: 'Base de metal resistente con cilindro de gas clase 3 certificado SGS',
      wheels: 'Ruedas giratorias suaves 360°'
    },
    ergonomics: {
      lumbarSupport: 'Cojín lumbar independiente',
      headrest: 'Respaldo alto y ancho continuo',
      backrestType: 'Respaldo alto y ancho ergonómico'
    },
    adjustments: {
      height: 'Altura ajustable (115-125 cm)',
      armrests: 'Apoyabrazos súper suaves',
      recline: 'Respaldo inclinable de 90° a 155° con ajuste de tensión',
      footrest: true,
      swivel: true
    },
    dimensions: {
      totalWidth: '60 cm',
      totalHeight: '115 - 125 cm',
      seatWidth: '60 cm',
      seatDepth: '56 cm',
      seatHeightMinMax: 'No especificado'
    },
    maxWeight: 200,
    highlights: [
      'Respaldo reclinable hasta 155° con apoyapiés incluido',
      'Asiento extra grande (60x56 cm) permite sentarse con piernas cruzadas',
      'Cilindro de gas clase 3 SGS probado más de 100.000 veces',
      'Cuero PU de alta calidad cortado y cosido a mano'
    ],
    pros: [
      'Capacidad de carga extrema de hasta 200 kg',
      'Reclinable 155° con apoyapies (ideal para descansar)',
      'Espacio amplio para sentarse con piernas cruzadas'
    ],
    cons: [
      'Requiere más espacio debido a su tamaño extragrande',
      'El cuero PU puede abrigar en climas muy cálidos'
    ],
    ratings: {
      ergonomics: 4.5,
      comfort: 4.8,
      materials: 4.5,
      adjustability: 4.6
    },
    imageType:`
);

fs.writeFileSync('src/data.ts', data);
console.log('Emilio premium updated');
