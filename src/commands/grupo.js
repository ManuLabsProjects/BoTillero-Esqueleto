// src/commands/grupo.js

module.exports = {
    name: 'grupo',
    description: 'Muestra información del grupo actual si se ejecuta en uno',
    async execute(client, msg, args) {
        const chat = await msg.getChat();

        // Verificamos si el chat actual es un grupo usando la propiedad oficial
        if (!chat.isGroup) {
            await msg.reply('❌ Este comando solo funciona dentro de un grupo, amigo.');
            return;
        }

        await chat.sendStateTyping();

        // Obtenemos información del remitente
        const contact = await msg.getContact();

        let info = `👥 *INFORMACIÓN DEL GRUPO*\n\n`;
        info += `📌 *Nombre:* ${chat.name}\n`;
        info += `🆔 *ID del Chat:* ${chat.id._serialized}\n`;
        info += `👤 *Creador:* @${chat.owner.user}\n`;
        info += `📈 *Cantidad de Miembros:* ${chat.participants.length}\n\n`;
        info += `🤖 *Ejecutado por:* ${contact.pushname || 'Usuario Anónimo'}`;

        // Pausa humana anti-baneo
        setTimeout(async () => {
            await client.sendMessage(msg.from, info, {
                mentions: [chat.owner] // Mencionamos al creador del grupo dinámicamente
            });
        }, 1200);
    }
};
