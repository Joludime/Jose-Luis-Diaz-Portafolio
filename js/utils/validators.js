/**
 * ✅ VALIDADORES
 * ==============
 * 
 * Funciones para validar diferentes tipos de datos.
 * Importa desde aquí para validaciones en el proyecto.
 */

/**
 * Valida si un email es correcto
 * @param {string} email - Email a validar
 * @returns {boolean}
 */
export const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Valida si una URL es válida
 * @param {string} url - URL a validar
 * @returns {boolean}
 */
export const validarURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Valida si un teléfono es válido (formato básico)
 * @param {string} telefono - Teléfono a validar
 * @returns {boolean}
 */
export const validarTelefono = (telefono) => {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return regex.test(telefono);
};

/**
 * Valida si un campo está vacío
 * @param {string} texto - Texto a validar
 * @returns {boolean}
 */
export const noEstaVacio = (texto) => {
  return texto && texto.trim().length > 0;
};

/**
 * Valida si un texto tiene longitud mínima
 * @param {string} texto - Texto a validar
 * @param {number} minimo - Longitud mínima
 * @returns {boolean}
 */
export const tieneMinimo = (texto, minimo = 3) => {
  return texto && texto.trim().length >= minimo;
};

/**
 * Valida si un texto tiene longitud máxima
 * @param {string} texto - Texto a validar
 * @param {number} maximo - Longitud máxima
 * @returns {boolean}
 */
export const tieneMaximo = (texto, maximo = 500) => {
  return texto && texto.trim().length <= maximo;
};

/**
 * Valida un formulario completo
 * @param {Object} datos - Objeto con los datos del formulario
 * @param {Array} campos - Array de campos a validar
 * @returns {Object} Objeto con validación y errores
 */
export const validarFormulario = (datos, campos) => {
  const errores = {};
  let valido = true;

  campos.forEach(campo => {
    if (campo.tipo === 'email') {
      if (!validarEmail(datos[campo.nombre])) {
        errores[campo.nombre] = `${campo.etiqueta} no es válido`;
        valido = false;
      }
    } else if (campo.tipo === 'requerido') {
      if (!noEstaVacio(datos[campo.nombre])) {
        errores[campo.nombre] = `${campo.etiqueta} es requerido`;
        valido = false;
      }
    } else if (campo.tipo === 'minimo') {
      if (!tieneMinimo(datos[campo.nombre], campo.valor)) {
        errores[campo.nombre] = `${campo.etiqueta} debe tener al menos ${campo.valor} caracteres`;
        valido = false;
      }
    }
  });

  return { valido, errores };
};

export default {
  validarEmail,
  validarURL,
  validarTelefono,
  noEstaVacio,
  tieneMinimo,
  tieneMaximo,
  validarFormulario,
};
