<div align="center">
  <h1>UnfollowSpy</h1>
  <p><strong>Descubre quién no te sigue de vuelta en Instagram de forma 100% segura y local.</strong></p>
</div>

---

## Acerca del Proyecto

**UnfollowSpy** es una herramienta web moderna diseñada con un enfoque absoluto en la privacidad. A diferencia de las aplicaciones de terceros que requieren tus credenciales de acceso y comprometen tu cuenta, UnfollowSpy analiza tus datos exportados directamente desde Meta (Instagram) de manera **100% local en tu navegador**. Ningún dato personal o archivo se envía a servidores externos.

## Características Principales

*   **Privacidad Total:** Analiza tus seguidores sin necesidad de iniciar sesión o proveer contraseñas. Todo el procesamiento se realiza en tu equipo.
*   **Interfaz Moderna:** Diseño altamente pulido centrado en la usabilidad, destacando gradientes SVG inspirados en la marca, animaciones secuenciales y un entorno libre de distracciones informales.
*   **Análisis Temporal Integral:** Decodifica las marcas de tiempo (UNIX timestamps) estipuladas por Meta para indicarte, con exactitud, los días transcurridos desde que esa persona comenzó a seguirte.
*   **Validaciones Inteligentes y Estrictas:** El sistema previene errores mediante la verificación rigurosa de los archivos originales de exportación (`followers_1.json` y `following.json`).
*   **Rendimiento Óptimo:** Arquitectura SPA super rápida que procesa el cruce de datos al instante.

## Arquitectura y Tecnologías

*   **Core Frontend:** React 18
*   **Navegación:** React Router DOM v6
*   **Procesamiento de Build:** Vite
*   **Diseño Visual:** CSS Moderno (Variables UI, Animaciones Keyframes personalizadas, Flexbox/Grid)

## Guía de Instalación y Uso

Sigue estos pasos para arrancar el proyecto en tu máquina local:

1. **Abre tu terminal en el directorio del proyecto**:
   ```bash
   cd "Proyecto Instagram"
   ```

2. **Instala todas las dependencias necesarias**:
   ```bash
   npm install
   ```

3. **Ejecuta el servidor local de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Inicia la aplicación**:
   Abre en tu navegador web la dirección local arrojada por la terminal (por defecto `http://localhost:5173`).

## Instrucciones: Cómo obtener tus datos de Instagram

1. Ingresa a la Centro de Cuentas / Configuración de cuenta en Instagram (App o Web).
2. Dirígete a la sección **Tu actividad** > **Descargar tu información**.
3. Solicita una copia de tus datos y asegúrate de elegir el formato **JSON**.
4. Una vez notificado y descargado el archivo `.zip`, extráelo en tu computadora.
5. Inicia UnfollowSpy y sube los documentos `followers_1.json` y `following.json` (que localizarás dentro de la carpeta interna `connections/followers_and_following`).

---
<div align="center">
  <i>Audita tu perfil manteniendo el control absoluto de tus datos.</i>
</div>
