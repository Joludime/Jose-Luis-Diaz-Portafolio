/**
 * 🚀 PUNTO DE ENTRADA PRINCIPAL
 * =============================
 * 
 * Archivo principal que inicializa toda la aplicación.
 * Todos los módulos se cargan aquí.
 */

import CONFIG from './config/settings.js';
import Navbar from './modules/navbar.js';
import Formulario from './modules/formulario.js';
import Animaciones from './modules/animaciones.js';
import { log } from './utils/helpers.js';

/**
 * Clase principal de la aplicación
 */
class Aplicacion {
  constructor() {
    this.navbar = null;
    this.formulario = null;
    this.animaciones = null;
    this.iniciar();
  }

  /**
   * Inicia la aplicación
   */
  iniciar() {
    log('🚀 Iniciando portafolio...', 'info');
    
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.cargarModulos());
    } else {
      this.cargarModulos();
    }
  }

  /**
   * Carga todos los módulos
   */
  cargarModulos() {
    try {
      // Inicializar módulos
      this.navbar = new Navbar();
      this.formulario = new Formulario();
      this.animaciones = new Animaciones();

      log('✨ Portafolio cargado correctamente', 'success');
      this.mostrarInfo();
    } catch (error) {
      log(`Error al cargar módulos: ${error.message}`, 'error');
    }
  }

  /**
   * Muestra información en la consola
   */
  mostrarInfo() {
    console.log('%c📊 Configuración Cargada', 'font-size: 16px; font-weight: bold; color: #3b82f6;');
    console.table(CONFIG.colors);
    console.log('%c⚙️ Contacto', 'font-size: 14px; font-weight: bold; color: #10b981;');
    console.table(CONFIG.contact);
  }

  /**
   * Obtiene un módulo por nombre
   * @param {string} nombre - Nombre del módulo
   * @returns {Object}
   */
  obtenerModulo(nombre) {
    return this[nombre] || null;
  }
}

// Crear instancia global de la aplicación
window.App = new Aplicacion();

export default Aplicacion;
