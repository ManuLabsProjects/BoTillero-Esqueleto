module.exports = {
    name: 'ping',
    description: 'Verifica la latencia y demuestra la simulación de escritura',
    async execute(client, msg, args) {
        const chat = await msg.getChat();
        
        // PRO-TIP (Anti-Baneo): Simular que un humano está escribiendo
        await chat.sendStateTyping();

        // Crear una pausa aleatoria entre 1 y 2.5 segundos
        const delay = Math.floor(Math.random() * 1500) + 1000;

        setTimeout(async () => {
            // El bot responde después de la pausa
            await msg.reply('¡Pong! 🏓 El sistema de BoTillero está 100% operativo.');
        }, delay);
    }
};
