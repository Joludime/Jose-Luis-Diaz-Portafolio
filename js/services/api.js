/**
 * 🌐 SERVICIO API
 * ===============
 * 
 * Maneja todas las peticiones HTTP y comunicación con servicios externos.
 */

import CONFIG from '../config/settings.js';
import { log } from '../utils/helpers.js';

/**
 * Clase para manejar peticiones HTTP
 */
class API {
  constructor(baseURL = '') {
    this.baseURL = baseURL;
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  /**
   * Realiza una petición GET
   * @param {string} endpoint - Endpoint
   * @returns {Promise}
   */
  async get(endpoint) {
    try {
      log(`GET: ${endpoint}`, 'info');
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'GET',
        headers: this.headers,
      });
      return await this.manejarRespuesta(response);
    } catch (error) {
      log(`Error en GET: ${error.message}`, 'error');
      throw error;
    }
  }

  /**
   * Realiza una petición POST
   * @param {string} endpoint - Endpoint
   * @param {Object} datos - Datos a enviar
   * @returns {Promise}
   */
  async post(endpoint, datos) {
    try {
      log(`POST: ${endpoint}`, 'info');
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(datos),
      });
      return await this.manejarRespuesta(response);
    } catch (error) {
      log(`Error en POST: ${error.message}`, 'error');
      throw error;
    }
  }

  /**
   * Realiza una petición PUT
   * @param {string} endpoint - Endpoint
   * @param {Object} datos - Datos a enviar
   * @returns {Promise}
   */
  async put(endpoint, datos) {
    try {
      log(`PUT: ${endpoint}`, 'info');
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify(datos),
      });
      return await this.manejarRespuesta(response);
    } catch (error) {
      log(`Error en PUT: ${error.message}`, 'error');
      throw error;
    }
  }

  /**
   * Realiza una petición DELETE
   * @param {string} endpoint - Endpoint
   * @returns {Promise}
   */
  async delete(endpoint) {
    try {
      log(`DELETE: ${endpoint}`, 'info');
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'DELETE',
        headers: this.headers,
      });
      return await this.manejarRespuesta(response);
    } catch (error) {
      log(`Error en DELETE: ${error.message}`, 'error');
      throw error;
    }
  }

  /**
   * Maneja la respuesta de la petición
   * @param {Response} response - Respuesta HTTP
   * @returns {Promise}
   */
  async manejarRespuesta(response) {
    if (!response.ok) {
      const error = await response.json().catch(() => ({
        message: `HTTP ${response.status}: ${response.statusText}`,
      }));
      throw new Error(error.message || 'Error en la petición');
    }
    return await response.json();
  }

  /**
   * Establece un token de autenticación
   * @param {string} token - Token
   */
  establecerToken(token) {
    this.headers['Authorization'] = `Bearer ${token}`;
  }

  /**
   * Limpia el token de autenticación
   */
  limpiarToken() {
    delete this.headers['Authorization'];
  }
}

/**
 * Servicio para enviar formularios con Formspree
 */
export class ServicioFormspree {
  static async enviar(email, datos) {
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      return await response.json();
    } catch (error) {
      log(`Error Formspree: ${error.message}`, 'error');
      throw error;
    }
  }
}

/**
 * Servicio para enviar formularios con EmailJS
 */
export class ServicioEmailJS {
  static async enviar(datos) {
    try {
      // Requiere EmailJS SDK cargado en HTML
      if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS no está cargado');
      }

      const response = await emailjs.send(
        'SERVICE_ID',
        'TEMPLATE_ID',
        datos,
        'PUBLIC_KEY'
      );

      log('Correo enviado con EmailJS', 'success');
      return response;
    } catch (error) {
      log(`Error EmailJS: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Instancia global de API
export const api = new API();

export default API;
