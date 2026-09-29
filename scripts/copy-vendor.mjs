// Copia a assets/vendor solo los archivos que usan los HTML.
import { cpSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const files = [
  ['bootstrap/dist/css/bootstrap.min.css', 'bootstrap/css/bootstrap.min.css'],
  ['bootstrap/dist/js/bootstrap.bundle.min.js', 'bootstrap/js/bootstrap.bundle.min.js'],
  ['bootstrap-icons/font/bootstrap-icons.css', 'bootstrap-icons/bootstrap-icons.css'],
  ['bootstrap-icons/font/fonts', 'bootstrap-icons/fonts'],
  ['boxicons/css/boxicons.min.css', 'boxicons/css/boxicons.min.css'],
  ['boxicons/fonts', 'boxicons/fonts'],
  ['glightbox/dist/css/glightbox.min.css', 'glightbox/css/glightbox.min.css'],
  ['glightbox/dist/js/glightbox.min.js', 'glightbox/js/glightbox.min.js'],
  ['isotope-layout/dist/isotope.pkgd.min.js', 'isotope-layout/isotope.pkgd.min.js'],
  ['@srexi/purecounterjs/dist/purecounter_vanilla.js', 'purecounter/purecounter_vanilla.js'],
  ['remixicon/fonts/remixicon.css', 'remixicon/remixicon.css'],
  ['remixicon/fonts', 'remixicon'],
  ['swiper/swiper-bundle.min.css', 'swiper/swiper-bundle.min.css'],
  ['swiper/swiper-bundle.min.js', 'swiper/swiper-bundle.min.js'],
  ['waypoints/lib/noframework.waypoints.js', 'waypoints/noframework.waypoints.js'],
];

for (const [from, to] of files) {
  const dest = join('assets/vendor', to);
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(join('node_modules', from), dest, { recursive: true });
}
console.log(`vendor: ${files.length} entradas copiadas`);
