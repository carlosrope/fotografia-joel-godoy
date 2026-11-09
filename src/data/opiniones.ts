// Opiniones de clientes en la página de Facebook de Joel
// (facebook.com/FotografiaJoelGodoy/reviews). Agrega aquí cada reseña tal cual.
// `real: false` marca textos de muestra que faltan por sustituir.

export interface Opinion {
  autor: string;
  texto: string;
  fecha?: string;
  evento?: string;
  real: boolean;
}

export const OPINIONES: Opinion[] = [
  {
    autor: 'Ivett Robles Vega',
    texto: 'Simplemente el mejor, mil gracias por todo.',
    fecha: 'enero 2020',
    real: true,
  },
  // TODO: sustituir las de muestra por el resto de las 26 reseñas reales de Facebook.
  {
    autor: 'Novios',
    evento: 'Boda en hacienda',
    texto:
      'Joel captó momentos que ni nosotros vimos. Cada vez que abrimos el álbum volvemos a sentir ese día. Súper profesional y atento con nuestras familias.',
    real: false,
  },
  {
    autor: 'Mamá de quinceañera',
    evento: 'XV años',
    texto:
      'Mi hija se sintió como modelo en la sesión de XV. Las fotos quedaron hermosas y la entrega fue rapidísima. Lo recomiendo muchísimo.',
    real: false,
  },
  {
    autor: 'Novios',
    evento: 'Boda en la playa',
    texto:
      'Desde la primera llamada nos dio confianza. En la playa con el viento y todo, las fotos salieron increíbles. ¡Gracias por todo, Joel!',
    real: false,
  },
];
