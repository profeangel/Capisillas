import { ChairSpec } from './types';

export const CHAIRS_DATA: ChairSpec[] = [
  
  {
    id: 'emilia-blanca',
    name: 'Silla Escritorio Emilia Oficina Ergonomica Acolchada Blanca',
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
    imageType: 'mesh_white',
    imageUrl: '/images/emilia-blanca.jpg'
  },
  {
    id: 'serena-gris',
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
    imageType: 'fabric_grey',
    imageUrl: '/images/serena-gris.jpg'
  },
  {
    id: 'mesh-anatomic',
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
    imageType: 'mesh_anatomic',
    imageUrl: '/images/mesh-anatomic.jpg'
  },
  {
    id: 'ikemma-reclinable',
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
    imageType: 'recliner_footrest',
    imageUrl: '/images/ikemma-reclinable.jpg'
  },
  {
    id: 'vonconn-gamer',
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
    imageType: 'mesh_standard',
    imageUrl: '/images/vonconn-gamer.jpg'
  },
  {
    id: 'lubabycas-w901',
    name: 'Silla Escritorio Lubabycas W901 Gris con Cabezal',
    brand: 'by Lubabycas',
    price: 85990,
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
    imageType: 'mesh_headrest',
    imageUrl: '/images/lubabycas-w901.jpg'
  },
  {
    id: 'emilio-premium',
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
    imageType: 'pu_pink',
    imageUrl: '/images/emilio-premium.jpg'
  }
];
