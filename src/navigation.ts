import { getPermalink } from './utils/permalinks';
import { CATALOGO } from './data/catalogo';
import { NEGOCIO, waLink } from './data/negocio';

// Icono por categoría del catálogo (menú desplegable).
const ICONO_CATEGORIA: Record<string, string> = {
  'boda-en-playa': 'tabler:beach',
  'boda-en-salon': 'tabler:building-castle',
  'boda-en-hacienda': 'tabler:plant-2',
  'xv-anos': 'tabler:crown',
  'baby-shower': 'tabler:baby-carriage',
  sesiones: 'tabler:hearts',
};

export const headerData = {
  links: [
    {
      text: 'Catálogo',
      icon: 'tabler:camera',
      links: CATALOGO.map((c) => ({
        text: c.titulo,
        href: getPermalink(`/catalogo/${c.slug}`),
        icon: ICONO_CATEGORIA[c.slug] ?? 'tabler:photo',
      })),
    },
    { text: 'Estilo', href: getPermalink('/#estilo'), icon: 'tabler:aperture' },
    { text: 'Proceso', href: getPermalink('/#proceso'), icon: 'tabler:route' },
    { text: 'Opiniones', href: getPermalink('/#opiniones'), icon: 'tabler:star' },
    { text: 'Contacto', href: getPermalink('/#contacto'), icon: 'tabler:message-circle' },
  ],
  // Barra de accesos rápidos con icono, siempre visible bajo el logo en móvil.
  quickLinks: [
    { text: 'Catálogo', href: getPermalink('/#catalogo'), icon: 'tabler:camera' },
    { text: 'Estilo', href: getPermalink('/#estilo'), icon: 'tabler:aperture' },
    { text: 'Proceso', href: getPermalink('/#proceso'), icon: 'tabler:route' },
    { text: 'Opiniones', href: getPermalink('/#opiniones'), icon: 'tabler:star' },
    { text: 'Contacto', href: getPermalink('/#contacto'), icon: 'tabler:message-circle' },
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
