import { spawnSync } from 'child_process';

const services = ['ac', 'fridge', 'washing-machine', 'heater', 'tv'];

for (const s of services) {
  const res = spawnSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--allow-file-access-from-files',
    '--dump-dom',
    `file:///c:/Users/psiva/Downloads/files/index.html#/service/${s}`
  ], { encoding: 'utf-8' });

  const dom = res.stdout || '';
  const pkgCount = (dom.match(/class="[^"]*service-package-card[^"]*"/g) || []).length;
  const slideCount = (dom.match(/class="[^"]*slider-slide[^"]*"/g) || []).length;
  const titleMatch = dom.match(/<h1[^>]*id="service-h1-title"[^>]*>([^<]+)<\/h1>/);
  const title = titleMatch ? titleMatch[1] : 'NOT FOUND';

  console.log(`Service [${s}]: Title="${title}", Packages=${pkgCount}, Slides=${slideCount}`);
}
