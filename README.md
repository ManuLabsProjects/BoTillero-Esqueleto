# 🤖 Botillero-Esqueleto

Bienvenido al **Boilerplate Oficial de ManuLabs** para la creación de bots de WhatsApp modulares y seguros. 

Este proyecto utiliza `whatsapp-web.js` y ha sido estructurado siguiendo las mejores prácticas recomendadas por la comunidad de GitHub para evitar bloqueos, gestionar la memoria eficientemente y mantener el código escalable.

## 🚀 Inicio Rápido

1. **Clona el repositorio:**
   \`\`\`bash
   git clone https://github.com/ManuLabsProjects/Botillero-Esqueleto.git
   cd Botillero-Esqueleto
   \`\`\`
2. **Instala las dependencias:**
   \`\`\`bash
   npm install
   \`\`\`
3. **Configura el entorno:**
   Renombra el archivo \`.env.example\` a \`.env\` y configura tu API Key de Gemini (opcional) y el prefijo de tus comandos.
4. **Enciende el Bot:**
   \`\`\`bash
   npm start
   \`\`\`
   Escanea el código QR que aparecerá en tu terminal con tu WhatsApp.

## 🛡️ Prevención de Baneos (Best Practices)
Basado en los reportes recientes de la comunidad de `whatsapp-web.js`, este esqueleto promueve:
- **Uso de `LocalAuth`:** Para evitar autenticaciones masivas.
- **Simulación Humana:** Los comandos de ejemplo (ver `src/commands/ping.js`) integran `chat.sendStateTyping()` y retrasos (`setTimeout`) controlados. Un bot que responde en milisegundos es un bot baneado.

## 📂 Arquitectura Modular
No metas todos tus `if/else` en el `index.js`. Si quieres crear un comando nuevo (ej. `!stock`), simplemente crea un archivo `stock.js` dentro de la carpeta `src/commands/` copiando la estructura de `ping.js`. ¡El *Command Handler* lo detectará automáticamente!

---
*Desarrollado con 💻 por Duende Manu para la comunidad Open Source.*
*Licencia MIT.*

---

## 📜 Filosofía Open Source
Todo el código en este repositorio está licenciado bajo la **Licencia MIT**.
Creemos firmemente en el aprendizaje libre: **aquí no se lucra, se enseña**. Puedes usar, modificar y distribuir cualquier parte de estos proyectos para tus propias iniciativas.

---

## 💡 Cómo Colaborar
Si quieres mejorar el código, corregir algún comando del Botillero o añadir nuevas funciones a la web, ¡eres bienvenido!
1. Haz un *Fork* del proyecto.
2. Crea una rama para tus cambios.
3. Envía un *Pull Request*.

*Desarrollado con neón, código y café por Duende Manu.*
