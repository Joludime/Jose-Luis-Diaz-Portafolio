/**
 * 📋 MÓDULO FORMULARIO
 * ====================
 * 
 * Maneja toda la funcionalidad del formulario de contacto.
 */

import { $, $$, establecerTexto, agregarClase, quitarClase } from '../utils/dom.js';
import { validarEmail, noEstaVacio, tieneMinimo } from '../utils/validators.js';
import { sanitizar, log } from '../utils/helpers.js';

class Formulario {
  constructor() {
    this.formulario = $('#formulario-contacto');
    this.inputEmail = $('#email');
    this.inputAsunto = $('#asunto');
    this.inputMensaje = $('#mensaje');
    this.btnEnviar = $('.cta-button');
    this.errores = {};
    
    if (this.formulario) {
      this.init();
    }
  }

  init() {
    this.agregarEventosValidacion();
    this.manejarEnvio();
  }

  /**
   * Agrega eventos de validación en tiempo real
   */
  agregarEventosValidacion() {
    if (this.inputEmail) {
      this.inputEmail.addEventListener('blur', () => this.validarEmail());
      this.inputEmail.addEventListener('input', () => this.limpiarError('email'));
    }

    if (this.inputAsunto) {
      this.inputAsunto.addEventListener('blur', () => this.validarAsunto());
      this.inputAsunto.addEventListener('input', () => this.limpiarError('asunto'));
    }

    if (this.inputMensaje) {
      this.inputMensaje.addEventListener('blur', () => this.validarMensaje());
      this.inputMensaje.addEventListener('input', () => this.limpiarError('mensaje'));
    }
  }

  /**
   * Valida el email
   * @returns {boolean}
   */
  validarEmail() {
    const email = this.inputEmail?.value || '';
    
    if (!noEstaVacio(email)) {
      this.mostrarError('email', 'El email es requerido');
      return false;
    }
    
    if (!validarEmail(email)) {
      this.mostrarError('email', 'Email inválido');
      return false;
    }
    
    this.limpiarError('email');
    return true;
  }

  /**
   * Valida el asunto
   * @returns {boolean}
   */
  validarAsunto() {
    const asunto = this.inputAsunto?.value || '';
    
    if (!noEstaVacio(asunto)) {
      this.mostrarError('asunto', 'El asunto es requerido');
      return false;
    }
    
    if (!tieneMinimo(asunto, 5)) {
      this.mostrarError('asunto', 'El asunto debe tener al menos 5 caracteres');
      return false;
    }
    
    this.limpiarError('asunto');
    return true;
  }

  /**
   * Valida el mensaje
   * @returns {boolean}
   */
  validarMensaje() {
    const mensaje = this.inputMensaje?.value || '';
    
    if (!noEstaVacio(mensaje)) {
      this.mostrarError('mensaje', 'El mensaje es requerido');
      return false;
    }
    
    if (!tieneMinimo(mensaje, 10)) {
      this.mostrarError('mensaje', 'El mensaje debe tener al menos 10 caracteres');
      return false;
    }
    
    this.limpiarError('mensaje');
    return true;
  }

  /**
   * Valida el formulario completo
   * @returns {boolean}
   */
  validarFormularioCompleto() {
    const emailValido = this.validarEmail();
    const asuntoValido = this.validarAsunto();
    const mensajeValido = this.validarMensaje();
    
    return emailValido && asuntoValido && mensajeValido;
  }

  /**
   * Muestra un error en un campo
   * @param {string} campo - Nombre del campo
   * @param {string} mensaje - Mensaje de error
   */
  mostrarError(campo, mensaje) {
    const input = document.querySelector(`#${campo}`);
    if (input) {
      this.errores[campo] = mensaje;
      agregarClase(input, 'error');
      
      let errorElement = input.parentElement.querySelector('.error-message');
      if (!errorElement) {
        errorElement = document.createElement('small');
        errorElement.className = 'error-message';
        input.parentElement.appendChild(errorElement);
      }
      establecerTexto(errorElement, mensaje);
    }
  }

  /**
   * Limpia el error de un campo
   * @param {string} campo - Nombre del campo
   */
  limpiarError(campo) {
    const input = document.querySelector(`#${campo}`);
    if (input) {
      delete this.errores[campo];
      quitarClase(input, 'error');
      
      const errorElement = input.parentElement.querySelector('.error-message');
      if (errorElement) {
        errorElement.remove();
      }
    }
  }

  /**
   * Obtiene los datos del formulario
   * @returns {Object}
   */
  obtenerDatos() {
    return {
      email: sanitizar(this.inputEmail?.value || ''),
      asunto: sanitizar(this.inputAsunto?.value || ''),
      mensaje: sanitizar(this.inputMensaje?.value || ''),
    };
  }

  /**
   * Reinicia el formulario
   */
  reiniciar() {
    if (this.formulario) {
      this.formulario.reset();
      this.errores = {};
      
      const inputs = $$('input, textarea', this.formulario);
      inputs.forEach(input => {
        quitarClase(input, 'error');
      });
    }
  }

  /**
   * Maneja el envío del formulario
   */
  manejarEnvio() {
    if (this.formulario) {
      this.formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!this.validarFormularioCompleto()) {
          log('Hay errores en el formulario', 'warning');
          return;
        }
        
        const datos = this.obtenerDatos();
        await this.enviarFormulario(datos);
      });
    }
  }

  /**
   * Envía el formulario
   * @param {Object} datos - Datos del formulario
   */
  async enviarFormulario(datos) {
    try {
      // Cambiar botón a estado enviando
      if (this.btnEnviar) {
        this.btnEnviar.disabled = true;
        this.btnEnviar.textContent = 'Enviando...';
      }

      // Simular envío (reemplazar con tu API real)
      await new Promise(resolve => setTimeout(resolve, 2000));

      log('Formulario enviado correctamente', 'success');
      this.mostrarNotificacion('¡Mensaje enviado correctamente! 🎉', 'success');
      this.reiniciar();

    } catch (error) {
      log('Error al enviar formulario', 'error');
      this.mostrarNotificacion('Error al enviar el mensaje', 'error');
    } finally {
      if (this.btnEnviar) {
        this.btnEnviar.disabled = false;
        this.btnEnviar.textContent = 'Enviar Mensaje';
      }
    }
  }

  /**
   * Muestra una notificación
   * @param {string} mensaje - Mensaje a mostrar
   * @param {string} tipo - 'success' o 'error'
   */
  mostrarNotificacion(mensaje, tipo = 'success') {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);

    setTimeout(() => {
      notificacion.classList.add('mostrar');
    }, 100);

    setTimeout(() => {
      notificacion.classList.remove('mostrar');
      setTimeout(() => notificacion.remove(), 300);
    }, 3000);
  }
}

export default Formulario;
