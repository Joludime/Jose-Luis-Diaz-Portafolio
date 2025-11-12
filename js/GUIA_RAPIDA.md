⚡ GUÍA RÁPIDA DE JAVASCRIPT
============================

## 📂 Estructura de carpetas

```
js/
├── config/settings.js       ⚙️ Configuración global
├── utils/
│   ├── validators.js        ✅ Validar datos
│   ├── dom.js               🎯 Manipular DOM
│   └── helpers.js           🛠️ Funciones útiles
├── modules/
│   ├── navbar.js            🧭 Navegación
│   ├── formulario.js        📋 Formulario
│   └── animaciones.js       ✨ Animaciones
├── services/
│   └── api.js               🌐 Peticiones HTTP
└── main.js                  🚀 Iniciar app
```

---

## 🚀 Inicio Rápido

### 1. Selector de elementos (como jQuery)
```javascript
import { $, $$ } from './utils/dom.js';

const boton = $('#mi-boton');           // Un elemento
const todos = $$('.tarjetas');           // Todos los elementos
```

### 2. Manipular clases
```javascript
import { agregarClase, quitarClase, toggleClase } from './utils/dom.js';

agregarClase(elemento, 'activo');       // Agregar clase
quitarClase(elemento, 'activo');        // Quitar clase
toggleClase(elemento, 'activo');        // Alternar clase
```

### 3. Agregar eventos
```javascript
import { on, off } from './utils/dom.js';

on(boton, 'click', () => {
  console.log('Presionado');
});

off(boton, 'click', callback);  // Remover evento
```

### 4. Validar datos
```javascript
import { validarEmail, noEstaVacio } from './utils/validators.js';

if (validarEmail('user@ejemplo.com')) {
  console.log('✅ Email válido');
}
```

### 5. Guardar datos localmente
```javascript
import { guardarEnLocal, obtenerDelLocal } from './utils/helpers.js';

guardarEnLocal('usuario', { nombre: 'Juan' });
const usuario = obtenerDelLocal('usuario');
```

### 6. Log estilizado
```javascript
import { log } from './utils/helpers.js';

log('Éxito', 'success');      // Verde
log('Advertencia', 'warning');  // Naranja
log('Error', 'error');         // Rojo
log('Info', 'info');          // Azul
```

### 7. Funciones útiles
```javascript
import { debounce, delay, copiarAlPortapapeles } from './utils/helpers.js';

// Esperar a que termine de escribir (500ms)
const buscar = debounce((query) => {
  console.log('Buscando:', query);
}, 500);

// Pausa asíncrona
await delay(2000);  // Espera 2 segundos

// Copiar al portapapeles
copiarAlPortapapeles('Texto copiado');
```

---

## 🎯 Módulos

### Navbar (Navegación)
```javascript
const navbar = window.App.obtenerModulo('navbar');
navbar.navegarA('#contacto');  // Ir a sección
```

### Formulario
```javascript
const form = window.App.obtenerModulo('formulario');

// Validar
if (form.validarFormularioCompleto()) {
  const datos = form.obtenerDatos();
  console.log(datos);
}
```

### Animaciones
```javascript
const anim = window.App.obtenerModulo('animaciones');

anim.fadeIn(elemento, 500);           // Fade in
anim.vibrar(elemento, 10);            // Vibración
anim.pulso(elemento, 500);            // Pulso
anim.deslizar(elemento, 'arriba');    // Deslizar
```

---

## 🌐 Peticiones HTTP

```javascript
import { api } from './services/api.js';

// GET
const datos = await api.get('/endpoint');

// POST
await api.post('/endpoint', { nombre: 'Juan' });

// PUT
await api.put('/endpoint/1', { nombre: 'Actualizado' });

// DELETE
await api.delete('/endpoint/1');
```

---

## ⚙️ Configuración

```javascript
import CONFIG from './config/settings.js';

CONFIG.colors.primary;         // '#1e3a8a'
CONFIG.contact.email;          // 'tu-email@ejemplo.com'
CONFIG.animations.duration;    // 300ms
CONFIG.breakpoints.mobile;     // 480px
CONFIG.messages.success;       // 'Mensaje enviado...'
```

Edita `config/settings.js` para cambiar estos valores.

---

## 💡 Ejemplos Prácticos

### Buscar al escribir (con debounce)
```javascript
import { $ } from './utils/dom.js';
import { debounce } from './utils/helpers.js';

const input = $('#buscar');
const buscar = debounce((query) => {
  console.log('Buscando:', query);
}, 500);

input.addEventListener('input', (e) => {
  buscar(e.target.value);
});
```

### Animar al hacer scroll
```javascript
import Animaciones from './modules/animaciones.js';

const anim = window.App.obtenerModulo('animaciones');
anim.deslizar(elemento, 'arriba', 100);
```

### Copiar código con botón
```javascript
import { $ } from './utils/dom.js';
import { copiarAlPortapapeles } from './utils/helpers.js';

const boton = $('#copiar');
boton.addEventListener('click', async () => {
  await copiarAlPortapapeles('Código copiado');
  console.log('✅ Copiado');
});
```

### Validar y enviar formulario
```javascript
const form = window.App.obtenerModulo('formulario');

if (form.validarFormularioCompleto()) {
  const datos = form.obtenerDatos();
  // Enviar datos a tu servidor
}
```

---

## 🔍 Debug en Consola

```javascript
// Ver la app
console.log(window.App);

// Acceder a módulos
window.App.obtenerModulo('navbar');
window.App.obtenerModulo('formulario');
window.App.obtenerModulo('animaciones');

// Importar utilidades en consola (con devTools abierta)
// Abre la consola y copia-pega:
import { log } from './js/utils/helpers.js';
log('Hola desde consola', 'success');
```

---

## 📚 Funciones Disponibles

### `utils/dom.js`
- `$(selector)` - Buscar elemento
- `$$(selector)` - Buscar todos
- `crearElemento(tag, attrs, contenido)`
- `agregarClase()`, `quitarClase()`, `toggleClase()`
- `tieneClase()`, `establecerAtributos()`, `obtenerAtributo()`
- `on()`, `off()` - Eventos
- `establecerHTML()`, `obtenerTexto()`, `establecerTexto()`
- `mostrar()`, `ocultar()`
- `agregarAlDOM()`, `removerDelDOM()`

### `utils/validators.js`
- `validarEmail()`, `validarURL()`, `validarTelefono()`
- `noEstaVacio()`, `tieneMinimo()`, `tieneMaximo()`
- `validarFormulario()`

### `utils/helpers.js`
- `sanitizar()` - Prevenir XSS
- `debounce()`, `throttle()`, `delay()`
- `guardarEnLocal()`, `obtenerDelLocal()`
- `guardarEnSession()`, `obtenerDelSession()`
- `formatearMoneda()`, `formatearFecha()`
- `copiarAlPortapapeles()`, `generarID()`
- `mezclarArray()`, `obtenerUnicos()`, `agruparPor()`
- `log()` - Log estilizado

---

## 🎨 Colores del Proyecto

```javascript
import CONFIG from './config/settings.js';

CONFIG.colors = {
  primary: '#1e3a8a',      // Azul oscuro
  secondary: '#3b82f6',    // Azul
  accent: '#0ea5e9',       // Cyan
  success: '#10b981',      // Verde
  warning: '#f59e0b',      // Naranja
  error: '#ef4444',        // Rojo
  dark: '#1f2937',         // Gris oscuro
  light: '#f9fafb',        // Gris claro
};
```

---

## 🏁 Checklist

- [ ] He leído `ESTRUCTURA_COMPLETA.md`
- [ ] Entiendo cómo importar módulos
- [ ] Sé cómo validar datos
- [ ] Puedo manipular el DOM
- [ ] Conozco las animaciones disponibles
- [ ] Puedo hacer peticiones HTTP
- [ ] Puedo guardar datos localmente
- [ ] Puedo usar window.App en consola

---

**¡Estás listo para usar JavaScript profesionalmente! 🚀**

Para más detalles, lee `ESTRUCTURA_COMPLETA.md`
