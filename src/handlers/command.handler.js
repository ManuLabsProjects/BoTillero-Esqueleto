const fs = require('fs');
const path = require('path');

const PREFIX = process.env.PREFIX || '!';

// Cargamos todos los comandos en memoria al iniciar
const commands = new Map();
const commandsPath = path.join(__dirname, '../commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    commands.set(command.name, command);
}

module.exports = async (client, msg) => {
    // Evitar que el bot procese estados o mensajes vacíos
    if (!msg.body) return;

    // Si no empieza con el prefijo, ignorar (o aquí podrías enviar a la IA de Gemini)
    if (!msg.body.startsWith(PREFIX)) return;

    // Separar el comando de los argumentos: "!ping hola" -> cmd: "ping", args: ["hola"]
    const args = msg.body.slice(PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Buscar si el comando existe
    if (!commands.has(commandName)) return;

    try {
        const command = commands.get(commandName);
        await command.execute(client, msg, args);
    } catch (error) {
        console.error(`❌ Error al ejecutar el comando ${commandName}:`, error);
        await msg.reply('⚠️ Hubo un error en mis circuitos al procesar tu comando.');
    }
};
