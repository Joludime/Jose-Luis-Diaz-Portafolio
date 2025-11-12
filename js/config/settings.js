/**
 * 🔧 CONFIGURACIÓN GLOBAL DEL PROYECTO
 * =====================================
 * 
 * Archivo central para toda la configuración del portafolio.
 * Mantén aquí valores globales, colores, mensajes, etc.
 */

export const CONFIG = {
  // 🎨 Colores
  colors: {
    primary: '#1e3a8a',
    secondary: '#3b82f6',
    accent: '#0ea5e9',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    dark: '#1f2937',
    light: '#f9fafb',
  },

  // ⏱️ Tiempos de animación
  animations: {
    duration: 300,
    easing: 'ease-in-out',
    fadeInSpeed: 800,
    slideSpeed: 600,
  },

  // 📧 Información de contacto
  contact: {
    nombre: 'Jose Luis Diaz',
    email: 'tu-email@ejemplo.com',
    phone: '+1 (123) 456-7890',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/Joludime',
    twitter: 'https://twitter.com/tuusuario',
  },

  // 📱 Breakpoints responsive
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    wide: 1440,
    ultraWide: 1920,
  },

  // 🎯 Mensajes
  messages: {
    success: 'Mensaje enviado correctamente ✨',
    error: 'Error al enviar el mensaje. Intenta de nuevo.',
    validation: 'Por favor, completa todos los campos.',
    loading: 'Enviando...',
  },

  // 🔑 API Keys (cuando los necesites)
  api: {
    formspree: '', // Agrega tu key de Formspree
    emailjs: '', // Agrega tu key de EmailJS
  },

  // 📊 Google Analytics (opcional)
  analytics: {
    enabled: false,
    id: '',
  },

  // 👤 Información adicional
  about: {
    titulo: 'Desarrollador Web Full Stack',
    descripcion: 'Soy un desarrollador web apasionado por crear soluciones innovadoras y funcionales.',
    años_experiencia: 2,
    proyectos_completados: 10,
    dedicacion: '100%',
  },
};

export default CONFIG;
