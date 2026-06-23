// src/commands/sticker.js
const dbService = require('../services/db.service');

module.exports = {
    name: 'sticker',
    description: 'Convierte la imagen adjunta en un sticker de WhatsApp',
    async execute(client, msg, args) {
        const chat = await msg.getChat();
        
        if (!msg.hasMedia) {
            await msg.reply('⚠️ ¡Te faltó la imagen! Debes adjuntar una imagen y poner *!sticker* en el texto del mensaje.');
            return;
        }

        await chat.sendStateTyping();

        try {
            const media = await msg.downloadMedia();

            if (!media) {
                await msg.reply('❌ No pude descargar la imagen. Intenta de nuevo.');
                return;
            }

            // Enviamos el sticker
            await client.sendMessage(msg.from, media, {
                sendMediaAsSticker: true,
                stickerName: 'BoTillero Esqueleto',
                stickerAuthor: 'ManuLabs'
            });

            // NUEVO: Guardamos el registro en la base de datos
            dbService.addStickerCount();

        } catch (error) {
            console.error('Error al crear sticker:', error);
            await msg.reply('❌ Hubo un fallo en la matrix al procesar tu sticker.');
        }
    }
};
