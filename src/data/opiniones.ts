// Opiniones reales de la página de Facebook de Joel
// (facebook.com/FotografiaJoelGodoy/reviews, 100 % lo recomienda, 26 opiniones;
// 24 son públicas). Nombres con inicial del apellido por privacidad.
// Las reseñas largas se muestran como extracto (… marca el recorte).

export interface Opinion {
  autor: string;
  texto: string;
  fecha: string;
}

/** Reseñas con texto: tarjetas grandes del carrusel. */
export const OPINIONES: Opinion[] = [
  {
    autor: 'Yunibia B.',
    fecha: 'noviembre 2017',
    texto:
      'Fuiste la mejor elección de mi boda. Desde el primer momento nos diste esa confianza… captaste cada momento especial y ni cuenta nos dábamos de que estabas ahí. ¡Estaremos eternamente agradecidos!',
  },
  {
    autor: 'Ariadna C.',
    fecha: 'marzo 2017',
    texto:
      '100 % recomendado, excelente fotógrafo él y su equipo, siempre con grandes ideas. Si me volviera a casar lo volvería a contratar.',
  },
  {
    autor: 'Paola G.',
    fecha: 'noviembre 2017',
    texto:
      'Las 5 estrellas que te califico multiplícalas por mil y aun así me quedo corta. No pudimos haber elegido mejores profesionales de la fotografía.',
  },
  {
    autor: 'Vaaly M.',
    fecha: 'octubre 2017',
    texto:
      'Excelente trabajo, profesionalismo, calidad, buen precio y súper entregado a su trabajo. Alguien que realmente se preocupa por capturar momentos únicos. ¡Recomendadísimo!',
  },
  {
    autor: 'Grecia G.',
    fecha: 'junio 2017',
    texto:
      'Me encantan sus sesiones de fotos, siempre fuera de lo común. Todo un artista innovando y creando las mejores fotografías. Gracias por las padrísimas fotos de mi boda.',
  },
  {
    autor: 'Cindy L.',
    fecha: 'octubre 2017',
    texto:
      '¡Maravillada es poco! Muy profesional, intrépido, con grandes ideas. Excelente equipo, siempre pendientes de los detalles. ¡Súper recomendado!',
  },
  {
    autor: 'Febe B.',
    fecha: 'octubre 2017',
    texto:
      '¡Me encantó, y a todos los que ven mis fotos! La atención, el producto y los tiempos son excelentes. Lo volvería a contratar.',
  },
  {
    autor: 'Oscar O.',
    fecha: 'octubre 2017',
    texto: 'El mejor, sin lugar a dudas. Siempre atentos él y todo su equipo a capturar los mejores momentos. ¡Súper recomendado!',
  },
  {
    autor: 'Jez P.',
    fecha: 'octubre 2017',
    texto: 'Excelente. Finísima persona. Profesional. Un trabajo maravilloso. Quedamos muy contentos. Ampliamente recomendado.',
  },
  {
    autor: 'César M.',
    fecha: 'septiembre 2018',
    texto: 'Simplemente el mejor fotógrafo, súper profesional.',
  },
  {
    autor: 'Ivett R.',
    fecha: 'enero 2020',
    texto: 'Simplemente el mejor, mil gracias por todo.',
  },
];

/** Todas las personas que lo recomiendan (cinta de nombres bajo el carrusel). */
export const RECOMIENDAN: string[] = [
  'Ivett R.',
  'César M.',
  'Laura E.',
  'Caro L.',
  'Carolina S.',
  'Olga M.',
  'Yunibia B.',
  'Paola G.',
  'Chapizz S.',
  'Brenda G.',
  'Jez P.',
  'Vaaly M.',
  'Febe B.',
  'Cindy L.',
  'Oscar O.',
  'Grecia G.',
  'Jorge C.',
  'Andrea B.',
  'CM John',
  'Ariadna C.',
  'María P.',
  'Isabella A.',
  'JA Armenta',
  'Rafael B.',
];
