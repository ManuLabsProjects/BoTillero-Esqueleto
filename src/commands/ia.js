// src/commands/ia.js
const aiService = require('../services/ai.service');

module.exports = {
    name: 'ia',
    description: 'Consulta a la red neuronal de BoTillero (Gemini)',
    async execute(client, msg, args) {
        const chat = await msg.getChat();

        // Verificamos que el usuario haya escrito una pregunta
        if (args.length === 0) {
            await msg.reply('🧠 Dime, ¿qué quieres saber? Escribe algo como: *!ia Explícame qué es el DOM*');
            return;
        }

        // Unimos los argumentos en un solo string de texto (la pregunta completa)
        const pregunta = args.join(' ');

        // Indicamos que el bot está escribiendo (la IA puede tardar unos segundos)
        await chat.sendStateTyping();

        // Consultamos al servicio de IA
        const respuestaIA = await aiService.consultarIA(pregunta);

        // Enviamos la respuesta al chat
        await msg.reply(`🤖 *BoTillero IA:*\n\n${respuestaIA}`);
    }
};
