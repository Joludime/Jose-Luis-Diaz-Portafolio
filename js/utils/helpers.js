/**
 * 🛠️ FUNCIONES AUXILIARES
 * =======================
 * 
 * Funciones de utilidad general para el proyecto.
 */

/**
 * Sanitiza texto para prevenir ataques XSS
 * @param {string} texto - Texto a sanitizar
 * @returns {string}
 */
export const sanitizar = (texto) => {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
};

/**
 * Debounce - Ejecuta función después de X milisegundos sin llamadas
 * @param {Function} func - Función a ejecutar
 * @param {number} espera - Milisegundos a esperar
 * @returns {Function}
 */
export const debounce = (func, espera = 300) => {
  let timeout;
  return function ejecutar(...args) {
    const contexto = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(contexto, args), espera);
  };
};

/**
 * Throttle - Ejecuta función máximo cada X milisegundos
 * @param {Function} func - Función a ejecutar
 * @param {number} limite - Milisegundos mínimos entre ejecuciones
 * @returns {Function}
 */
export const throttle = (func, limite = 300) => {
  let inThrottle;
  return function ejecutar(...args) {
    const contexto = this;
    if (!inThrottle) {
      func.apply(contexto, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limite);
    }
  };
};

/**
 * Delay - Pausa la ejecución por X milisegundos
 * @param {number} ms - Milisegundos
 * @returns {Promise}
 */
export const delay = (ms = 1000) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Obtiene un valor del localStorage
 * @param {string} clave - Clave del localStorage
 * @param {*} valorPorDefecto - Valor por defecto si no existe
 * @returns {*}
 */
export const obtenerDelLocal = (clave, valorPorDefecto = null) => {
  try {
    const valor = localStorage.getItem(clave);
    return valor ? JSON.parse(valor) : valorPorDefecto;
  } catch {
    return valorPorDefecto;
  }
};

/**
 * Guarda un valor en localStorage
 * @param {string} clave - Clave
 * @param {*} valor - Valor a guardar
 */
export const guardarEnLocal = (clave, valor) => {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
  } catch (error) {
    console.error('Error guardando en localStorage:', error);
  }
};

/**
 * Elimina un valor del localStorage
 * @param {string} clave - Clave a eliminar
 */
export const eliminarDelLocal = (clave) => {
  localStorage.removeItem(clave);
};

/**
 * Limpia todo el localStorage
 */
export const limpiarLocal = () => {
  localStorage.clear();
};

/**
 * Obtiene un valor del sessionStorage
 * @param {string} clave - Clave
 * @param {*} valorPorDefecto - Valor por defecto
 * @returns {*}
 */
export const obtenerDelSession = (clave, valorPorDefecto = null) => {
  try {
    const valor = sessionStorage.getItem(clave);
    return valor ? JSON.parse(valor) : valorPorDefecto;
  } catch {
    return valorPorDefecto;
  }
};

/**
 * Guarda un valor en sessionStorage
 * @param {string} clave - Clave
 * @param {*} valor - Valor a guardar
 */
export const guardarEnSession = (clave, valor) => {
  try {
    sessionStorage.setItem(clave, JSON.stringify(valor));
  } catch (error) {
    console.error('Error guardando en sessionStorage:', error);
  }
};

/**
 * Formatea un número como moneda
 * @param {number} numero - Número a formatear
 * @param {string} moneda - Código de moneda (USD, EUR, etc)
 * @returns {string}
 */
export const formatearMoneda = (numero, moneda = 'USD') => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: moneda,
  }).format(numero);
};

/**
 * Formatea una fecha
 * @param {Date|string} fecha - Fecha a formatear
 * @param {string} formato - Formato deseado (ej: 'es-ES')
 * @returns {string}
 */
export const formatearFecha = (fecha, formato = 'es-ES') => {
  const date = new Date(fecha);
  return date.toLocaleDateString(formato);
};

/**
 * Copia texto al portapapeles
 * @param {string} texto - Texto a copiar
 * @returns {Promise<boolean>}
 */
export const copiarAlPortapapeles = async (texto) => {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    return false;
  }
};

/**
 * Genera un ID único
 * @returns {string}
 */
export const generarID = () => {
  return `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Mezcla un array (shuffle)
 * @param {Array} array - Array a mezclar
 * @returns {Array}
 */
export const mezclarArray = (array) => {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
};

/**
 * Obtiene valores únicos de un array
 * @param {Array} array - Array
 * @returns {Array}
 */
export const obtenerUnicos = (array) => {
  return [...new Set(array)];
};

/**
 * Agrupa array por propiedad
 * @param {Array} array - Array
 * @param {string} propiedad - Propiedad para agrupar
 * @returns {Object}
 */
export const agruparPor = (array, propiedad) => {
  return array.reduce((grupos, item) => {
    const clave = item[propiedad];
    if (!grupos[clave]) {
      grupos[clave] = [];
    }
    grupos[clave].push(item);
    return grupos;
  }, {});
};

/**
 * Log con estilo en consola
 * @param {string} mensaje - Mensaje
 * @param {string} tipo - 'info', 'success', 'warning', 'error'
 */
export const log = (mensaje, tipo = 'info') => {
  const estilos = {
    info: 'color: #0ea5e9; font-weight: bold;',
    success: 'color: #10b981; font-weight: bold;',
    warning: 'color: #f59e0b; font-weight: bold;',
    error: 'color: #ef4444; font-weight: bold;',
  };
  console.log(`%c${mensaje}`, estilos[tipo] || estilos.info);
};

export default {
  sanitizar,
  debounce,
  throttle,
  delay,
  obtenerDelLocal,
  guardarEnLocal,
  eliminarDelLocal,
  limpiarLocal,
  obtenerDelSession,
  guardarEnSession,
  formatearMoneda,
  formatearFecha,
  copiarAlPortapapeles,
  generarID,
  mezclarArray,
  obtenerUnicos,
  agruparPor,
  log,
};
