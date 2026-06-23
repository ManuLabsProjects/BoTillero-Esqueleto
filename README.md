# 🤖 Botillero-Esqueleto

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x_o_superior-green.svg" alt="Node.js">
  <img src="https://img.shields.io/badge/WhatsApp--web.js-1.23-blue.svg" alt="wwebjs">
  <img src="https://img.shields.io/github/license/ManuLabsProjects/BoTillero-Esqueleto.svg" alt="License">
</p>

<p align="center">
  <strong>El boilerplate oficial para crear asistentes automatizados de WhatsApp, modulares y de alto rendimiento. Inspirado en la documentación oficial de wwebjs.dev.</strong>
</p>

---

## 📖 Tabla de Contenidos
- [Sobre el Proyecto](#sobre-el-proyecto)
- [Requisitos del Entorno](#-requisitos-del-entorno)
- [Características](#-características)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Cómo Aprender y Extender](#-cómo-aprender-y-extender)
- [Prevención de Baneos](#-prevención-de-baneos)
- [Colaboración y Licencia](#-colaboración-y-licencia)

## 📌 Sobre el Proyecto
**Botillero-Esqueleto** es un entorno base optimizado para desarrollar bots de WhatsApp utilizando `whatsapp-web.js`. Diseñado bajo la filosofía de código abierto, este kit viene con todo listo (comandos multimedia, IA con Gemini y base de datos local SQLite) para que los estudiantes aprendan practicando directamente sobre código limpio.

## 🛠 Requisitos del Entorno
Para que el bot compile todas sus dependencias nativas de forma exitosa (especialmente herramientas de bases de datos y control del navegador invisible), necesitas tener instalado en tu sistema:

1. **Node.js (v18.x o superior):** El motor para ejecutar JavaScript en tu máquina.
2. **Python (v3.x recomendado):** Requerido de fondo por herramientas como `node-gyp` para compilar módulos nativos de C++ durante el `npm install`.
3. **Herramientas de Compilación (Según tu SO):**
   - *Windows:* `npm install --global windows-build-tools` desde una terminal de administrador (o tener instalado Visual Studio con C++).
   - *Linux/Ubuntu:* Ejecutar `sudo apt install build-essential`.

## ✨ Características
- **Modular (Command Handler):** Agrega funciones creando un solo archivo sin romper el núcleo.
- **Inteligente:** Conexión directa a la API de Google Gemini v1.5 Flash.
- **Persistente:** Base de datos ligera `better-sqlite3` que lee datos de manera sincrónica y sin latencia.
- **Manejo de Grupos:** Lógica lista para analizar participantes y menciones automáticas.

## 🚀 Instalación y Configuración

```bash
# 1. Clonar el repositorio
git clone https://github.com/ManuLabsProjects/BoTillero-Esqueleto.git

# 2. Entrar e instalar los módulos
cd Botillero-Esqueleto
npm install

# 3. Preparar variables de entorno
cp .env.example .env
# Abre el archivo .env e inyecta tu GEMINI_API_KEY

# 4. Modo desarrollo (Recarga automática al guardar cambios)
npm run dev
```

## 📂 Cómo Aprender y Extender

¡La idea es que tú construyas el bot! La estructura está dividida así:

* `src/commands/`: Cada archivo `.js` aquí dentro se convierte en un comando automático de WhatsApp. Mira `ping.js` o `sticker.js` para usarlos como plantillas.
* `src/services/`: Aquí vive la lógica de la Inteligencia Artificial (`ai.service.js`) y la base de datos local (`db.service.js`).

## 🛡️ Prevención de Baneos

Siguiendo las pautas de `wwebjs.dev`, para que Meta no detecte tu cuenta como un bot automatizado de spam, este esqueleto cuenta con:

* **`chat.sendStateTyping()`**: Simula el estado activo "escribiendo..." en el chat.
* **Retraso Humano**: Respuestas pausadas mediante temporizadores aleatorios (`setTimeout`).
* **`LocalAuth`**: Guarda las cookies de inicio de sesión de forma local para evitar tener que escanear el código QR repetidamente.

## 💡 Cómo Colaborar

Si quieres mejorar el código, corregir algún comando del Botillero o añadir nuevas funciones a la web, ¡eres bienvenido!

1. Haz un **Fork** del proyecto.
2. Crea una rama para tus cambios.
3. Envía un **Pull Request**.

## 📜 Filosofía Open Source

Todo el código en este repositorio está licenciado bajo la **Licencia MIT**. Creemos firmemente en el aprendizaje libre: **aquí no se lucra, se enseña**. Puedes usar, modificar y distribuir cualquier parte de estos proyectos para tus propias iniciativas.

---
_Desarrollado con código y café por Duende Manu._ ☕
