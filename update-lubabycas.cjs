const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(
  /id: 'lubabycas-w901',[\s\S]*?imageType:/,
  `id: 'lubabycas-w901',
    name: 'Silla Escritorio Lubabycas W901 Gris con Cabezal',
    brand: 'by Lubabycas',
    price: 149990,
    url: 'https://www.mercadolibre.cl/silla-de-escritorio-gris-con-apoya-cabeza-w901-by-lubabycas/p/MLC52255767?pdp_filters=shipping%3Afulfillment%7CSHIPPING_ORIGIN%3A10215068#polycard_client=search-desktop&be_origin=backend&search_layout=grid&position=48&type=product&tracking_id=a32fe575-7460-487b-a60f-77e8978ed6cc&wid=MLC2966471104&sid=search',
    color: 'Gris',
    materials: {
      backrest: 'Tela diseño panal ultra resistente y respirable',
      seat: 'Cojín de esponja con tela transpirable',
      base: 'Estructura de acero y base de nylon resistente al desgaste',
      wheels: 'Ruedas silenciosas'
    },
    ergonomics: {
      lumbarSupport: 'Soporte lumbar de 2 cm (ajuste hasta 35°)',
      headrest: 'Apoya cabeza ajustable vertical y frontal/posterior (5 cm)',
      backrestType: 'Respaldo con óptima ventilación y alta elasticidad'
    },
    adjustments: {
      height: 'Pistón de gas Nivel III certificado SGS',
      armrests: 'Apoyabrazos ajustables hasta 90°',
      recline: 'Respaldo reclinable',
      footrest: false,
      swivel: true
    },
    dimensions: {
      totalWidth: 'No especificado',
      totalHeight: 'No especificado',
      seatWidth: 'No especificado',
      seatDepth: 'No especificado',
      seatHeightMinMax: 'No especificado'
    },
    maxWeight: 150,
    highlights: [
      'Apoyabrazos ajustables hasta 90°',
      'Apoya cabeza ajustable vertical y frontalmente',
      'Pistón de gas Nivel III certificado SGS'
    ],
    pros: [
      'Soporta hasta 150 kg',
      'Ajuste lumbar hasta 35°',
      'Tela diseño panal ultra resistente y respirable'
    ],
    cons: [
      'Base de nylon en lugar de metal',
      'El color gris claro puede requerir lavado periódico'
    ],
    ratings: {
      ergonomics: 4.5,
      comfort: 4.5,
      materials: 4.2,
      adjustability: 4.6
    },
    imageType:`
);

fs.writeFileSync('src/data.ts', data);
console.log('Lubabycas updated');
