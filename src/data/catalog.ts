export interface Product {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  description: string;
  features: string[];
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'ai-pages',
    name: 'Páginas IA',
    icon: 'Bot',
    description: 'Creación ultra rápida con Inteligencia Artificial'
  },
  {
    id: 'web-ecommerce',
    name: 'Webs & E-commerce',
    icon: 'ShoppingBag',
    description: 'Presencia profesional y ventas online'
  },
  {
    id: 'advanced',
    name: 'Soluciones Avanzadas',
    icon: 'Cpu',
    description: 'Automatización y software a medida'
  }
];

export const PRODUCTS: Product[] = [
  // Categoría 1: IA
  {
    id: 'ai-a',
    name: 'IA Opción A',
    price: '$25.000 CLP',
    priceValue: 25000,
    description: 'Sin dominio personalizado',
    features: ['Diseño por IA', 'Hosting incluido', 'Listo en 24h', 'Optimizado para móvil'],
    category: 'ai-pages'
  },
  {
    id: 'ai-b',
    name: 'IA Opción B',
    price: '$55.000 CLP',
    priceValue: 55000,
    description: 'Con dominio personalizado',
    features: ['Diseño por IA', 'Dominio .cl/.com', 'Hosting incluido', 'Soporte prioritario'],
    category: 'ai-pages'
  },
  // Categoría 2: Webs y E-commerce
  {
    id: 'fastpage',
    name: 'Fastpage',
    price: '$168.980 CLP',
    priceValue: 168980,
    description: 'Presencia profesional rápida',
    features: ['Incluye Dominio/Hosting (1 año)', 'Diseño UX Premium', 'SEO Inicial', 'Formulario contacto'],
    category: 'web-ecommerce'
  },
  {
    id: 'plan-pro',
    name: 'Plan PRO Corporativo',
    price: '$309.990 CLP',
    priceValue: 309990,
    description: 'Gestión de stock (Automotoras/Inmobiliarias)',
    features: ['Panel de gestión', 'Filtros avanzados', 'Sincronización de stock', 'Multi-usuario'],
    category: 'web-ecommerce'
  },
  {
    id: 'mini-ecommerce',
    name: 'Mini E-commerce',
    price: '$259.990 CLP',
    priceValue: 259990,
    description: 'Hasta 30 productos',
    features: ['Pasarela de pagos', 'Gestión de pedidos', 'Cupones de descuento', 'Notificaciones'],
    category: 'web-ecommerce'
  },
  {
    id: 'ecommerce-full',
    name: 'E-commerce FULL',
    price: '$409.990 CLP',
    priceValue: 409990,
    description: '+1000 productos',
    features: ['Panel admin completo', 'Gestión logística', 'Reportes avanzados', 'Escalabilidad total'],
    category: 'web-ecommerce'
  },
  // Categoría 3: Soluciones Avanzadas
  {
    id: 'automation',
    name: 'Automatización IA',
    price: 'Desde $600.000 CLP',
    priceValue: 600000,
    description: 'Procesos inteligentes a medida',
    features: ['Integración API', 'Flujos automáticos', 'Bots de atención', 'Ahorro de tiempo'],
    category: 'advanced'
  },
  {
    id: 'custom-web',
    name: 'Software Web a medida',
    price: 'Desde $800.000 CLP',
    priceValue: 800000,
    description: 'Plataformas exclusivas',
    features: ['Arquitectura robusta', 'Panel personalizado', 'Base de datos', 'Mantenimiento'],
    category: 'advanced'
  },
  {
    id: 'corp-apps',
    name: 'Apps Corporativas',
    price: 'Desde $1.200.000 CLP',
    priceValue: 1200000,
    description: 'Aplicaciones móviles y web',
    features: ['Multi-plataforma', 'Notificaciones push', 'Offline mode', 'Diseño de marca'],
    category: 'advanced'
  }
];

export const WHATSAPP_NUMBER = '56987843957';
