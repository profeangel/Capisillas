const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(
  /id: 'ikemma-reclinable',[\s\S]*?imageType:/,
  `id: 'ikemma-reclinable',
    name: 'Silla de Oficina IKEMMA Ergonómica Negra Reclinable',
    brand: 'Ikemma',
    price: 63990,
    url: 'https://www.mercadolibre.cl/silla-de-oficina-ikemma-ergonomica-negra-reclinable-con-reposapies-y-apoyacabezas/p/MLC70394724#reviews',
    color: 'Negra',
    materials: {
      backrest: 'Malla transpirable',
      seat: 'Asiento acolchado con relleno de espuma',
      base: 'Estructura de PP con base reforzada',
      wheels: 'Ruedas de PU silenciosas'
    },
    ergonomics: {
      lumbarSupport: 'Soporte lumbar regulable (ajuste vertical 5 cm y profundidad 3 cm)',
      headrest: 'Reposacabezas 3D ajustable en altura y rotación',
      backrestType: 'Respaldo ergonómico de 60 cm'
    },
    adjustments: {
      height: 'Altura ajustable hasta 115 cm',
      armrests: 'Apoyabrazos vinculados',
      recline: 'Función basculante hasta 135°',
      footrest: true,
      swivel: true
    },
    dimensions: {
      totalWidth: 'No especificado',
      totalHeight: 'Hasta 115 cm',
      seatWidth: 'No especificado',
      seatDepth: '45 cm',
      seatHeightMinMax: 'No especificado'
    },
    maxWeight: 80,
    highlights: [
      'Soporte lumbar ajustable en 4 direcciones (vertical y profundidad)',
      'Función basculante hasta 135° para mayor descanso',
      'Reposacabezas 3D y reposapiés integrado para confort total'
    ],
    pros: [
      'Soporte lumbar altamente personalizable',
      'Reposapiés integrado excelente para descansos',
      'Reposacabezas 3D adaptable'
    ],
    cons: [
      'Capacidad de peso máxima de solo 80 kg',
      'Estructura de PP (plástico)',
      'La basculación requiere asegurar la manija derecha'
    ],
    ratings: {
      ergonomics: 4.6,
      comfort: 4.7,
      materials: 3.8,
      adjustability: 4.7
    },
    imageType:`
);

fs.writeFileSync('src/data.ts', data);
console.log('Ikemma updated');
