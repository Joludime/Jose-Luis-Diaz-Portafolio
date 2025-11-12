/**
 * EJEMPLOS DE USO DE LOS MÓDULOS JAVASCRIPT
 * 
 * Este archivo muestra cómo utilizar las funciones
 * disponibles en utils.js y animations.js
 */

// ===== EJEMPLOS DE UTILIDADES =====

/**
 * Ejemplo 1: Validar formulario
 */
function ejemplo_validarFormulario() {
    const email = "usuario@ejemplo.com";
    const telefono = "+34 666 555 444";
    const url = "https://www.ejemplo.com";
    
    // Usar con importación ES6:
    // import { validarEmail, validarTelefono, validarURL } from './utils.js';
    
    console.log('Email válido:', validarEmail(email));           // true
    console.log('Teléfono válido:', validarTelefono(telefono));  // true
    console.log('URL válida:', validarURL(url));                 // true
}

/**
 * Ejemplo 2: Almacenamiento en localStorage
 */
function ejemplo_almacenamiento() {
    const usuario = {
        nombre: 'Juan',
        email: 'juan@ejemplo.com',
        proyectos: 5
    };
    
    // Guardar
    guardarEnLocal('usuario', usuario);
    
    // Obtener
    const datosGuardados = obtenerDelLocal('usuario');
    console.log('Usuario guardado:', datosGuardados);
    
    // Eliminar
    // eliminarDelLocal('usuario');
}

/**
 * Ejemplo 3: Copiar al portapapeles
 */
async function ejemplo_copiar() {
    const texto = 'mi-email@ejemplo.com';
    
    const exito = await copiarAlPortapapeles(texto);
    if (exito) {
        console.log('Email copiado al portapapeles');
        mostrarNotificacion('¡Email copiado!', 'success');
    }
}

/**
 * Ejemplo 4: Obtener parámetros de URL
 */
function ejemplo_parametrosURL() {
    // Si la URL es: https://ejemplo.com?proyecto=web&año=2024
    
    const proyecto = obtenerParametroURL('proyecto');  // "web"
    const año = obtenerParametroURL('año');            // "2024"
    
    console.log('Proyecto:', proyecto);
    console.log('Año:', año);
}

/**
 * Ejemplo 5: Sanitizar entrada de usuario
 */
function ejemplo_sanitizar() {
    const usuarioInput = '<img src=x onerror="alert(\'XSS\')">';
    const textoSeguro = sanitizar(usuarioInput);
    
    console.log('Texto sanitizado:', textoSeguro);
    // Resultado: &lt;img src=x onerror=&quot;alert(&#39;XSS&#39;)&quot;&gt;
}

// ===== EJEMPLOS DE ANIMACIONES =====

/**
 * Ejemplo 1: Fade in y out
 */
function ejemplo_fade() {
    const elemento = document.querySelector('.mi-elemento');
    
    // Aparición
    fadeIn(elemento, 500);
    
    // Desaparición después de 2 segundos
    setTimeout(() => {
        fadeOut(elemento, 500);
    }, 2000);
}

/**
 * Ejemplo 2: Contador animado
 */
function ejemplo_contador() {
    const elemento = document.createElement('div');
    elemento.textContent = '0';
    document.body.appendChild(elemento);
    
    // Animar de 0 a 100 en 3 segundos
    animarContador(elemento, 100, 3000);
}

/**
 * Ejemplo 3: Efecto parallax
 */
function ejemplo_parallax() {
    const fondo = document.querySelector('.hero');
    
    // Efecto parallax con velocidad 0.5
    efectoParallax(fondo, 0.5);
}

/**
 * Ejemplo 4: Efecto typing
 */
function ejemplo_typing() {
    const elemento = document.querySelector('.titulo');
    
    // Escribir texto con efecto machine
    efectoTyping(elemento, 'Bienvenido a mi portafolio', 50);
}

/**
 * Ejemplo 5: Animar color
 */
function ejemplo_animarColor() {
    const elemento = document.querySelector('.boton');
    
    // Animar de azul a verde en 2 segundos
    animarColor(elemento, '#3b82f6', '#10b981', 2000);
}

/**
 * Ejemplo 6: Vibración
 */
function ejemplo_vibracion() {
    const boton = document.querySelector('button');
    
    boton.addEventListener('click', () => {
        vibrar(boton, 5, 200);
    });
}

/**
 * Ejemplo 7: Efecto pulse
 */
function ejemplo_pulse() {
    const elemento = document.querySelector('.destacado');
    
    // Crear efecto de latido continuo
    efectoPulse(elemento);
}

/**
 * Ejemplo 8: Animación en cascada
 */
function ejemplo_cascada() {
    const tarjetas = document.querySelectorAll('.card');
    const elementosArray = Array.from(tarjetas);
    
    // Animar con 100ms de delay entre cada una
    animacionCascada(elementosArray, 100);
}

// ===== CASOS DE USO REALES =====

/**
 * Caso Real 1: Validar y guardar datos de formulario
 */
function validarYGuardarFormulario(formData) {
    const { nombre, email, mensaje } = formData;
    
    // Validar
    if (!nombre || !email || !mensaje) {
        mostrarNotificacion('Completa todos los campos', 'error');
        return false;
    }
    
    if (!validarEmail(email)) {
        mostrarNotificacion('Email inválido', 'error');
        return false;
    }
    
    // Sanitizar
    const datosLimpios = {
        nombre: sanitizar(nombre),
        email: email,
        mensaje: sanitizar(mensaje),
        fecha: new Date().toISOString()
    };
    
    // Guardar
    guardarEnLocal('ultimoFormulario', datosLimpios);
    mostrarNotificacion('¡Datos guardados!', 'success');
    
    return true;
}

/**
 * Caso Real 2: Sistema de notificaciones mejorado
 */
function mostrarNotificacionAvanzada(mensaje, tipo, duracion = 4000) {
    mostrarNotificacion(mensaje, tipo);
    
    if (tipo === 'success') {
        console.log('✅ ' + mensaje);
    } else if (tipo === 'error') {
        console.error('❌ ' + mensaje);
    } else {
        console.log('ℹ️ ' + mensaje);
    }
}

/**
 * Caso Real 3: Galería con animaciones
 */
function crearGaleriaAnimada(imagenes) {
    const contenedor = document.createElement('div');
    contenedor.className = 'galeria';
    
    imagenes.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.style.opacity = '0';
        contenedor.appendChild(img);
        
        // Animar en cascada
        setTimeout(() => {
            fadeIn(img, 500);
        }, index * 200);
    });
    
    return contenedor;
}

/**
 * Caso Real 4: Barra de progreso animada
 */
function animarProgressBar(duracion = 2000) {
    const barra = document.createElement('div');
    barra.style.cssText = `
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #3b82f6, #10b981);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
    `;
    document.body.appendChild(barra);
    
    let progreso = 0;
    const intervalo = setInterval(() => {
        progreso += Math.random() * 30;
        if (progreso > 100) progreso = 100;
        barra.style.width = progreso + '%';
        
        if (progreso === 100) {
            clearInterval(intervalo);
            setTimeout(() => barra.remove(), 500);
        }
    }, 200);
}

/**
 * Caso Real 5: Sistema de temas (claro/oscuro)
 */
const TEMAS = {
    claro: {
        primario: '#3b82f6',
        fondo: '#ffffff',
        texto: '#1f2937'
    },
    oscuro: {
        primario: '#60a5fa',
        fondo: '#1f2937',
        texto: '#ffffff'
    }
};

function cambiarTema(nombre) {
    const tema = TEMAS[nombre];
    if (!tema) return;
    
    document.documentElement.style.setProperty('--primary-color', tema.primario);
    document.documentElement.style.setProperty('--light-gray', tema.fondo);
    document.documentElement.style.setProperty('--text-color', tema.texto);
    
    // Guardar preferencia
    guardarEnLocal('tema', nombre);
    
    mostrarNotificacion(`Tema ${nombre} activado`, 'info');
}

// Cargar tema guardado al iniciar
window.addEventListener('DOMContentLoaded', () => {
    const temaSguardado = obtenerDelLocal('tema') || 'claro';
    cambiarTema(temaSguardado);
});

// ===== EXPORTAR PARA MÓDULOS =====
// Si usas ES6 modules, descomenta esto:
/*
export {
    ejemplo_validarFormulario,
    ejemplo_almacenamiento,
    ejemplo_copiar,
    validarYGuardarFormulario,
    mostrarNotificacionAvanzada,
    crearGaleriaAnimada,
    cambiarTema
};
*/

console.log('📚 Ejemplos cargados. Revisa la consola y el código para más detalles.');
