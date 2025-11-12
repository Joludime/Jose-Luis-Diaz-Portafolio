// ===== UTILIDADES DE FORMULARIO =====

/**
 * Valida un email
 * @param {string} email - Email a validar
 * @returns {boolean} - True si es válido
 */
export function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Valida una URL
 * @param {string} url - URL a validar
 * @returns {boolean} - True si es válida
 */
export function validarURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * Sanitiza texto para evitar XSS
 * @param {string} texto - Texto a sanitizar
 * @returns {string} - Texto sanitizado
 */
export function sanitizar(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

/**
 * Valida teléfono (formato básico)
 * @param {string} telefono - Número de teléfono
 * @returns {boolean} - True si es válido
 */
export function validarTelefono(telefono) {
    const regex = /^\+?[\d\s\-\(\)]{10,}$/;
    return regex.test(telefono.replace(/\s/g, ''));
}

/**
 * Convierte objeto a string de URL
 * @param {object} datos - Datos a convertir
 * @returns {string} - String de URL
 */
export function objetoAURL(datos) {
    return Object.entries(datos)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

/**
 * Copia texto al portapapeles
 * @param {string} texto - Texto a copiar
 * @returns {Promise} - Promesa
 */
export async function copiarAlPortapapeles(texto) {
    try {
        await navigator.clipboard.writeText(texto);
        console.log('Texto copiado al portapapeles');
        return true;
    } catch (error) {
        console.error('Error al copiar:', error);
        return false;
    }
}

/**
 * Obtiene parámetro de URL
 * @param {string} nombre - Nombre del parámetro
 * @returns {string|null} - Valor del parámetro
 */
export function obtenerParametroURL(nombre) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nombre);
}

/**
 * Almacena datos en localStorage
 * @param {string} clave - Clave de almacenamiento
 * @param {*} valor - Valor a almacenar
 */
export function guardarEnLocal(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

/**
 * Obtiene datos de localStorage
 * @param {string} clave - Clave de almacenamiento
 * @returns {*} - Valor almacenado
 */
export function obtenerDelLocal(clave) {
    const valor = localStorage.getItem(clave);
    return valor ? JSON.parse(valor) : null;
}

/**
 * Elimina datos de localStorage
 * @param {string} clave - Clave a eliminar
 */
export function eliminarDelLocal(clave) {
    localStorage.removeItem(clave);
}
