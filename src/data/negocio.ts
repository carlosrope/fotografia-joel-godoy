// Datos del negocio: edita aquí y se actualizan en todo el sitio.

export const NEGOCIO = {
  nombre: 'Fotografía Joel Godoy',
  fotografo: 'Joel Godoy',
  ciudad: 'Los Mochis, Sinaloa',
  zona: 'Los Mochis · Topolobampo · El Fuerte · Guasave · todo Sinaloa',
  // WhatsApp de Joel: 668 828 2535 (formato internacional sin "+": 52 + 10 dígitos).
  whatsapp: '526688282535',
  telefono: '668 828 2535',
  email: 'joelgodoyfoto01@gmail.com',
  facebook: 'https://www.facebook.com/FotografiaJoelGodoy',
  // TODO: agregar Instagram si existe.
  instagram: '',
  seguidores: '8.9 mil',
  opiniones: 26,
  recomendacion: '100%',
};

/** Enlace de WhatsApp con mensaje prellenado. */
export const waLink = (mensaje = 'Hola Joel, me gustaría cotizar una sesión.') =>
  `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
