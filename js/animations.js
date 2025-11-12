// ===== ANIMACIONES Y EFECTOS VISUALES =====

/**
 * Agrega animación de fade in a un elemento
 * @param {HTMLElement} elemento - Elemento a animar
 * @param {number} duracion - Duración en ms
 */
export function fadeIn(elemento, duracion = 500) {
    elemento.style.opacity = '0';
    elemento.style.transition = `opacity ${duracion}ms ease`;
    
    setTimeout(() => {
        elemento.style.opacity = '1';
    }, 10);
}

/**
 * Agrega animación de fade out a un elemento
 * @param {HTMLElement} elemento - Elemento a animar
 * @param {number} duracion - Duración en ms
 */
export function fadeOut(elemento, duracion = 500) {
    elemento.style.transition = `opacity ${duracion}ms ease`;
    elemento.style.opacity = '0';
    
    setTimeout(() => {
        elemento.style.display = 'none';
    }, duracion);
}

/**
 * Anima contador de números
 * @param {HTMLElement} elemento - Elemento con el número
 * @param {number} fin - Número final
 * @param {number} duracion - Duración en ms
 */
export function animarContador(elemento, fin, duracion = 2000) {
    let inicio = parseInt(elemento.textContent) || 0;
    let incremente = (fin - inicio) / (duracion / 16);
    let actual = inicio;
    
    const intervalo = setInterval(() => {
        actual += incremente;
        if (actual >= fin) {
            elemento.textContent = fin;
            clearInterval(intervalo);
        } else {
            elemento.textContent = Math.floor(actual);
        }
    }, 16);
}

/**
 * Efecto parallax en scroll
 * @param {HTMLElement} elemento - Elemento con parallax
 * @param {number} velocidad - Velocidad del efecto (0-1)
 */
export function efectoParallax(elemento, velocidad = 0.5) {
    window.addEventListener('scroll', () => {
        const yOffset = window.scrollY;
        elemento.style.transform = `translateY(${yOffset * velocidad}px)`;
    });
}

/**
 * Crea efecto de typing (escritura)
 * @param {HTMLElement} elemento - Elemento donde escribir
 * @param {string} texto - Texto a escribir
 * @param {number} velocidad - Velocidad en ms
 */
export function efectoTyping(elemento, texto, velocidad = 50) {
    let index = 0;
    elemento.textContent = '';
    
    function escribir() {
        if (index < texto.length) {
            elemento.textContent += texto.charAt(index);
            index++;
            setTimeout(escribir, velocidad);
        }
    }
    
    escribir();
}

/**
 * Anima cambio de color de fondo
 * @param {HTMLElement} elemento - Elemento a animar
 * @param {string} colorInicio - Color inicial
 * @param {string} colorFin - Color final
 * @param {number} duracion - Duración en ms
 */
export function animarColor(elemento, colorInicio, colorFin, duracion = 1000) {
    elemento.style.backgroundColor = colorInicio;
    elemento.style.transition = `background-color ${duracion}ms ease`;
    
    setTimeout(() => {
        elemento.style.backgroundColor = colorFin;
    }, 10);
}

/**
 * Agrega estilos de animación keyframes dinámicamente
 * @param {string} nombre - Nombre de la animación
 * @param {string} keyframes - CSS keyframes
 */
export function agregarAnimacion(nombre, keyframes) {
    const style = document.createElement('style');
    style.textContent = `@keyframes ${nombre} { ${keyframes} }`;
    document.head.appendChild(style);
}

/**
 * Anima scroll suave a un elemento
 * @param {HTMLElement} elemento - Elemento destino
 * @param {number} duracion - Duración en ms
 */
export function scrollSuave(elemento, duracion = 1000) {
    const targetPosition = elemento.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let progress = 0;
    
    const animation = setInterval(() => {
        progress += 10;
        const ease = progress / duracion;
        window.scrollBy(0, distance * (ease - Math.cos(ease) / Math.PI) * 10);
        
        if (progress >= duracion) {
            clearInterval(animation);
        }
    }, 10);
}

/**
 * Crea efecto de vibración en elemento
 * @param {HTMLElement} elemento - Elemento a vibrar
 * @param {number} intensidad - Intensidad en px
 * @param {number} duracion - Duración en ms
 */
export function vibrar(elemento, intensidad = 5, duracion = 200) {
    const intervalo = 10;
    let tiempo = 0;
    
    const animacion = setInterval(() => {
        tiempo += intervalo;
        const offset = Math.sin(tiempo / 50) * intensidad;
        elemento.style.transform = `translateX(${offset}px)`;
        
        if (tiempo >= duracion) {
            clearInterval(animacion);
            elemento.style.transform = 'translateX(0)';
        }
    }, intervalo);
}

/**
 * Crea efecto pulse (latido)
 * @param {HTMLElement} elemento - Elemento a animar
 */
export function efectoPulse(elemento) {
    agregarAnimacion('pulse', `
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.1); opacity: 0.8; }
        100% { transform: scale(1); opacity: 1; }
    `);
    elemento.style.animation = 'pulse 2s infinite';
}

/**
 * Anima aparición en cascada (stagger)
 * @param {HTMLElement[]} elementos - Array de elementos
 * @param {number} delayEntre - Delay entre elementos en ms
 */
export function animacionCascada(elementos, delayEntre = 100) {
    elementos.forEach((elemento, index) => {
        setTimeout(() => {
            fadeIn(elemento, 500);
        }, index * delayEntre);
    });
}
