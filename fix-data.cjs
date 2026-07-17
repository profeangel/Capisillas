const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

// The user is saying the prices and weight values are wrong based on the original URLs
// As MercadoLibre scraping is blocked for all but 1 product, I will fix that one first

// Lubabycas
data = data.replace(/id: 'lubabycas-w901'[\s\S]*?price: 72990/, "id: 'lubabycas-w901',\n    name: 'Silla Escritorio Lubabycas W901 Gris con Cabezal',\n    brand: 'by Lubabycas',\n    price: 149990");

fs.writeFileSync('src/data.ts', data);
