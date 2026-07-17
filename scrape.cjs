const puppeteer = require('puppeteer');
const fs = require('fs');

const urls = [
  'https://www.mercadolibre.cl/silla-escritorio-emilia-oficina-ergonomica-acolchada-blanca/up/MLCU450810064',
  'https://www.mercadolibre.cl/silla-serena-tela-acolchada-apoyabrazos-abatibles-silla-de-escritorio-giratoria-ergonomica-oficina-vidita-color-gris-claro/p/MLC44015515',
  'https://www.mercadolibre.cl/silla-oficina-escritorio-pc-mesh-anatomic-rd-apoyacabeza-regulable-gris/p/MLC41238844',
  'https://www.mercadolibre.cl/silla-de-oficina-ikemma-ergonomica-negra-reclinable-con-reposapies-y-apoyacabezas/p/MLC70394724',
  'https://www.mercadolibre.cl/silla-de-oficina-vonconn-ergonomica-gamer-con-soporte-lumbar-giratoria-y-reclinable-blanca/p/MLC73915406',
  'https://www.mercadolibre.cl/silla-de-escritorio-gris-con-apoya-cabeza-w901-by-lubabycas/p/MLC52255767',
  'https://www.mercadolibre.cl/silla-escritorio-ejecutiva-emilio-premium-oficina-pu-rosado-rosa-cuero-sintetico-marca-vidita/p/MLC53288980'
];

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
  
  const results = [];
  
  for (let u of urls) {
    try {
      await page.goto(u, { waitUntil: 'domcontentloaded', timeout: 15000 });
      
      const data = await page.evaluate((url) => {
        const title = document.querySelector('h1.ui-pdp-title')?.innerText || '';
        const priceElement = document.querySelector('.andes-money-amount__fraction');
        const price = priceElement ? priceElement.innerText.replace(/\D/g, '') : '';
        
        const specs = {};
        const rows = document.querySelectorAll('.andes-table__row');
        rows.forEach(row => {
          const key = row.querySelector('.ui-pdp-specs__table__column-title')?.innerText?.trim();
          const val = row.querySelector('.ui-pdp-specs__table__column-value')?.innerText?.trim();
          if (key && val) {
            specs[key] = val;
          }
        });
        
        return { url, title, price, specs };
      }, u);
      
      results.push(data);
      console.log(`Scraped: ${data.title}`);
    } catch (e) {
      console.error(`Failed: ${u} - ${e.message}`);
    }
  }
  
  fs.writeFileSync('scraped_data.json', JSON.stringify(results, null, 2));
  await browser.close();
  console.log('Done');
})();
