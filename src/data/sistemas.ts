// Sistemas que Olympo ofrece por rubro.
// Fuente única: la usan el menú "Sistemas" (Navbar.astro) y la página /sistemas.
// Si se agrega un sistema acá, aparece solo en los dos lugares.
//
// `href` solo se pone cuando el sistema ya tiene su página propia; los que no la
// tienen enlazan a su tarjeta en /sistemas y el botón abre WhatsApp.
// Antes de prometer una función nueva, confirmar que el sistema la tiene.

export interface Sistema {
  id: string;
  nombre: string;      // título completo (página /sistemas)
  corto: string;       // etiqueta del menú
  paraQuien: string;   // para qué rubros sirve
  desc: string;        // qué hace, en una frase
  puntos: string[];    // tres funciones clave
  icono: string;       // interior de un <svg viewBox="0 0 20 20">
  href?: string;       // página propia, si ya existe
}

export const sistemas: Sistema[] = [
  {
    id: 'lotificadoras',
    nombre: 'Sistema para Lotificadoras',
    corto: 'Lotificadoras',
    paraQuien: 'Lotificadoras, residenciales y desarrolladores inmobiliarios',
    desc: 'Venta de lotes a plazos desde un plano interactivo: apartados, contratos, cuotas, mora, recibos y cobranza diaria.',
    puntos: ['Plano interactivo y plano público por WhatsApp', 'Cuotas, interés y mora configurables', 'Recibos o factura con CAI'],
    icono: '<path d="M3 5l4.5-1.8 5 1.8L17 3.2v11.6L12.5 16.6l-5-1.8L3 16.6V5z"/><path d="M7.5 3.2v11.6M12.5 5v11.6"/>',
    href: '/sistema-para-lotificadoras-honduras',
  },
  {
    id: 'punto-de-venta',
    nombre: 'Sistema Punto de Venta (POS)',
    corto: 'Punto de venta',
    paraQuien: 'Tiendas, minisúper, ferreterías, agroservicios y boutiques',
    desc: 'Facturación, inventario, cierre de caja y reportes en un solo sistema, hecho a la medida del negocio.',
    puntos: ['Inventario en tiempo real con alertas de stock', 'Cierre de caja por turno y por cajero', 'Sigue vendiendo aunque se vaya el internet'],
    icono: '<path d="M3 8l1.2-4.5h11.6L17 8"/><path d="M3 8c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2"/><path d="M4 10v6.5h12V10"/><path d="M8 16.5v-4h4v4"/>',
    href: '/sistema-pos-honduras',
  },
  {
    id: 'restaurantes',
    nombre: 'Sistema para Restaurantes, Cocinas y Bares',
    corto: 'Restaurantes y bares',
    paraQuien: 'Restaurantes, cafeterías, comedores, comida rápida, bares y food trucks',
    desc: 'Comandas directo a cocina o barra, control de mesas e inventario por receta para saber cuánto cuesta cada platillo.',
    puntos: ['Comandas a cocina y barra al instante', 'Mapa de mesas y cuentas separadas', 'Costo real de cada platillo por receta'],
    icono: '<path d="M6.5 3v4.5M4.5 3v4.5a2 2 0 004 0V3M6.5 9.5V17"/><path d="M13.5 3v14M13.5 3c1.8 0 2.8 1.8 2.8 4.5 0 2.4-1 3.8-2.8 3.8"/>',
    href: '/sistema-para-restaurantes-honduras',
  },
  {
    id: 'farmacias',
    nombre: 'Sistema para Farmacias',
    corto: 'Farmacias',
    paraQuien: 'Farmacias',
    desc: 'Punto de venta para farmacia con control de lotes y vencimientos, y el descuento de tercera edad aplicado conforme a la ley.',
    puntos: ['Lotes y fechas de vencimiento', 'Descuento de tercera edad conforme a la ley', 'Alertas de stock mínimo'],
    icono: '<rect x="3" y="3" width="14" height="14" rx="3.5"/><path d="M10 7v6M7 10h6"/>',
  },
  {
    id: 'repuestos-y-celulares',
    nombre: 'Sistema para Repuestos, Motos y Celulares',
    corto: 'Repuestos y celulares',
    paraQuien: 'Repuestos automotrices, motorepuestos y tiendas de celulares y tecnología',
    desc: 'Punto de venta para catálogos grandes: códigos OEM y alternos, varias listas de precio y varias tiendas en un solo sistema.',
    puntos: ['Códigos OEM y alternos por producto', 'Listas de precio y tope de descuento por rol', 'Varias tiendas con un mismo administrador'],
    icono: '<path d="M13.2 3a4 4 0 00-3.9 5L3.6 13.7a1.9 1.9 0 002.7 2.7L12 10.7a4 4 0 005-3.9l-2.4 2.4-2.8-2.8L14.2 4c-.3-.6-.6-.9-1-1z"/>',
  },
  {
    id: 'distribuidoras',
    nombre: 'Sistema para Distribuidoras y Rutas',
    corto: 'Distribuidoras',
    paraQuien: 'Distribuidoras y negocios con rutas de reparto',
    desc: 'Manifiestos de carga, facturas, comisiones de vendedores y rutas de reparto bajo control.',
    puntos: ['Manifiestos y control de facturas', 'Comisiones de vendedores calculadas solas', 'Reportes exportables en PDF'],
    icono: '<path d="M2 5.5h9.5v8H2z"/><path d="M11.5 8h3.2l2.8 3v2.5h-6"/><circle cx="6" cy="14.5" r="1.6"/><circle cx="14" cy="14.5" r="1.6"/>',
  },
  {
    id: 'clinicas',
    nombre: 'Sistema para Clínicas y Consultorios',
    corto: 'Clínicas',
    paraQuien: 'Clínicas dentales, clínicas médicas y consultorios',
    desc: 'Pacientes, citas y cobros en un solo lugar, para que la clínica deje de depender de agendas y cuadernos.',
    puntos: ['Registro de pacientes', 'Agenda de citas', 'Control de cobros'],
    icono: '<rect x="4.5" y="3.5" width="11" height="14" rx="2"/><path d="M8 3.5v-1h4v1M10 8.5v5M7.5 11h5"/>',
  },
  {
    id: 'control-de-asistencia',
    nombre: 'Control de Asistencia con Biométrico',
    corto: 'Control de asistencia',
    paraQuien: 'Alcaldías, instituciones y empresas',
    desc: 'Marcaje de entrada y salida con reloj biométrico y los reportes de asistencia listos, sin pasar datos a mano.',
    puntos: ['Se conecta al reloj biométrico (ZKTeco)', 'Entradas y salidas por empleado', 'Reportes de asistencia'],
    icono: '<circle cx="10" cy="10" r="7.5"/><path d="M10 5.5V10l3 2"/>',
  },
];

export const svgSistema = (icono: string, px = 20) =>
  `<svg width="${px}" height="${px}" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icono}</svg>`;

export const whatsappSistema = (nombre: string) =>
  'https://wa.me/50433012826?text=' + encodeURIComponent(`Hola, quiero información sobre el ${nombre.charAt(0).toLowerCase() + nombre.slice(1)}.`);
