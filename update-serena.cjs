const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(
  /id: 'serena-gris',[\s\S]*?imageType:/,
  `id: 'serena-gris',
    name: 'Silla Serena Tela Acolchada Apoyabrazos Abatibles',
    brand: 'Vidita',
    price: 55494,
    url: 'https://www.mercadolibre.cl/silla-serena-tela-acolchada-apoyabrazos-abatibles-silla-de-escritorio-giratoria-ergonomica-oficina-vidita-color-gris-claro/p/MLC44015515#polycard_client=search_best-seller&tracking_id=29731466-5603-4747-b4e9-e554da6d6d9d&wid=MLC1554140953&sid=search',
    color: 'Gris Claro',
    materials: {
      backrest: 'Tela transpirable, resistente y suave al tacto',
      seat: 'Acolchado premium de espuma transpirable y elástica (7 cm de espesor)',
      base: 'Nylon reforzado color gris y negro',
      wheels: 'Ruedas de poliuretano suaves para pisos delicados'
    },
    ergonomics: {
      lumbarSupport: 'Soporte cómodo para uso prolongado (diseño ergonómico)',
      headrest: 'No incluye (respaldo medio-alto)',
      backrestType: 'Respaldo medio-alto acolchado'
    },
    adjustments: {
      height: 'Regulable en altura (rango de 40 a 50 cm)',
      armrests: 'Abatibles a 90° (se pliegan hacia arriba) ofreciendo soporte cómodo',
      recline: 'Mecanismo basculante con tensión ajustable',
      footrest: false,
      swivel: true
    },
    dimensions: {
      totalWidth: '64 cm',
      totalHeight: '95 - 105 cm',
      seatWidth: '51 cm',
      seatDepth: '49 cm',
      seatHeightMinMax: '40 - 50 cm'
    },
    maxWeight: 120,
    highlights: [
      'Apoyabrazos abatibles a 90° ideales para meter la silla bajo cualquier escritorio y ahorrar espacio',
      'Asiento acolchado con 7 cm de espuma transpirable y elástica para mayor comodidad',
      'Tela transpirable y resistente que evita la formación de bolitas'
    ],
    pros: [
      'Apoyabrazos abatibles súper útiles para ahorrar espacio',
      'Asiento suave y confortable con 7 cm de espesor de espuma',
      'Rango de altura adaptable a distintas estaturas (40-50 cm)'
    ],
    cons: [
      'Sin soporte cervical independiente',
      'Menor ventilación trasera que los modelos full malla',
      'Sin ajuste 3D para los apoyabrazos'
    ],
    ratings: {
      ergonomics: 4.0,
      comfort: 4.5,
      materials: 4.2,
      adjustability: 4.0
    },
    imageType:`
);

fs.writeFileSync('src/data.ts', data);
console.log('Serena data updated');
