/**
 * ✨ MÓDULO ANIMACIONES
 * ====================
 * 
 * Maneja todas las animaciones y efectos visuales del portafolio.
 */

import { $$, agregarClase } from '../utils/dom.js';

class Animaciones {
  constructor() {
    this.elementosAnimados = [];
    this.init();
  }

  init() {
    this.crearObservadorInterseccion();
    this.animarAlScroll();
  }

  /**
   * Crea un Intersection Observer para animar elementos
   */
  crearObservadorInterseccion() {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          agregarClase(entrada.target, 'animate');
          observador.unobserve(entrada.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    // Observar tarjetas de habilidades
    $$('.skill-card').forEach(card => {
      observador.observe(card);
    });

    // Observar tarjetas de proyectos
    $$('.project-card').forEach(card => {
      observador.observe(card);
    });

    // Observar contenido de secciones
    $$('section > .container > p, section > .container > h2').forEach(elemento => {
      observador.observe(elemento);
    });
  }

  /**
   * Anima elementos al hacer scroll
   */
  animarAlScroll() {
    window.addEventListener('scroll', () => {
      this.animarContadores();
      this.efectoParallax();
    });
  }

  /**
   * Anima contadores de números
   */
  animarContadores() {
    const contadores = $$('[data-contador]');
    contadores.forEach(contador => {
      if (this.elementosAnimados.includes(contador)) return;
      
      const rect = contador.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        this.elementosAnimados.push(contador);
        this.ejecutarContador(contador);
      }
    });
  }

  /**
   * Ejecuta la animación del contador
   * @param {Element} elemento - Elemento contador
   */
  ejecutarContador(elemento) {
    const objetivo = parseInt(elemento.textContent);
    let actual = 0;
    const incremento = Math.ceil(objetivo / 50);
    
    const intervalo = setInterval(() => {
      actual += incremento;
      if (actual >= objetivo) {
        elemento.textContent = objetivo;
        clearInterval(intervalo);
      } else {
        elemento.textContent = actual;
      }
    }, 30);
  }

  /**
   * Efecto parallax en scroll
   */
  efectoParallax() {
    const hero = document.querySelector('.hero');
    if (hero) {
      const scrollY = window.scrollY;
      hero.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
    }
  }

  /**
   * Anima opacidad de un elemento
   * @param {Element} elemento - Elemento a animar
   * @param {number} duracion - Duración en ms
   */
  fadeIn(elemento, duracion = 500) {
    elemento.style.opacity = '0';
    elemento.style.transition = `opacity ${duracion}ms`;
    setTimeout(() => {
      elemento.style.opacity = '1';
    }, 10);
  }

  /**
   * Efecto de tipeo de texto
   * @param {Element} elemento - Elemento con texto
   * @param {number} velocidad - Velocidad en ms
   */
  efectoTyping(elemento, velocidad = 100) {
    const texto = elemento.textContent;
    elemento.textContent = '';
    let indice = 0;

    const escribir = () => {
      if (indice < texto.length) {
        elemento.textContent += texto[indice];
        indice++;
        setTimeout(escribir, velocidad);
      }
    };

    escribir();
  }

  /**
   * Pulso de animación
   * @param {Element} elemento - Elemento a animar
   * @param {number} duracion - Duración en ms
   */
  pulso(elemento, duracion = 500) {
    elemento.style.animation = `pulse ${duracion}ms ease-in-out`;
    setTimeout(() => {
      elemento.style.animation = '';
    }, duracion);
  }

  /**
   * Vibración de elemento
   * @param {Element} elemento - Elemento a vibrar
   * @param {number} intensidad - Intensidad de vibración en px
   */
  vibrar(elemento, intensidad = 5) {
    let posicion = 0;
    const intervalo = setInterval(() => {
      posicion = posicion === 0 ? intensidad : 0;
      elemento.style.transform = `translateX(${posicion}px)`;
    }, 50);

    setTimeout(() => {
      clearInterval(intervalo);
      elemento.style.transform = 'translateX(0)';
    }, 500);
  }

  /**
   * Animación de deslizamiento
   * @param {Element} elemento - Elemento
   * @param {string} direccion - 'arriba', 'abajo', 'izquierda', 'derecha'
   * @param {number} distancia - Distancia en px
   */
  deslizar(elemento, direccion = 'arriba', distancia = 100) {
    const posiciones = {
      arriba: { from: [0, distancia], to: [0, 0] },
      abajo: { from: [0, -distancia], to: [0, 0] },
      izquierda: { from: [-distancia, 0], to: [0, 0] },
      derecha: { from: [distancia, 0], to: [0, 0] },
    };

    const pos = posiciones[direccion] || posiciones.arriba;
    elemento.style.transform = `translate(${pos.from[0]}px, ${pos.from[1]}px)`;
    elemento.style.opacity = '0';

    setTimeout(() => {
      elemento.style.transition = 'all 0.5s ease-out';
      elemento.style.transform = `translate(${pos.to[0]}px, ${pos.to[1]}px)`;
      elemento.style.opacity = '1';
    }, 10);
  }
}

export default Animaciones;
