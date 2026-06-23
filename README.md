🤖 Botillero-Esqueleto... aquí no se lucra, se enseña

📌 Sobre el Proyecto
Botillero-Esqueleto es un entorno base optimizado para desarrollar bots de WhatsApp utilizando whatsapp-web.js. A diferencia de otros repositorios, este esqueleto integra de forma nativa persistencia de datos (SQLite) y motores de IA (Gemini), eliminando la latencia de servicios externos y permitiendo un despliegue rápido.

✨ Características
Modular: Sistema de comandos desacoplado; agrega funciones sin tocar el núcleo.

Inteligente: Integración nativa con Google Gemini v1.5 Flash.

Persistente: Base de datos better-sqlite3 para contadores y estadísticas instantáneas.

Seguro: Configuración de Puppeteer optimizada para evitar crasheos en entornos de servidor.

🚀 Instalación
Bash
# 1. Clonar el repositorio
git clone https://github.com/ManuLabsProjects/BoTillero-Esqueleto.git

# 2. Instalar dependencias
cd Botillero-Esqueleto
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Edita el archivo .env con tu GEMINI_API_KEY

# 4. Iniciar
npm start
🏗 Arquitectura
El proyecto sigue una estructura limpia para separar lógica de comandos y servicios:

Plaintext
src/
├── commands/      # Lógica de los comandos (!ping, !sticker, !stats)
├── handlers/      # Enrutador inteligente de mensajes
└── services/      # Lógica de Base de datos e IA
index.js           # Punto de entrada

🛡️ Prevención de Baneos

Meta penaliza comportamientos no humanos. Este esqueleto implementa:

chat.sendStateTyping(): Simula el estado de "escribiendo...".

Pausas aleatorias: Retrasos controlados antes de responder.

Sesión persistente: LocalAuth para reutilizar autenticación y evitar escaneos QR constantes.


## 📜 Filosofía Open Source
Todo el código en este repositorio está licenciado bajo la **Licencia MIT**.
Creemos firmemente en el aprendizaje libre: **aquí no se lucra, se enseña**. Puedes usar, modificar y distribuir cualquier parte de estos proyectos para tus propias iniciativas.

---

## 💡 Cómo Colaborar
Si quieres mejorar el código, corregir algún comando del Botillero o añadir nuevas funciones a la web, ¡eres bienvenido!
1. Haz un *Fork* del proyecto.
2. Crea una rama para tus cambios.
3. Envía un *Pull Request*.

*Desarrollado con código y café por Duende Manu.* ☕
