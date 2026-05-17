# Trabajo Práctico: CI/CD - Programación de Vanguardia

Este repositorio contiene la resolución del trabajo práctico sobre Integración y Entrega Continua (CI/CD) para la materia **Programación de Vanguardia**. El proyecto demuestra la automatización de pruebas y el despliegue de una aplicación web utilizando **GitHub Actions** y **Netlify**.

## 🎯 Objetivo del Proyecto

El propósito principal es comprender y aplicar el flujo básico de integración continua utilizando herramientas reales de desarrollo. A través de este proyecto se logró:
- Configurar un repositorio en GitHub vinculado al entorno local.
- Construir un pipeline simple de integración continua (CI) que reacciona a eventos en el repositorio.
- Ejecutar automáticamente verificaciones y pruebas unitarias (Testing).
- Implementar el despliegue continuo (CD) hacia un servidor de Netlify.

## 📁 Estructura del Proyecto

El repositorio sigue una arquitectura de servidor web ligero utilizando Node.js y Express para servir contenido estático:

- `index.html`, `style.css`, `script.js`: Archivos estáticos del frontend de la aplicación web.
- `server.js`: Configuración del servidor Express que expone la aplicación web en el puerto 3000.
- `server.test.js`: Suite de pruebas automatizadas utilizando **Jest** y **Supertest** para validar el funcionamiento del servidor y el contenido servido.
- `package.json`: Definición de dependencias del proyecto (Express, Jest, Supertest) y scripts de ejecución.
- `.github/workflows/test.yml`: Archivo de configuración del pipeline de GitHub Actions (requerido para la automatización).

## 🚀 Flujo de CI/CD

El ecosistema automatizado funciona de la siguiente manera:

### 1. Integración Continua (CI) - GitHub Actions
Cada vez que se realiza un `push` a la rama `main`, GitHub Actions dispara automáticamente un workflow. Este pipeline:
1. Levanta un entorno basado en `ubuntu-latest`.
2. Descarga el código del repositorio (`actions/checkout`).
3. Instala el entorno de Node.js en su versión 20.
4. Ejecuta `npm install` para resolver y descargar las dependencias.
5. Ejecuta `npm test` para correr la suite de Jest. Si las pruebas (estado HTTP 200 y validación de texto en el HTML) pasan correctamente, el pipeline es exitoso.

### 2. Despliegue Continuo (CD) - Netlify
Una vez que el código es integrado y validado en la rama principal, la plataforma **Netlify** detecta los cambios automáticamente. Toma los archivos estáticos y actualiza el servidor de producción, haciendo que la nueva versión de la página esté disponible online de forma inmediata, sin intervención manual.

## 🛠️ Tecnologías Utilizadas

- **Backend:** Node.js, Express
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Testing:** Jest, Supertest
- **Control de Versiones & CI:** Git, GitHub, GitHub Actions
- **Hosting / CD:** Netlify

## 💻 Ejecución Local

Si deseás clonar y correr este proyecto en tu entorno local, seguí estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/grupo_6_tp-cicd-vanguardia.git](https://github.com/tu-usuario/grupo_6_tp-cicd-vanguardia.git)
   cd grupo_6_tp-cicd-vanguardia