# 📁 Carpeta JavaScript del Portafolio

Esta carpeta contiene toda la lógica interactiva y comportamiento dinámico del portafolio.

## 📄 Archivos

### 1. **`main.js`** - Script Principal
El punto de entrada del portafolio. Contiene:
- ✅ Smooth scroll automático para navegación
- ✅ Highlight activo en el menú al scrollear
- ✅ Validación del formulario de contacto
- ✅ Animaciones de aparición de elementos
- ✅ Utilidades generales

**Características:**
```javascript
// Navegación con smooth scroll
// Validación de email
// Notificaciones elegantes
// Observador de elementos
// Contador de proyectos
```

### 2. **`utils.js`** - Funciones Utilitarias
Funciones auxiliares reutilizables:
- 🔍 Validación de email, URL, teléfono
- 🔐 Sanitización de datos contra XSS
- 📋 Manejo de localStorage
- 📌 Trabajar con parámetros de URL
- 📋 Convertir objetos a string de URL
- 📋 Copiar al portapapeles

**Ejemplo de uso:**
```javascript
import { validarEmail, guardarEnLocal } from './utils.js';

validarEmail('usuario@ejemplo.com'); // true
guardarEnLocal('miDato', { nombre: 'Juan' });
```

### 3. **`animations.js`** - Efectos y Animaciones
Funciones para crear efectos visuales:
- ✨ Fade in/out
- 🎬 Animador de contadores
- 🌊 Parallax en scroll
- ⌨️ Efecto typing (escritura)
- 🎨 Animación de colores
- 📊 Scroll suave
- 💫 Vibración, pulse, cascada

**Ejemplo de uso:**
```javascript
import { fadeIn, efectoTyping, vibrar } from './animations.js';

fadeIn(elemento, 500);
efectoTyping(elemento, 'Hola mundo', 50);
vibrar(boton, 5, 200);
```

### 4. **`app.js`** - Inicialización y Configuración
Archivo principal de configuración:
- ⚙️ Configuración global del sitio
- 🎯 Inicialización del portafolio
- 📌 Gestión de event listeners
- 💬 Sistema de notificaciones
- 🎨 Inyección de keyframes CSS

**Configuración:**
```javascript
const CONFIG = {
    sitio: 'Mi Portafolio',
    autor: 'Tu Nombre',
    email: 'tu-email@ejemplo.com',
    redes: { ... }
};
```

## 🚀 Cómo Usar

### Opción 1: Uso Simple (Recomendado para empezar)
Carga solo `main.js` en tu HTML:

```html
<script src="js/main.js"></script>
```

### Opción 2: Usar `app.js` (Más estructurado)
```html
<script src="js/app.js"></script>
```

### Opción 3: Módulos ES6 (Avanzado)
```html
<script type="module">
    import { validarEmail } from './js/utils.js';
    import { fadeIn } from './js/animations.js';
    
    // Tu código aquí
</script>
```

## 🔧 Funciones Principales

### Validaciones
```javascript
validarEmail(email)          // Valida formato de email
validarURL(url)              // Valida URL
validarTelefono(telefono)    // Valida teléfono
```

### Animaciones
```javascript
fadeIn(elemento, duracion)           // Aparición suave
fadeOut(elemento, duracion)          // Desaparición suave
animarContador(elemento, fin)        // Anima números
efectoTyping(elemento, texto)        // Efecto de escritura
vibrar(elemento, intensidad)         // Vibración
efectoPulse(elemento)                // Efecto latido
```

### Almacenamiento
```javascript
guardarEnLocal(clave, valor)         // Guardar en localStorage
obtenerDelLocal(clave)               // Obtener de localStorage
eliminarDelLocal(clave)              // Eliminar de localStorage
```

### Utilidades
```javascript
sanitizar(texto)                     // Prevenir XSS
copiarAlPortapapeles(texto)         // Copiar al clipboard
obtenerParametroURL(nombre)         // Obtener parámetro GET
```

## 📝 Ejemplos Prácticos

### Validar formulario
```javascript
function enviarFormulario() {
    const email = document.querySelector('#email').value;
    
    if (!validarEmail(email)) {
        mostrarNotificacion('Email inválido', 'error');
        return;
    }
    
    mostrarNotificacion('¡Listo!', 'success');
}
```

### Animar elemento al scrollear
```javascript
const elemento = document.querySelector('.miElemento');
const observador = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fadeIn(entry.target);
            observador.unobserve(entry.target);
        }
    });
});
observador.observe(elemento);
```

### Guardar datos del usuario
```javascript
function guardarPerfil(nombre, email) {
    const perfil = { nombre, email, fecha: new Date() };
    guardarEnLocal('miPerfil', perfil);
    console.log('Perfil guardado');
}
```

## 🎨 Personalizando Configuración

Edita `app.js` línea 7-20:

```javascript
const CONFIG = {
    sitio: 'TU NOMBRE O EMPRESA',
    autor: 'TU NOMBRE COMPLETO',
    email: 'tu-email@ejemplo.com',
    version: '1.0.0',
    redes: {
        github: 'https://github.com/tu-usuario',
        linkedin: 'https://linkedin.com/in/tu-usuario',
        twitter: 'https://twitter.com/tu-usuario'
    }
};
```

## 🌐 Navegadores Soportados

✅ Chrome/Edge (últimas 2 versiones)
✅ Firefox (últimas 2 versiones)
✅ Safari (últimas 2 versiones)
✅ Mobile browsers

## 📚 Recursos Útiles

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [ES6 Modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)
- [Intersection Observer API](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API)
- [Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

## 🔌 Integración con Servicios

### Formspree (Envío de emails)
```javascript
// Agrega en app.js
async function enviarEmail(datos) {
    const response = await fetch('https://formspree.io/f/TU_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });
    return response.ok;
}
```

### EmailJS (Alternativa)
```javascript
// Requiere: emailjs-com library
emailjs.init('TU_PUBLIC_KEY');

function enviarConEmailJS(nombre, email, mensaje) {
    emailjs.send('service_id', 'template_id', {
        to_email: CONFIG.email,
        from_name: nombre,
        from_email: email,
        message: mensaje
    });
}
```

## ⚡ Optimización

- Todos los scripts son ligeros y rápidos
- Usa lazy loading para imágenes
- Implementa caché en localStorage
- Minimiza las repaints del DOM

## 🐛 Debugging

Abre la consola del navegador (F12) para ver:
```
🚀 Mi Portafolio - v1.0.0
Autor: Tu Nombre
```

Habilita logs en `app.js` para debugging.

## 📞 Soporte

Si tienes problemas:
1. Abre la consola (F12)
2. Revisa los mensajes de error
3. Valida que los archivos existan en la carpeta `js/`
4. Verifica que los scripts estén cargados en el HTML correcto

---

**Creado para potenciar tu portafolio** ⚡
