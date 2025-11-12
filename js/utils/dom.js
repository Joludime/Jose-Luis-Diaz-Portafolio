/**
 * 🎯 UTILIDADES DE DOM
 * ====================
 * 
 * Funciones para manipular el DOM de forma segura y eficiente.
 */

/**
 * Selecciona un elemento por selector
 * @param {string} selector - Selector CSS
 * @param {Element} padre - Elemento padre (default: document)
 * @returns {Element|null}
 */
export const $ = (selector, padre = document) => {
  return padre.querySelector(selector);
};

/**
 * Selecciona múltiples elementos por selector
 * @param {string} selector - Selector CSS
 * @param {Element} padre - Elemento padre (default: document)
 * @returns {NodeList}
 */
export const $$ = (selector, padre = document) => {
  return padre.querySelectorAll(selector);
};

/**
 * Crea un elemento HTML
 * @param {string} tag - Tag HTML
 * @param {Object} atributos - Atributos del elemento
 * @param {string} contenido - Contenido HTML
 * @returns {Element}
 */
export const crearElemento = (tag, atributos = {}, contenido = '') => {
  const elemento = document.createElement(tag);
  
  Object.entries(atributos).forEach(([clave, valor]) => {
    if (clave === 'class') {
      elemento.className = valor;
    } else if (clave === 'id') {
      elemento.id = valor;
    } else {
      elemento.setAttribute(clave, valor);
    }
  });
  
  if (contenido) {
    elemento.textContent = contenido;
  }
  
  return elemento;
};

/**
 * Agrega una clase a un elemento
 * @param {Element} elemento - Elemento
 * @param {string} clase - Nombre de la clase
 */
export const agregarClase = (elemento, clase) => {
  elemento?.classList.add(clase);
};

/**
 * Quita una clase de un elemento
 * @param {Element} elemento - Elemento
 * @param {string} clase - Nombre de la clase
 */
export const quitarClase = (elemento, clase) => {
  elemento?.classList.remove(clase);
};

/**
 * Toggle una clase en un elemento
 * @param {Element} elemento - Elemento
 * @param {string} clase - Nombre de la clase
 */
export const toggleClase = (elemento, clase) => {
  elemento?.classList.toggle(clase);
};

/**
 * Verifica si un elemento tiene una clase
 * @param {Element} elemento - Elemento
 * @param {string} clase - Nombre de la clase
 * @returns {boolean}
 */
export const tieneClase = (elemento, clase) => {
  return elemento?.classList.contains(clase) ?? false;
};

/**
 * Establece atributos en un elemento
 * @param {Element} elemento - Elemento
 * @param {Object} atributos - Objeto con atributos
 */
export const establecerAtributos = (elemento, atributos) => {
  Object.entries(atributos).forEach(([clave, valor]) => {
    elemento.setAttribute(clave, valor);
  });
};

/**
 * Obtiene el valor de un atributo
 * @param {Element} elemento - Elemento
 * @param {string} atributo - Nombre del atributo
 * @returns {string|null}
 */
export const obtenerAtributo = (elemento, atributo) => {
  return elemento?.getAttribute(atributo) ?? null;
};

/**
 * Agrega un evento a un elemento
 * @param {Element} elemento - Elemento
 * @param {string} evento - Tipo de evento
 * @param {Function} callback - Función a ejecutar
 */
export const on = (elemento, evento, callback) => {
  elemento?.addEventListener(evento, callback);
};

/**
 * Quita un evento de un elemento
 * @param {Element} elemento - Elemento
 * @param {string} evento - Tipo de evento
 * @param {Function} callback - Función a ejecutar
 */
export const off = (elemento, evento, callback) => {
  elemento?.removeEventListener(evento, callback);
};

/**
 * Agrega contenido HTML a un elemento
 * @param {Element} elemento - Elemento
 * @param {string} html - HTML a agregar
 */
export const establecerHTML = (elemento, html) => {
  if (elemento) {
    elemento.innerHTML = html;
  }
};

/**
 * Obtiene el contenido de texto de un elemento
 * @param {Element} elemento - Elemento
 * @returns {string}
 */
export const obtenerTexto = (elemento) => {
  return elemento?.textContent ?? '';
};

/**
 * Establece el contenido de texto de un elemento
 * @param {Element} elemento - Elemento
 * @param {string} texto - Texto a establecer
 */
export const establecerTexto = (elemento, texto) => {
  if (elemento) {
    elemento.textContent = texto;
  }
};

/**
 * Muestra un elemento
 * @param {Element} elemento - Elemento
 */
export const mostrar = (elemento) => {
  if (elemento) {
    elemento.style.display = '';
  }
};

/**
 * Oculta un elemento
 * @param {Element} elemento - Elemento
 */
export const ocultar = (elemento) => {
  if (elemento) {
    elemento.style.display = 'none';
  }
};

/**
 * Agrega elementos al DOM
 * @param {Element} padre - Elemento padre
 * @param {Element|Array} elementos - Elemento(s) a agregar
 */
export const agregarAlDOM = (padre, elementos) => {
  if (Array.isArray(elementos)) {
    elementos.forEach(el => padre.appendChild(el));
  } else {
    padre.appendChild(elementos);
  }
};

/**
 * Remueve un elemento del DOM
 * @param {Element} elemento - Elemento a remover
 */
export const removerDelDOM = (elemento) => {
  elemento?.remove();
};

export default {
  $,
  $$,
  crearElemento,
  agregarClase,
  quitarClase,
  toggleClase,
  tieneClase,
  establecerAtributos,
  obtenerAtributo,
  on,
  off,
  establecerHTML,
  obtenerTexto,
  establecerTexto,
  mostrar,
  ocultar,
  agregarAlDOM,
  removerDelDOM,
};
