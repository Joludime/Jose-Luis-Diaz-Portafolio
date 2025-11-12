// ===== INTEGRACIÓN DE MÓDULOS Y CONFIGURACIÓN =====

// Importar utilidades (cuando uses módulos)
// import * as utils from './utils.js';
// import * as animations from './animations.js';

/**
 * Configuración global del portafolio
 */
const CONFIG = {
    sitio: 'Mi Portafolio',
    autor: 'Tu Nombre',
    email: 'tu-email@ejemplo.com',
    version: '1.0.0',
    redes: {
        github: 'https://github.com/tu-usuario',
        linkedin: 'https://linkedin.com/in/tu-usuario',
        twitter: 'https://twitter.com/tu-usuario'
    },
    animaciones: {
        duracion: 500,
        velocidad: 'ease'
    }
};

/**
 * Inicializa el portafolio
 */
function inicializarPortafolio() {
    console.log(`🚀 ${CONFIG.sitio} - v${CONFIG.version}`);
    console.log(`Autor: ${CONFIG.autor}`);
    
    // Verificar que los elementos del DOM están disponibles
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', configurarEventListeners);
    } else {
        configurarEventListeners();
    }
}

/**
 * Configura todos los event listeners
 */
function configurarEventListeners() {
    // Navegación smooth scroll
    configurarSmoothScroll();
    
    // Formulario de contacto
    configurarFormularioContacto();
    
    // Animaciones en scroll
    configurarObservador();
    
    // Menú móvil (si lo implementas)
    configurarMenuMovil();
}

/**
 * Configura smooth scroll para navegación
 */
function configurarSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const destino = document.querySelector(enlace.getAttribute('href'));
            if (destino) {
                destino.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/**
 * Configura el formulario de contacto
 */
function configurarFormularioContacto() {
    const formulario = document.querySelector('.contact-form');
    if (!formulario) return;
    
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nombre = formulario.querySelector('input[type="text"]').value;
        const email = formulario.querySelector('input[type="email"]').value;
        const mensaje = formulario.querySelector('textarea').value;
        
        // Validaciones
        if (!nombre || !email || !mensaje) {
            mostrarNotificacion('Por favor completa todos los campos', 'error');
            return;
        }
        
        if (!validarEmail(email)) {
            mostrarNotificacion('Email inválido', 'error');
            return;
        }
        
        // Simular envío
        mostrarNotificacion('Enviando mensaje...', 'info');
        
        try {
            // Aquí iría tu lógica de envío (Formspree, EmailJS, tu backend, etc.)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            mostrarNotificacion('¡Mensaje enviado exitosamente!', 'success');
            formulario.reset();
        } catch (error) {
            mostrarNotificacion('Error al enviar el mensaje', 'error');
            console.error(error);
        }
    });
}

/**
 * Configura animaciones con Intersection Observer
 */
function configurarObservador() {
    const opciones = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observador.unobserve(entry.target);
            }
        });
    }, opciones);
    
    // Observar tarjetas
    document.querySelectorAll('.skill-card, .project-card').forEach(tarjeta => {
        tarjeta.style.opacity = '0';
        observador.observe(tarjeta);
    });
}

/**
 * Configura menú móvil (para versión futura)
 */
function configurarMenuMovil() {
    // Implementar cuando agregues menú responsivo
}

/**
 * Valida formato de email
 */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Muestra notificaciones elegantes
 */
function mostrarNotificacion(mensaje, tipo = 'info') {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.textContent = mensaje;
    
    const estilos = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        fontWeight: '600',
        zIndex: '10000',
        animation: 'slideIn 0.3s ease',
        maxWidth: '300px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        color: 'white'
    };
    
    const colores = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    
    Object.assign(notificacion.style, estilos);
    notificacion.style.backgroundColor = colores[tipo] || colores.info;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacion.remove(), 300);
    }, 4000);
}

/**
 * Agrega animaciones CSS al documento
 */
function agregarAnimacionesCss() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        .nav-links a.active {
            color: var(--accent-color);
            border-bottom: 2px solid var(--accent-color);
        }
    `;
    document.head.appendChild(style);
}

// Exportar configuración
window.CONFIG = CONFIG;

// Inicializar cuando se cargue el documento
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarPortafolio);
} else {
    agregarAnimacionesCss();
    inicializarPortafolio();
}
