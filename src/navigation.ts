import { getPermalink } from './utils/permalinks';
import { CATALOGO } from './data/catalogo';
import { NEGOCIO, waLink } from './data/negocio';

export const headerData = {
  links: [
    {
      text: 'Catálogo',
      links: CATALOGO.map((c) => ({ text: c.titulo, href: getPermalink(`/catalogo/${c.slug}`) })),
    },
    { text: 'Estilo', href: getPermalink('/#estilo') },
    { text: 'Proceso', href: getPermalink('/#proceso') },
    { text: 'Opiniones', href: getPermalink('/#opiniones') },
    { text: 'Contacto', href: getPermalink('/#contacto') },
  ],
  actions: [{ text: 'Cotizar', href: waLink(), target: '_blank', variant: 'primary' as const, icon: 'tabler:brand-whatsapp' }],
};

export const footerData = {
  links: [
    {
      title: 'Bodas',
      links: CATALOGO.filter((c) => c.grupo === 'Bodas').map((c) => ({
        text: c.tituloCorto,
        href: getPermalink(`/catalogo/${c.slug}`),
      })),
    },
    {
      title: 'Eventos',
      links: CATALOGO.filter((c) => c.grupo !== 'Bodas').map((c) => ({
        text: c.tituloCorto,
        href: getPermalink(`/catalogo/${c.slug}`),
      })),
    },
    {
      title: 'Contacto',
      links: [
        { text: 'WhatsApp', href: waLink() },
        { text: NEGOCIO.email, href: `mailto:${NEGOCIO.email}` },
        { text: 'Facebook', href: NEGOCIO.facebook },
      ],
    },
  ],
};
