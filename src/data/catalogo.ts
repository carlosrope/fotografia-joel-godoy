// Catálogo de servicios. Cada categoría genera su propia página en /catalogo/<slug>.
//
// Las fotos salen de la carpeta `Imagenes/` de la raíz del proyecto:
//   Imagenes/bodas/playa · bodas/salon · bodas/hacienda-jardin · bodas/momentos
//   Imagenes/xv-anos · baby-shower · sesiones · marca
// Para agregar fotos basta con copiarlas a la carpeta correcta (nombre tipo B-PLA-05.jpg);
// aparecen solas en la galería, ordenadas por nombre. Astro las optimiza al compilar.

import type { ImageMetadata } from 'astro';

const ARCHIVOS = import.meta.glob<{ default: ImageMetadata }>('../../Imagenes/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', {
  eager: true,
});

// Descripciones (texto alternativo). Si una foto no está aquí, se usa el título de su categoría.
const DESCRIPCIONES: Record<string, string> = {
  'B-PLA-01': 'Novios abrazados en un cerro sobre la bahía al atardecer',
  'B-PLA-02': 'Recepción con candelabro frente al mar',
  'B-PLA-03': 'Novios bajo la Vía Láctea',
  'B-PLA-04': 'Novios en las rocas mientras rompen las olas',
  'B-SAL-01': 'Novia celebrando en la pista',
  'B-SAL-02': 'Primer baile con luces y escenario',
  'B-SAL-03': 'Novios bailando entre confeti, blanco y negro',
  'B-SAL-04': 'Los amigos avientan al novio mientras la novia abraza a su papá',
  'B-SAL-05': 'Mariachi en el salón frente a los novios',
  'B-SAL-06': 'Primer baile con confeti y chisperos',
  'B-HAC-01': 'El novio levanta a la novia entre chisperos en el jardín',
  'B-HAC-02': 'Beso bajo los arcos de un patio colonial',
  'B-HAC-03': 'Beso bajo un arco de flores blancas',
  'B-HAC-04': 'Novios entre rocas y árboles',
  'B-HAC-05': 'Mariachi y fuegos artificiales en el jardín',
  'B-HAC-06': 'Novios junto al lago',
  'B-HAC-07': 'Novios frente a una casona turquesa con arcos',
  'B-HAC-08': 'Novios recostados sobre el vestido entre pétalos',
  'B-MOM-01': 'Novia sonriendo desde el auto, blanco y negro',
  'B-MOM-02': 'Padrinos con camisas de superhéroes',
  'B-MOM-03': 'Novios bajo el velo, blanco y negro',
  'B-MOM-04': 'Salida de la iglesia entre listones',
  'B-MOM-05': 'Beso reflejado en el espejo de un auto antiguo',
  'B-MOM-06': 'Salida de los novios con bengalas',
  'B-MOM-07': 'Los padrinos avientan al novio, vista desde arriba',
  'B-MOM-08': 'Beso entre dos autos Mustang',
  'B-MOM-09': 'El papá arregla la corbata del novio',
  'B-MOM-10': 'Damas de honor lanzando sus ramos',
  'B-MOM-11': 'Retrato de la novia con velo',
  'B-MOM-12': 'El novio con sus padrinos',
  'B-MOM-13': 'El novio con sus padrinos, luz dramática',
  'B-MOM-14': 'Novios bajo el velo en un edificio moderno',
  'XV-01': 'Baile con charro y caballo',
  'XV-02': 'Quinceañera en un túnel de flores',
  'XV-03': 'Quinceañera con su outfit de fiesta entre espejos',
  'MAT-01': 'Sesión de maternidad en blanco y negro',
  'SES-01': 'Sesión preboda al atardecer junto al mar',
  'SES-02': 'Pareja besándose en la carretera',
  'SES-03': 'Pareja abrazada junto al lago',
  'SES-04': 'Pareja recostada en el pasto',
};

export interface Foto {
  src: string | ImageMetadata;
  alt: string;
}

const nombre = (ruta: string) => ruta.split('/').pop()!.replace(/\.[^.]+$/, '');

/** Todas las fotos de una carpeta de `Imagenes/`, ordenadas por nombre. */
export const fotosDe = (carpeta: string, respaldo = 'Fotografía Joel Godoy'): Foto[] =>
  Object.entries(ARCHIVOS)
    .filter(([ruta]) => ruta.includes(`/Imagenes/${carpeta}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([ruta, mod]) => ({ src: mod.default, alt: DESCRIPCIONES[nombre(ruta)] ?? respaldo }));

/** Una foto concreta por nombre (sin extensión), p. ej. foto('B-HAC-02'). */
export const foto = (id: string): Foto => {
  const hit = Object.entries(ARCHIVOS).find(([ruta]) => nombre(ruta) === id);
  if (!hit) throw new Error(`No encuentro la foto ${id} en Imagenes/`);
  return { src: hit[1].default, alt: DESCRIPCIONES[id] ?? 'Fotografía Joel Godoy' };
};

export interface Categoria {
  slug: string;
  carpeta: string;
  grupo: 'Bodas' | 'XV años' | 'Baby shower' | 'Sesiones';
  titulo: string;
  tituloCorto: string;
  frase: string;
  descripcion: string;
  portada: Foto;
  incluye: string[];
  galeria: Foto[];
}

const categoria = (c: Omit<Categoria, 'galeria'>): Categoria => ({ ...c, galeria: fotosDe(c.carpeta, c.titulo) });

export const CATALOGO: Categoria[] = [
  categoria({
    slug: 'boda-en-playa',
    carpeta: 'bodas/playa',
    grupo: 'Bodas',
    titulo: 'Bodas en la playa',
    tituloCorto: 'Playa',
    frase: 'Sal, viento y luz dorada.',
    descripcion:
      'Topolobampo, Maviri, Las Glorias o el destino que elijan. Trabajamos la hora dorada del Pacífico para retratos cálidos, naturales y llenos de movimiento.',
    portada: foto('B-PLA-04'),
    incluye: [
      'Cobertura desde la preparación hasta el baile',
      'Sesión de pareja en la hora dorada',
      'Galería privada en línea',
      'Fotos editadas en alta resolución',
    ],
  }),
  categoria({
    slug: 'boda-en-salon',
    carpeta: 'bodas/salon',
    grupo: 'Bodas',
    titulo: 'Bodas en salón',
    tituloCorto: 'Salón',
    frase: 'Elegancia, emoción y fiesta.',
    descripcion:
      'Del primer vals a la última canción. Cubrimos ceremonia, recepción y fiesta con iluminación profesional para que cada momento se vea tan bien como se sintió.',
    portada: foto('B-SAL-06'),
    incluye: [
      'Cobertura de ceremonia, recepción y fiesta',
      'Iluminación profesional en interiores',
      'Retratos de familia y grupos',
      'Galería privada y fotos editadas',
    ],
  }),
  categoria({
    slug: 'boda-en-hacienda',
    carpeta: 'bodas/hacienda-jardin',
    grupo: 'Bodas',
    titulo: 'Bodas en hacienda y jardín',
    tituloCorto: 'Hacienda y jardín',
    frase: 'Muros con historia, luz de tarde.',
    descripcion:
      'Arcos, cantera, jardines y atardeceres de campo. Una boda en hacienda o jardín pide fotografía con carácter: retratos con textura y momentos espontáneos entre la gente que quieren.',
    portada: foto('B-HAC-02'),
    incluye: [
      'Cobertura completa del evento',
      'Sesión de retrato en los espacios de la hacienda',
      'Fotos de detalles, decoración y ambiente',
      'Galería privada y fotos editadas',
    ],
  }),
  categoria({
    slug: 'xv-anos',
    carpeta: 'xv-anos',
    grupo: 'XV años',
    titulo: 'XV años',
    tituloCorto: 'XV años',
    frase: 'Su noche, contada con elegancia.',
    descripcion:
      'Sesión previa en exteriores, misa, vals, sorpresas y fiesta. Retratos de quinceañera con dirección de pose para que se sienta segura y se vea increíble.',
    portada: foto('XV-03'),
    incluye: [
      'Sesión previa en locación',
      'Cobertura de misa, vals y fiesta',
      'Dirección de pose para la quinceañera',
      'Galería privada y fotos editadas',
    ],
  }),
  categoria({
    slug: 'baby-shower',
    carpeta: 'baby-shower',
    grupo: 'Baby shower',
    titulo: 'Baby shower y maternidad',
    tituloCorto: 'Baby shower',
    frase: 'La espera más bonita.',
    descripcion:
      'Sesión de maternidad, baby shower y revelación de género. Fotografía cálida y cercana para guardar la emoción de estos meses en familia.',
    portada: foto('MAT-01'),
    incluye: [
      'Sesión de maternidad en estudio o exterior',
      'Cobertura del baby shower o revelación',
      'Fotos de detalles y decoración',
      'Galería privada y fotos editadas',
    ],
  }),
  categoria({
    slug: 'sesiones',
    carpeta: 'sesiones',
    grupo: 'Sesiones',
    titulo: 'Sesiones de pareja y preboda',
    tituloCorto: 'Sesiones',
    frase: 'Preboda, compromiso y familia.',
    descripcion:
      'Sesiones preboda, pedida de mano, familia y retrato. También fotografía comercial para marcas y negocios de la región.',
    portada: foto('SES-04'),
    incluye: [
      'Asesoría de locación y vestuario',
      'Sesión de 1 a 2 horas',
      'Fotos editadas en alta resolución',
      'Opción de impresión y álbum',
    ],
  }),
];

export const getCategoria = (slug: string) => CATALOGO.find((c) => c.slug === slug);
