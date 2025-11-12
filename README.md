# Mi Portafolio Profesional

Un portafolio web moderno, profesional y responsivo para mostrar tu perfil, habilidades y proyectos. Diseñado con HTML5, CSS3 y mejores prácticas web.

## 📁 Estructura del proyecto

```
/
├── index.html              # Archivo principal con la estructura HTML
├── styles.css              # Estilos CSS con diseño responsivo
├── README.md               # Guía principal
├── DATOS_PERSONALIZACION.md # Plantilla para tus datos
└── js/                     # 📁 Carpeta de JavaScript
    ├── app.js              # Configuración e inicialización
    ├── main.js             # Script principal (Legacy)
    ├── utils.js            # Funciones utilitarias
    ├── animations.js       # Efectos y animaciones
    ├── ejemplos.js         # Casos de uso y ejemplos
    ├── QUICK_START.js      # Guía rápida de inicio
    └── README.md           # Documentación de JavaScript
```

## 🎯 Secciones incluidas

### 1. **Encabezado/Hero** - Presentación visual impactante
### 2. **Sobre mí** - Descripción de tu trayectoria profesional
### 3. **Habilidades** - Organizadas por categorías
### 4. **Proyectos destacados** - Con descripción y tecnologías
### 5. **Contacto** - Formulario y enlaces a redes sociales
### 6. **Navegación y Footer** - Menú sticky y pie de página

## ⚙️ Funcionalidad JavaScript

La carpeta `js/` incluye todo lo necesario para interactividad:

✨ **Validaciones**
- Email, URL, teléfono
- Prevención de XSS

🎬 **Animaciones**
- Fade in/out
- Typing effect
- Parallax
- Scroll suave

💾 **Almacenamiento**
- localStorage
- Gestión de datos del usuario

📢 **Notificaciones**
- Sistema elegante de mensajes
- Diferentes tipos (success, error, info, warning)

Para más detalles, consulta `js/README.md`

## 🎨 Personalización

### Cambiar colores
Edita las variables en `styles.css` (líneas 7-18):
```css
:root {
    --primary-color: #1e3a8a;      /* Azul oscuro */
    --secondary-color: #3b82f6;    /* Azul medio */
    --accent-color: #0ea5e9;       /* Cyan/Azul claro */
    --text-color: #1f2937;         /* Texto oscuro */
    --light-gray: #f9fafb;         /* Fondos claros */
}
```

### Actualizar información personal

En `index.html`, busca y reemplaza en:

**Sección Hero (líneas 40-44):**
```html
<h1>¡Hola! Soy José Luis</h1>
<p class="subtitle">Desarrollador Full Stack apasionado...</p>
```

**Sección Contacto (líneas 167-181):**
```html
<a href="mailto:tu-email@ejemplo.com">
    tu-email@ejemplo.com
</a>
```

### Usar funciones JavaScript

Para validar, animar o guardar datos, consulta `js/QUICK_START.js` que contiene:
- Snippets de código listos para copiar
- Referencia rápida de todas las funciones
- Casos de uso comunes

### Agregar nuevos proyectos

Copia este bloque en la sección de proyectos:
```html
<div class="project-card">
    <div class="project-header">
        <h3>Nombre del Proyecto</h3>
        <span class="year">2025</span>
    </div>
    <p>Descripción del proyecto...</p>
    <div class="project-tags">
        <span class="tag">Tecnología1</span>
        <span class="tag">Tecnología2</span>
    </div>
</div>
```

## 🚀 Características

✅ **Responsivo** - Se adapta a todos los dispositivos (móvil, tablet, desktop)
✅ **Moderno** - Diseño limpio y contemporáneo
✅ **Profesional** - Tono cercano pero formal
✅ **Optimizado** - Carga rápida y accesible
✅ **Personalizable** - Fácil de adaptar a tu información
✅ **Sin dependencias** - Solo HTML5 y CSS3 puro
✅ **Interactivo** - JavaScript con validaciones, animaciones y efectos
✅ **Escalable** - Estructura modular y reutilizable

## 🔧 Características JavaScript

- **Validación de formularios** - Email, teléfono, URL
- **Animaciones suaves** - Fade, typing, parallax, scroll suave
- **Almacenamiento** - localStorage para guardar preferencias
- **Notificaciones** - Sistema elegante de mensajes
- **Efectos visuales** - Vibración, pulse, cascada
- **Utilidades** - Sanitización, copiar portapapeles, parámetros URL

## 💡 Ejemplos de texto profesional

### Para la sección "Sobre mí":
> "Soy un desarrollador apasionado por crear experiencias digitales que resuelvan problemas reales. Con X años de experiencia, he trabajado en proyectos que van desde startups innovadoras hasta empresas consolidadas."

### Para describir proyectos:
> "Desarrollé una solución que mejoró la eficiencia del proceso en un 40%, utilizando tecnologías modernas como React y Node.js. El proyecto fue completado en tiempo y dentro del presupuesto."

### Para el CTA:
- "Hablemos" (Amigable y directo)
- "Contáctame" (Formal)
- "Trabaja conmigo" (Proactivo)

## � Próximos pasos

1. Personaliza la información con tus datos
2. Actualiza los proyectos con tu portafolio real
3. Revisa `js/QUICK_START.js` para agregar más funcionalidad
4. Sube las imágenes de proyectos (opcional)
5. Publica en una plataforma (GitHub Pages, Netlify, Vercel, etc.)
6. Conecta el formulario a un servicio de email (Formspree, EmailJS, etc.)

## � Documentación

- **`DATOS_PERSONALIZACION.md`** - Plantilla para tus datos
- **`js/README.md`** - Documentación completa de JavaScript
- **`js/QUICK_START.js`** - Guía rápida con snippets
- **`js/ejemplos.js`** - Casos de uso reales

## 🔗 Recursos

- [MDN JavaScript Docs](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [CSS Tricks](https://css-tricks.com/)
- [HTML Living Standard](https://html.spec.whatwg.org/)
- [Formspree](https://formspree.io/) - Para formularios
- [EmailJS](https://www.emailjs.com/) - Para enviar emails

## 📝 Notas

- El formulario está listo, solo necesita integración backend
- Usa emojis con moderación para mantener profesionalismo
- Mantén descripciones concisas pero informativas
- Actualiza anualmente
- Pide feedback a colegas

---

**Creado con ❤️ para ayudarte a mostrar tu mejor versión profesional**