/**
 * 🧭 MÓDULO NAVEGACIÓN
 * ====================
 * 
 * Maneja toda la funcionalidad de la barra de navegación.
 */

import { $ } from '../utils/dom.js';

class Navbar {
  constructor() {
    this.navbar = $('.navbar');
    this.navLinks = document.querySelectorAll('.nav-links a');
    this.init();
  }

  init() {
    this.agregarEventosNavegacion();
    this.manejarScroll();
  }

  /**
   * Agrega eventos a los enlaces de navegación
   */
  agregarEventosNavegacion() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const destino = link.getAttribute('href');
        this.navegarA(destino);
        this.resaltarEnlace(link);
      });
    });
  }

  /**
   * Navega a una sección específica
   * @param {string} destino - ID de la sección
   */
  navegarA(destino) {
    const elemento = document.querySelector(destino);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /**
   * Resalta el enlace activo
   * @param {Element} enlace - Enlace actual
   */
  resaltarEnlace(enlace) {
    this.navLinks.forEach(link => link.classList.remove('active'));
    enlace.classList.add('active');
  }

  /**
   * Maneja cambios al hacer scroll
   */
  manejarScroll() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }

      // Actualizar enlace activo según scroll
      this.actualizarEnlaceActivo();
    });
  }

  /**
   * Actualiza el enlace activo basado en la sección visible
   */
  actualizarEnlaceActivo() {
    const secciones = [
      { id: '#inicio', link: this.navLinks[0] },
      { id: '#sobre-mi', link: this.navLinks[1] },
      { id: '#habilidades', link: this.navLinks[2] },
      { id: '#proyectos', link: this.navLinks[3] },
      { id: '#contacto', link: this.navLinks[4] },
    ];

    for (let { id, link } of secciones) {
      const elemento = document.querySelector(id);
      if (elemento) {
        const rect = elemento.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          this.resaltarEnlace(link);
          break;
        }
      }
    }
  }
}

export default Navbar;
