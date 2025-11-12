📚 GUÍA COMPLETA DE SETUP
========================

## 🚀 INICIO RÁPIDO (5 minutos)

### 1. Ver el portafolio
```bash
# Abre index.html en tu navegador
open index.html
# O click derecho > Abrir con navegador
```

### 2. Personalizar información
- Abre `DATOS_PERSONALIZACION.md`
- Rellena tus datos
- Copia en `index.html`

### 3. ¡Listo!
Tu portafolio está funcionando.

---

## 📁 ESTRUCTURA EXPLICADA

```
Taller-Copilot/
├── index.html                    ← Tu sitio web
├── styles.css                    ← Estilos y colores
├── DATOS_PERSONALIZACION.md      ← Plantilla para tus datos
├── README.md                     ← Este documento
└── js/                           ← Interactividad
    ├── app.js                    ← Archivo principal a cargar
    ├── main.js                   ← Script legacy (opcional)
    ├── utils.js                  ← Funciones útiles
    ├── animations.js             ← Efectos visuales
    ├── ejemplos.js               ← Casos de uso
    ├── QUICK_START.js            ← Guía rápida de code
    └── README.md                 ← Docs de JavaScript
```

---

## 🎯 PASOS PARA PERSONALIZAR

### PASO 1: Información Básica
Archivo: `index.html` líneas 40-44

```html
<h1>¡Hola! Soy [TU NOMBRE]</h1>
<p class="subtitle">[TU TÍTULO PROFESIONAL]</p>
```

**Ejemplos:**
- ¡Hola! Soy María → Desarrolladora Full Stack
- ¡Hola! Soy Carlos → Diseñador UX/UI

### PASO 2: Sobre Ti
Archivo: `index.html` líneas 48-57

Reemplaza los 3 párrafos con tu información:
- Párrafo 1: Tu experiencia profesional
- Párrafo 2: Empresas donde trabajaste
- Párrafo 3: Tus valores o motivaciones

### PASO 3: Habilidades
Archivo: `index.html` líneas 68-93

Actualiza 3 categorías:
1. Frontend → Tu stack web
2. Backend → Tu stack backend
3. Herramientas → Software que usas

### PASO 4: Proyectos
Archivo: `index.html` líneas 103-145

Reemplaza con tus 3 mejores proyectos:
- Nombre
- Descripción breve
- Año
- Tecnologías (tags)

### PASO 5: Contacto
Archivo: `index.html` líneas 167-181

Actualiza:
- Tu email
- Tu LinkedIn
- Tu GitHub

---

## 🎨 PERSONALIZAR COLORES

Archivo: `styles.css` líneas 7-18

```css
:root {
    --primary-color: #1e3a8a;      ← Azul oscuro (principal)
    --secondary-color: #3b82f6;    ← Azul medio
    --accent-color: #0ea5e9;       ← Cyan (acentos)
}
```

**Combos de colores recomendados:**

1. **Profesional Azul** (actual)
   - Primario: #1e3a8a
   - Acento: #0ea5e9

2. **Moderno Verde**
   - Primario: #065f46
   - Acento: #10b981

3. **Tech Púrpura**
   - Primario: #5b21b6
   - Acento: #ec4899

4. **Elegante Negro**
   - Primario: #111827
   - Acento: #3b82f6

---

## ⚙️ JAVASCRIPT - FUNCIONES CLAVE

### Validaciones
```javascript
validarEmail('user@example.com')      // true/false
validarURL('https://example.com')     // true/false
validarTelefono('+34 666 555 444')    // true/false
```

### Almacenamiento
```javascript
guardarEnLocal('usuario', {nombre: 'Juan'})
const datos = obtenerDelLocal('usuario')
eliminarDelLocal('usuario')
```

### Animaciones
```javascript
fadeIn(elemento, 500)              // Aparición
fadeOut(elemento, 500)             // Desaparición
efectoTyping(elemento, 'Hola', 50) // Escritura
vibrar(boton, 5, 200)              // Vibración
```

### Notificaciones
```javascript
mostrarNotificacion('¡Hola!', 'success')  // Verde
mostrarNotificacion('Error', 'error')     // Rojo
mostrarNotificacion('Info', 'info')       // Azul
```

Consulta `js/QUICK_START.js` para más ejemplos.

---

## 🔗 PUBLICAR TU PORTAFOLIO

### Opción 1: GitHub Pages (GRATIS)
```bash
# 1. Crea repo llamado: username.github.io
# 2. Sube los archivos
# 3. Tu sitio estará en: https://username.github.io
```

### Opción 2: Netlify (GRATIS)
```bash
# 1. Ve a netlify.com
# 2. Conecta tu repo de GitHub
# 3. Click en Deploy
# 4. Listo, tu sitio está online
```

### Opción 3: Vercel (GRATIS)
```bash
# 1. Ve a vercel.com
# 2. Importa tu proyecto
# 3. Click en Deploy
# 4. ¡Tu sitio está online!
```

---

## 📧 CONECTAR FORMULARIO DE CONTACTO

### Usar Formspree (Recomendado - Fácil)

1. Ve a https://formspree.io/
2. Crea una cuenta
3. Crea un nuevo formulario
4. Copia tu Form ID
5. Edita `js/app.js` línea ~175:

```javascript
// Descomentar esta sección:
// const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ nombre, email, mensaje })
// });
```

### Usar EmailJS (Alternativa)

1. Ve a https://www.emailjs.com/
2. Crea una cuenta
3. Configura tu email
4. Obtén tus keys
5. Carga el script en `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
```

6. Configura en tu JavaScript (ver ejemplos.js)

---

## 🎓 APRENDE MÁS

### Documentación JavaScript
- Abre `js/README.md` para docs completas
- Abre `js/QUICK_START.js` para snippets
- Abre `js/ejemplos.js` para casos de uso

### Recursos online
- [MDN - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [CSS Tricks](https://css-tricks.com/)
- [Puede Soporte](https://www.w3schools.com/)

---

## 🐛 SOLUCIONAR PROBLEMAS

### El portafolio no carga
- ✓ Asegúrate de abrir `index.html` (no desde Finder)
- ✓ Usa un navegador moderno (Chrome, Firefox, Safari)
- ✓ Abre DevTools (F12) para ver errores

### JavaScript no funciona
- ✓ Abre la consola (F12)
- ✓ Revisa si hay errores en rojo
- ✓ Asegúrate que `js/app.js` está cargado
- ✓ Refresca la página (Cmd+R)

### Formulario no envía emails
- ✓ Necesitas integrar Formspree o EmailJS
- ✓ Revisa `js/ejemplos.js` línea ~180
- ✓ Obtén tus keys y configura

### Colores no cambian
- ✓ Abre `styles.css`
- ✓ Modifica variables en `:root`
- ✓ Refresca el navegador (Cmd+Shift+R)

---

## ✅ CHECKLIST FINAL

- [ ] Nombre y título actualizados
- [ ] Sección "Sobre mí" personalizada
- [ ] Habilidades actualizadas
- [ ] Proyectos agregados
- [ ] Email, LinkedIn, GitHub actualizados
- [ ] Colores personalizados (opcional)
- [ ] Probado en móvil
- [ ] Probado en tablet
- [ ] Probado en desktop
- [ ] Publicado online
- [ ] Formulario funcional (opcional)

---

## 🎉 ¡FELICIDADES!

Tu portafolio profesional está listo. 

### Próximos pasos:
1. Comparte tu portafolio en redes sociales
2. Agrega el link en tu CV
3. Actualiza regularmente con nuevos proyectos
4. Pide feedback a otros desarrolladores
5. ¡Consigue mejores oportunidades!

---

**¿Preguntas?** Revisa los archivos README.md en cada carpeta.

**¡Éxito con tu portafolio!** 🚀
