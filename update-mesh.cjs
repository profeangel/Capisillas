const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(
  /id: 'mesh-anatomic',[\s\S]*?imageType:/,
  `id: 'mesh-anatomic',
    name: 'Silla Oficina Escritorio Pc Mesh Anatomic Rd Apoyacabeza Regulable Gris',
    brand: 'RD',
    price: 62900,
    url: 'https://www.mercadolibre.cl/silla-oficina-escritorio-pc-mesh-anatomic-rd-apoyacabeza-regulable-gris/p/MLC41238844?pdp_filters=shipping%3Afulfillment%7CSHIPPING_ORIGIN%3A10215068#polycard_client=search-desktop&be_origin=backend&search_layout=grid&position=37&type=product&tracking_id=0c51c692-7045-4a53-91c1-cec97b68a332&wid=MLC2739452146&sid=search',
    color: 'Gris',
    materials: {
      backrest: 'Tela Mesh',
      seat: 'Espuma tapizada',
      base: 'Estructura de plástico y PVC',
      wheels: 'Ruedas giratorias'
    },
    ergonomics: {
      lumbarSupport: 'Soporte lumbar fijo',
      headrest: 'Apoyacabeza ergonómico',
      backrestType: 'Respaldo medio con cabezal'
    },
    adjustments: {
      height: 'Regulable en altura (48 a 58 cm)',
      armrests: 'Cómodos apoyabrazos ajustables',
      recline: 'Rango de inclinación del respaldo de 90°x130°',
      footrest: false,
      swivel: true
    },
    dimensions: {
      totalWidth: '65 cm',
      totalHeight: '122 - 132 cm',
      seatWidth: '53 cm',
      seatDepth: '51 cm',
      seatHeightMinMax: '48 - 58 cm'
    },
    maxWeight: 120,
    highlights: [
      'Apoyacabezas ergonómico incluido',
      'Inclinación regulable de 90° a 130°',
      'Soporte lumbar fijo y apoyabrazos ajustables para mayor comodidad'
    ],
    pros: [
      'Rango de inclinación amplio (130°)',
      'Apoyabrazos ajustables adaptables al usuario',
      'Tela Mesh transpirable para largas horas de trabajo'
    ],
    cons: [
      'Soporte lumbar fijo (no regulable)',
      'Requiere armado',
      'Base de plástico y PVC en lugar de metal'
    ],
    ratings: {
      ergonomics: 4.2,
      comfort: 4.3,
      materials: 3.8,
      adjustability: 4.5
    },
    imageType:`
);

fs.writeFileSync('src/data.ts', data);
console.log('Mesh anatomic updated');
