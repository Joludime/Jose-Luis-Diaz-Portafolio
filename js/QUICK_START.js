/**
 * QUICK START - Guía rápida para comenzar
 * 
 * Este archivo te ayuda a configurar las funciones más comunes
 */

// ===== CONFIGURACIÓN INICIAL =====

// 1. CARGAR EN TU HTML
/*
    <script src="js/app.js"></script>
*/

// 2. O USAR MÓDULOS (Avanzado)
/*
    <script type="module">
        import { validarEmail } from './js/utils.js';
        import { fadeIn } from './js/animations.js';
    </script>
*/

// ===== FUNCIONES BÁSICAS DISPONIBLES =====

/**
 * VALIDACIONES
 */
// validarEmail(email)          ✓ Valida formato de email
// validarURL(url)              ✓ Valida URL
// validarTelefono(telefono)    ✓ Valida teléfono
// sanitizar(texto)             ✓ Limpia texto de XSS

/**
 * ALMACENAMIENTO
 */
// guardarEnLocal(clave, valor)   ✓ Guarda en localStorage
// obtenerDelLocal(clave)         ✓ Obtiene de localStorage
// eliminarDelLocal(clave)        ✓ Elimina de localStorage

/**
 * ANIMACIONES
 */
// fadeIn(elemento, duracion)     ✓ Aparición suave
// fadeOut(elemento, duracion)    ✓ Desaparición suave
// animarContador(elemento, fin)  ✓ Anima números
// efectoTyping(elemento, texto)  ✓ Efecto escritura
// vibrar(elemento)               ✓ Vibración
// efectoPulse(elemento)          ✓ Efecto latido

/**
 * UTILIDADES
 */
// mostrarNotificacion(msg, tipo) ✓ Notificaciones lindas
// copiarAlPortapapeles(texto)    ✓ Copiar texto
// obtenerParametroURL(nombre)    ✓ Parámetro de URL

// ===== SNIPPETS DE CÓDIGO =====

// Snippet 1: Validar formulario
/*
const email = document.querySelector('#email').value;
if (!validarEmail(email)) {
    mostrarNotificacion('Email inválido', 'error');
} else {
    mostrarNotificacion('Email válido', 'success');
}
*/

// Snippet 2: Guardar datos
/*
const usuario = { nombre: 'Juan', edad: 30 };
guardarEnLocal('usuario', usuario);
const recuperado = obtenerDelLocal('usuario');
console.log(recuperado);
*/

// Snippet 3: Animar elemento
/*
const elemento = document.querySelector('.mi-elemento');
fadeIn(elemento, 500);
setTimeout(() => fadeOut(elemento, 500), 2000);
*/

// Snippet 4: Efecto en scroll
/*
const elementos = document.querySelectorAll('.tarjeta');
elementos.forEach((el, i) => {
    setTimeout(() => fadeIn(el, 500), i * 200);
});
*/

// Snippet 5: Formulario con validación completa
/*
function enviarFormulario(e) {
    e.preventDefault();
    
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const mensaje = document.querySelector('#mensaje').value;
    
    if (!nombre || !email || !mensaje) {
        mostrarNotificacion('Completa todos los campos', 'error');
        return;
    }
    
    if (!validarEmail(email)) {
        mostrarNotificacion('Email inválido', 'error');
        return;
    }
    
    mostrarNotificacion('Enviando...', 'info');
    
    // Aquí irías tu lógica de envío
    setTimeout(() => {
        mostrarNotificacion('¡Mensaje enviado!', 'success');
        document.querySelector('form').reset();
    }, 1000);
}

document.querySelector('form').addEventListener('submit', enviarFormulario);
*/

// ===== REFERENCIA RÁPIDA =====

/**
 * VALIDACIONES
 * ============
 * 
 * validarEmail(email)
 * - Parámetro: string (email)
 * - Retorna: boolean
 * - Ejemplo: validarEmail('user@example.com') → true
 * 
 * validarURL(url)
 * - Parámetro: string (URL)
 * - Retorna: boolean
 * - Ejemplo: validarURL('https://example.com') → true
 * 
 * validarTelefono(telefono)
 * - Parámetro: string (teléfono con formato)
 * - Retorna: boolean
 * - Ejemplo: validarTelefono('+34 666 555 444') → true
 */

/**
 * ALMACENAMIENTO
 * ==============
 * 
 * guardarEnLocal(clave, valor)
 * - Parámetros: string (clave), * (valor)
 * - Ejemplo: guardarEnLocal('usuario', {nombre: 'Juan'})
 * 
 * obtenerDelLocal(clave)
 * - Parámetro: string (clave)
 * - Retorna: * (valor) o null
 * - Ejemplo: obtenerDelLocal('usuario')
 * 
 * eliminarDelLocal(clave)
 * - Parámetro: string (clave)
 * - Ejemplo: eliminarDelLocal('usuario')
 */

/**
 * ANIMACIONES
 * ===========
 * 
 * fadeIn(elemento, duracion)
 * - Parámetros: HTMLElement, number (ms)
 * - Ejemplo: fadeIn(document.querySelector('.box'), 500)
 * 
 * fadeOut(elemento, duracion)
 * - Parámetros: HTMLElement, number (ms)
 * - Ejemplo: fadeOut(document.querySelector('.box'), 500)
 * 
 * animarContador(elemento, fin, duracion)
 * - Parámetros: HTMLElement, number, number (ms)
 * - Ejemplo: animarContador(div, 100, 2000)
 * 
 * efectoTyping(elemento, texto, velocidad)
 * - Parámetros: HTMLElement, string, number (ms)
 * - Ejemplo: efectoTyping(h1, 'Hola', 50)
 * 
 * vibrar(elemento, intensidad, duracion)
 * - Parámetros: HTMLElement, number (px), number (ms)
 * - Ejemplo: vibrar(boton, 5, 200)
 * 
 * efectoPulse(elemento)
 * - Parámetro: HTMLElement
 * - Ejemplo: efectoPulse(img)
 */

/**
 * NOTIFICACIONES
 * ==============
 * 
 * mostrarNotificacion(mensaje, tipo)
 * - Parámetros: string, string ('success'|'error'|'info'|'warning')
 * - Ejemplo: mostrarNotificacion('¡Listo!', 'success')
 * - Posiciones: Superior derecha, desaparece después de 4s
 */

// ===== CASOS DE USO COMUNES =====

/**
 * Caso 1: Sistema de contacto completo
 */
function setupContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const mensaje = form.querySelector('textarea').value;
        
        // Validar
        if (!nombre || !email || !mensaje) {
            mostrarNotificacion('Completa todos los campos', 'error');
            return;
        }
        
        if (!validarEmail(email)) {
            mostrarNotificacion('Email inválido', 'error');
            return;
        }
        
        // Guardar borrador
        guardarEnLocal('formularioContacto', { nombre, email, mensaje });
        
        // Simular envío
        mostrarNotificacion('Enviando mensaje...', 'info');
        
        setTimeout(() => {
            mostrarNotificacion('¡Mensaje enviado correctamente!', 'success');
            form.reset();
        }, 1500);
    });
}

/**
 * Caso 2: Animar elementos al scrollear
 */
function setupScrollAnimations() {
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fadeIn(entry.target, 500);
                observador.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.skill-card, .project-card').forEach(el => {
        el.style.opacity = '0';
        observador.observe(el);
    });
}

/**
 * Caso 3: Copiar información fácilmente
 */
function setupCopyButtons() {
    document.querySelectorAll('[data-copy]').forEach(btn => {
        btn.addEventListener('click', async () => {
            const texto = btn.dataset.copy;
            if (await copiarAlPortapapeles(texto)) {
                mostrarNotificacion('¡Copiado!', 'success');
                btn.style.opacity = '0.5';
                setTimeout(() => { btn.style.opacity = '1'; }, 1000);
            }
        });
    });
}

/**
 * Caso 4: Tema claro/oscuro
 */
function setupThemeToggle() {
    const temaGuardado = obtenerDelLocal('tema') || 'claro';
    aplicarTema(temaGuardado);
    
    document.querySelector('[data-toggle-theme]')?.addEventListener('click', () => {
        const nuevoTema = temaGuardado === 'claro' ? 'oscuro' : 'claro';
        aplicarTema(nuevoTema);
        guardarEnLocal('tema', nuevoTema);
    });
}

function aplicarTema(tema) {
    if (tema === 'oscuro') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

// ===== INICIALIZAR TODO =====

document.addEventListener('DOMContentLoaded', () => {
    setupContactForm();
    setupScrollAnimations();
    setupCopyButtons();
    setupThemeToggle();
    console.log('✅ Portafolio inicializado correctamente');
});

// ===== DEBUGGING =====

// Descomenta para ver el estado de las funciones
/*
console.log('CONFIG:', window.CONFIG);
console.log('localStorage:', localStorage);
*/

// Para limpiar localStorage:
// localStorage.clear();

// Para ver todos los datos guardados:
// Object.keys(localStorage).forEach(k => console.log(k, obtenerDelLocal(k)));
