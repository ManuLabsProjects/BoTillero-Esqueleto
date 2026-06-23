// src/commands/stats.js
const dbService = require('../services/db.service');

module.exports = {
    name: 'stats',
    description: 'Muestra las métricas y uso del bot almacenadas en la base de datos',
    async execute(client, msg, args) {
        const chat = await msg.getChat();
        await chat.sendStateTyping();

        // Leemos la base de datos (¡instantáneo, sin await!)
        const totalStickers = dbService.getStickerCount();
        
        let texto = `📊 *ESTADÍSTICAS DE BOTILLERO*\n\n`;
        texto += `🖼️ Stickers generados: *${totalStickers}*\n`;
        texto += `🟢 Estado del Motor DB: *Online*\n`;
        texto += `🧠 Módulo de IA: *Conectado*`;

        // Pequeña pausa para simular escritura
        setTimeout(async () => {
            await msg.reply(texto);
        }, 800);
    }
};
