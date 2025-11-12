📦 ESTRUCTURA JAVASCRIPT COMPLETA
==================================

## 📂 Carpetas y Archivos

```
js/
├── config/
│   └── settings.js              # ⚙️ Configuración global
├── utils/
│   ├── validators.js            # ✅ Validadores
│   ├── dom.js                   # 🎯 Manipulación del DOM
│   └── helpers.js               # 🛠️ Funciones auxiliares
├── modules/
│   ├── navbar.js                # 🧭 Módulo de navegación
│   ├── formulario.js            # 📋 Módulo de formulario
│   └── animaciones.js           # ✨ Módulo de animaciones
├── services/
│   └── api.js                   # 🌐 Servicio API
├── main.js                      # 🚀 Punto de entrada principal
├── app.js                       # (Legacy) Compatibilidad
├── README.md                    # 📖 Documentación
└── QUICK_START.js               # ⚡ Referencia rápida

```

---

## 🎯 DESCRIPCIÓN DE CADA SECCIÓN

### 📋 `config/` - Configuración
**Propósito:** Almacenar toda la configuración central.

**Archivo:** `settings.js`
- Colores del proyecto
- Tiempos de animación
- Información de contacto
- Breakpoints responsive
- Mensajes de la aplicación
- Keys de API (Formspree, EmailJS)

```javascript
import CONFIG from './config/settings.js';

console.log(CONFIG.colors.primary);        // '#1e3a8a'
console.log(CONFIG.contact.email);         // 'tu-email@ejemplo.com'
```

---

### ✅ `utils/validators.js` - Validadores
**Propósito:** Funciones para validar datos.

**Funciones principales:**
- `validarEmail(email)` - Valida emails
- `validarURL(url)` - Valida URLs
- `validarTelefono(telefono)` - Valida teléfonos
- `noEstaVacio(texto)` - Verifica campos vacíos
- `tieneMinimo(texto, minimo)` - Longitud mínima
- `tieneMaximo(texto, maximo)` - Longitud máxima
- `validarFormulario(datos, campos)` - Valida formulario completo

```javascript
import { validarEmail, validarFormulario } from './utils/validators.js';

if (validarEmail('user@ejemplo.com')) {
  console.log('✅ Email válido');
}

const resultado = validarFormulario(datos, [
  { nombre: 'email', tipo: 'email', etiqueta: 'Email' },
  { nombre: 'asunto', tipo: 'requerido', etiqueta: 'Asunto' }
]);
```

---

### 🎯 `utils/dom.js` - Manipulación del DOM
**Propósito:** Funciones para interactuar con el DOM de forma segura.

**Funciones principales:**
- `$(selector)` - Selecciona UN elemento (como jQuery)
- `$$(selector)` - Selecciona MÚLTIPLES elementos
- `crearElemento(tag, atributos, contenido)` - Crea elemento
- `agregarClase(elemento, clase)` - Agrega clase
- `quitarClase(elemento, clase)` - Quita clase
- `toggleClase(elemento, clase)` - Toggle clase
- `tieneClase(elemento, clase)` - Verifica clase
- `on(elemento, evento, callback)` - Agrega evento
- `off(elemento, evento, callback)` - Quita evento
- `establecerHTML(elemento, html)` - Cambia HTML
- `mostrar(elemento)` - Muestra elemento
- `ocultar(elemento)` - Oculta elemento

```javascript
import { $, $$, agregarClase, on } from './utils/dom.js';

// Seleccionar elemento
const boton = $('#mi-boton');

// Agegar clase
agregarClase(boton, 'activo');

// Agregar evento
on(boton, 'click', () => {
  console.log('Botón presionado');
});

// Seleccionar múltiples
const tarjetas = $$('.card');
tarjetas.forEach(tarjeta => {
  agregarClase(tarjeta, 'visible');
});
```

---

### 🛠️ `utils/helpers.js` - Funciones Auxiliares
**Propósito:** Utilidades generales para el proyecto.

**Funciones principales:**
- `sanitizar(texto)` - Previene ataques XSS
- `debounce(func, espera)` - Ejecuta después de X ms sin llamadas
- `throttle(func, limite)` - Ejecuta máximo cada X ms
- `delay(ms)` - Pausa con Promise
- `obtenerDelLocal(clave)` - Lee localStorage
- `guardarEnLocal(clave, valor)` - Guarda en localStorage
- `formatearMoneda(numero)` - Formatea moneda
- `formatearFecha(fecha)` - Formatea fecha
- `copiarAlPortapapeles(texto)` - Copia al portapapeles
- `generarID()` - Genera ID único
- `mezclarArray(array)` - Mezcla array
- `obtenerUnicos(array)` - Elementos únicos
- `agruparPor(array, propiedad)` - Agrupa por propiedad
- `log(mensaje, tipo)` - Log estilizado en consola

```javascript
import { 
  debounce, 
  guardarEnLocal, 
  formatearMoneda, 
  log 
} from './utils/helpers.js';

// Debounce - ejecutar después de dejar de escribir
const buscar = debounce((query) => {
  console.log('Buscando:', query);
}, 500);

// Guardar en localStorage
guardarEnLocal('usuario', { nombre: 'Juan' });

// Formatear moneda
console.log(formatearMoneda(1500.50, 'USD')); // '$1,500.50'

// Log estilizado
log('Aplicación iniciada', 'success');  // Verde
log('Advertencia', 'warning');          // Naranja
log('Error', 'error');                  // Rojo
```

---

### 🧭 `modules/navbar.js` - Módulo Navegación
**Propósito:** Maneja toda la barra de navegación.

**Clase:** `Navbar`

**Métodos principales:**
- `constructor()` - Inicializa navbar
- `navegarA(destino)` - Navega a sección
- `resaltarEnlace(enlace)` - Marca enlace activo
- `actualizarEnlaceActivo()` - Actualiza active al scroll

```javascript
import Navbar from './modules/navbar.js';

// Se carga automáticamente en main.js
const navbar = new Navbar();

// Navegar a sección
navbar.navegarA('#habilidades');
```

**Características:**
- ✅ Navegación suave (smooth scroll)
- ✅ Resalta enlace activo según sección visible
- ✅ Efecto visual al hacer scroll
- ✅ Detecta sección visible automáticamente

---

### 📋 `modules/formulario.js` - Módulo Formulario
**Propósito:** Maneja el formulario de contacto.

**Clase:** `Formulario`

**Métodos principales:**
- `validarEmail()` - Valida email
- `validarAsunto()` - Valida asunto
- `validarMensaje()` - Valida mensaje
- `validarFormularioCompleto()` - Valida todo
- `mostrarError(campo, mensaje)` - Muestra error visual
- `limpiarError(campo)` - Limpia error visual
- `obtenerDatos()` - Obtiene datos del form
- `reiniciar()` - Limpia formulario
- `enviarFormulario(datos)` - Envía formulario

```javascript
import Formulario from './modules/formulario.js';

// Se carga automáticamente en main.js
const form = new Formulario();

// Obtener datos del formulario
const datos = form.obtenerDatos();
console.log(datos); 
// { email: '...', asunto: '...', mensaje: '...' }

// Validar
if (form.validarFormularioCompleto()) {
  console.log('✅ Formulario válido');
}
```

**Características:**
- ✅ Validación en tiempo real
- ✅ Mensajes de error claros
- ✅ Prevención XSS (sanitización)
- ✅ Notificaciones visuales
- ✅ Limpiar errores automáticamente

---

### ✨ `modules/animaciones.js` - Módulo Animaciones
**Propósito:** Maneja animaciones y efectos visuales.

**Clase:** `Animaciones`

**Métodos principales:**
- `fadeIn(elemento, duracion)` - Animación fade in
- `efectoTyping(elemento, velocidad)` - Efecto de escritura
- `pulso(elemento, duracion)` - Efecto pulso
- `vibrar(elemento, intensidad)` - Vibración
- `deslizar(elemento, direccion, distancia)` - Deslizamiento

```javascript
import Animaciones from './modules/animaciones.js';

// Se carga automáticamente en main.js
const animaciones = new Animaciones();

// Animar elemento
const elemento = document.querySelector('.titulo');
animaciones.fadeIn(elemento, 800);

// Efecto typing
animaciones.efectoTyping(elemento, 50);

// Vibración
animaciones.vibrar(elemento, 10);
```

**Características:**
- ✅ Intersection Observer para animaciones al scroll
- ✅ Animación de contadores
- ✅ Efecto parallax
- ✅ Múltiples efectos listos para usar
- ✅ Timing personalizable

---

### 🌐 `services/api.js` - Servicio API
**Propósito:** Manejar peticiones HTTP y servicios externos.

**Clases:**
- `API` - Clase para peticiones HTTP
- `ServicioFormspree` - Integración con Formspree
- `ServicioEmailJS` - Integración con EmailJS

```javascript
import API, { ServicioFormspree, ServicioEmailJS } from './services/api.js';

// Usar API directamente
const api = new API('https://api.ejemplo.com');

const datos = await api.get('/usuarios');
await api.post('/usuarios', { nombre: 'Juan' });
await api.put('/usuarios/1', { nombre: 'Juan Actualizado' });
await api.delete('/usuarios/1');

// Usar Formspree
await ServicioFormspree.enviar('email@ejemplo.com', datos);

// Usar EmailJS
await ServicioEmailJS.enviar({
  nombre: 'Juan',
  email: 'juan@ejemplo.com',
  mensaje: 'Hola'
});
```

**Características:**
- ✅ Peticiones GET, POST, PUT, DELETE
- ✅ Manejo automático de errores
- ✅ Tokens de autenticación
- ✅ Integración con Formspree
- ✅ Integración con EmailJS
- ✅ Logging automático

---

### 🚀 `main.js` - Punto de Entrada
**Propósito:** Inicializa toda la aplicación.

**Clase:** `Aplicacion`

```javascript
import Aplicacion from './main.js';

// Se carga automáticamente al cargar la página
// Crea instancia global en window.App

// Acceder desde consola
console.log(window.App);
window.App.obtenerModulo('navbar');
window.App.obtenerModulo('formulario');
window.App.obtenerModulo('animaciones');
```

---

## 🔗 FLUJO DE EJECUCIÓN

```
1. Página carga
   ↓
2. HTML carga: <script type="module" src="js/main.js"></script>
   ↓
3. main.js carga
   ↓
4. Se crea Aplicacion()
   ↓
5. Aplicacion.iniciar()
   ├── Espera a DOMContentLoaded
   ↓
6. Aplicacion.cargarModulos()
   ├── Crea Navbar
   ├── Crea Formulario
   ├── Crea Animaciones
   ├── Muestra info en consola
   ↓
7. window.App disponible globalmente
   ↓
8. Aplicación lista
```

---

## 💡 CÓMO USAR EN TU CÓDIGO

### Opción 1: Usar módulos (RECOMENDADO)
```javascript
// En un archivo nuevo dentro de js/modules/
import { $ } from '../utils/dom.js';
import { validarEmail } from '../utils/validators.js';
import { log } from '../utils/helpers.js';

export class MiModulo {
  constructor() {
    log('Mi módulo cargado', 'success');
  }
}
```

### Opción 2: Usar desde window.App
```javascript
// En la consola del navegador
const navbar = window.App.obtenerModulo('navbar');
navbar.navegarA('#contacto');
```

### Opción 3: Mezclar ambos
```javascript
// En un archivo type="module"
import { log } from './utils/helpers.js';
import Aplicacion from './main.js';

export class MiExtension {
  constructor() {
    this.app = window.App;
    this.navbar = this.app.obtenerModulo('navbar');
  }
}
```

---

## 🔐 REGLAS IMPORTANTES

✅ **HACER:**
- Usar módulos ES6 para nuevo código
- Importar solo lo que necesites
- Documentar funciones con JSDoc
- Usar nombres descriptivos
- Mantener funciones pequeñas y enfocadas

❌ **NO HACER:**
- Variables globales (usar window.App)
- Código sin comentarios
- Funciones muy largas
- Olvidar validar entrada de usuario
- Perder configuración en CONFIG

---

## 📚 EJEMPLOS COMPLETOS

### Ejemplo 1: Animar elemento al click
```javascript
import { $ } from './utils/dom.js';
import Animaciones from './modules/animaciones.js';

const boton = $('#mi-boton');
const animaciones = new Animaciones();

boton.addEventListener('click', () => {
  animaciones.vibrar(boton, 10);
});
```

### Ejemplo 2: Validar y guardar datos
```javascript
import { validarEmail } from './utils/validators.js';
import { guardarEnLocal, log } from './utils/helpers.js';

const email = 'usuario@ejemplo.com';

if (validarEmail(email)) {
  guardarEnLocal('usuario_email', email);
  log('Email guardado', 'success');
} else {
  log('Email inválido', 'error');
}
```

### Ejemplo 3: Fetch con API
```javascript
import { api } from './services/api.js';
import { log } from './utils/helpers.js';

try {
  const usuarios = await api.get('/usuarios');
  log(`Se cargaron ${usuarios.length} usuarios`, 'success');
} catch (error) {
  log(`Error: ${error.message}`, 'error');
}
```

### Ejemplo 4: Manipular DOM
```javascript
import { $, $$, crearElemento, agregarAlDOM } from './utils/dom.js';

// Crear elemento
const tarjeta = crearElemento('div', { class: 'card' }, 'Contenido');

// Agregar al contenedor
const contenedor = $('#contenedor');
agregarAlDOM(contenedor, tarjeta);

// Seleccionar todos
const tarjetas = $$('.card');
console.log(`Total de tarjetas: ${tarjetas.length}`);
```

---

## 🚀 PRÓXIMOS PASOS

1. **Personaliza CONFIG** - Agrega tu info en `config/settings.js`
2. **Crea nuevos módulos** - Agrega funcionalidad en `modules/`
3. **Usa las utilidades** - Importa desde `utils/`
4. **Integra APIs** - Usa `services/api.js`
5. **Prueba en consola** - Accede a `window.App`

---

## 📞 SOPORTE

Si necesitas ayuda:
1. Revisa los ejemplos en este archivo
2. Consulta `QUICK_START.js` para referencias rápidas
3. Lee los comentarios en cada archivo
4. Abre DevTools (F12) para ver logs

---

**¡Tu estructura JavaScript está lista para crecer! 🚀**
