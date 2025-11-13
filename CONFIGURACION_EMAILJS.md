# 📧 Guía de Configuración de EmailJS

## 🎯 ¿Qué es EmailJS?

EmailJS es un servicio **GRATUITO** que te permite enviar emails directamente desde tu sitio web sin necesidad de un servidor backend. Es perfecto para formularios de contacto en sitios estáticos como GitHub Pages.

---

## 🚀 Configuración Paso a Paso

### **Paso 1: Crear Cuenta en EmailJS** (5 minutos)

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"** (Registrarse)
3. Completa el registro con tu email
4. Verifica tu email (revisa tu bandeja de entrada)
5. Inicia sesión en tu cuenta

---

### **Paso 2: Conectar tu Email** (3 minutos)

1. En el dashboard, ve a **"Email Services"** en el menú izquierdo
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email:
   - **Gmail** (recomendado)
   - Outlook
   - Yahoo
   - Otro

#### Para Gmail (lo más común):
- Selecciona **"Gmail"**
- Haz clic en **"Connect Account"**
- Inicia sesión con tu cuenta de Gmail
- Autoriza EmailJS para enviar emails
- Dale un nombre a tu servicio (ej: "Portafolio Contact")
- Guarda el **Service ID** que aparece (lo necesitarás después)

---

### **Paso 3: Crear Template de Email** (5 minutos)

1. Ve a **"Email Templates"** en el menú izquierdo
2. Haz clic en **"Create New Template"**
3. Edita el template con este contenido:

#### **Subject (Asunto):**
```
Nuevo mensaje de {{from_name}} - {{subject}}
```

#### **Content (Contenido):**
```
Has recibido un nuevo mensaje desde tu portafolio:

Nombre: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu portafolio web.
```

4. Haz clic en **"Save"**
5. Guarda el **Template ID** que aparece (lo necesitarás después)

---

### **Paso 4: Obtener tu Public Key** (1 minuto)

1. Ve a **"Account"** → **"General"** en el menú
2. Busca la sección **"API Keys"**
3. Copia tu **Public Key**

---

### **Paso 5: Configurar en tu Portafolio** (2 minutos)

1. Abre el archivo `js/modules/formulario.js` en tu editor de código
2. Busca estas líneas (están al inicio de la clase Formulario):

```javascript
this.emailjsConfig = {
  serviceID: 'TU_SERVICE_ID',     // Cambiar por tu Service ID
  templateID: 'TU_TEMPLATE_ID',   // Cambiar por tu Template ID
  publicKey: 'TU_PUBLIC_KEY'      // Cambiar por tu Public Key
};
```

3. Reemplaza los valores:
   - `TU_SERVICE_ID` → El Service ID que guardaste en el Paso 2
   - `TU_TEMPLATE_ID` → El Template ID que guardaste en el Paso 3
   - `TU_PUBLIC_KEY` → El Public Key que copiaste en el Paso 4

#### Ejemplo:
```javascript
this.emailjsConfig = {
  serviceID: 'service_abc1234',
  templateID: 'template_xyz5678',
  publicKey: 'user_9876543210'
};
```

4. Guarda el archivo

---

### **Paso 6: Subir Cambios a GitHub** (1 minuto)

```bash
git add js/modules/formulario.js
git commit -m "Configurar EmailJS con mis credenciales"
git push
```

---

### **Paso 7: Probar el Formulario** (2 minutos)

1. Espera 2-3 minutos a que GitHub Pages se actualice
2. Ve a tu portafolio: https://joludime.github.io/Jose-Luis-Diaz-Portafolio/
3. Llena el formulario de contacto
4. Haz clic en **"Enviar mensaje"**
5. Deberías ver un mensaje de éxito: "¡Mensaje enviado correctamente! 🎉"
6. Revisa tu email - deberías recibir el mensaje

---

## ✅ ¡Listo! Tu Formulario ya Funciona

Ahora cada vez que alguien te contacte desde tu portafolio, recibirás un email directamente en tu bandeja de entrada.

---

## 📊 Límites del Plan Gratuito

EmailJS ofrece **200 emails gratis al mes**, que es más que suficiente para un portafolio personal.

---

## 🔧 Solución de Problemas

### ❌ **Error: "EmailJS no está configurado"**
- Verifica que hayas reemplazado los valores de configuración
- Asegúrate de que los IDs no tengan espacios adicionales

### ❌ **Error: "401 Unauthorized"**
- Tu Public Key no es correcta
- Verifica que hayas copiado correctamente tu Public Key de la cuenta

### ❌ **Error: "404 Service/Template not found"**
- Verifica que el Service ID y Template ID sean correctos
- Asegúrate de que el servicio y template estén activos en EmailJS

### ❌ **No recibo los emails**
- Verifica tu carpeta de spam
- Confirma que tu cuenta de Gmail esté conectada correctamente en EmailJS
- Prueba enviar un email de prueba desde el dashboard de EmailJS

---

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas:

1. Revisa la [documentación oficial de EmailJS](https://www.emailjs.com/docs/)
2. Verifica la consola del navegador (F12) para ver errores
3. Contacta al soporte de EmailJS (son muy rápidos respondiendo)

---

## 🎨 Personalización Adicional

### Cambiar el Template de Email

Puedes personalizar cómo se ven los emails que recibes:

1. Ve a **"Email Templates"** en EmailJS
2. Edita tu template
3. Agrega HTML para mejor formato
4. Guarda los cambios

### Agregar Más Campos

Si quieres agregar más campos al formulario (como teléfono):

1. Agrega el campo en `index.html`
2. Agrega la validación en `formulario.js`
3. Agrega la variable en el template de EmailJS

---

## 📝 Notas Importantes

- ✅ EmailJS es **100% gratuito** para hasta 200 emails/mes
- ✅ No necesitas servidor ni backend
- ✅ Funciona perfectamente con GitHub Pages
- ✅ Tus credenciales son seguras (solo la Public Key es visible)
- ⚠️ Nunca compartas tu Private Key (no la necesitas para esto)

---

**¡Felicitaciones! 🎉 Tu formulario de contacto ya está completamente funcional.**
