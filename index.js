require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const commandHandler = require('./src/handlers/command.handler');

// Inicialización del cliente con Persistencia de Sesión
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { 
        // Argumentos recomendados en el GitHub de wwebjs para evitar crasheos
        args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    }
});

// Evento: Generación de QR
client.on('qr', (qr) => {
    console.log('📱 Escanea este código QR con tu aplicación de WhatsApp:');
    qrcode.generate(qr, { small: true });
});

// Evento: Cliente Listo
client.on('ready', () => {
    console.log('✅ BoTillero está ONLINE y conectado a la Matrix.');
});

// Evento: Recepción de Mensajes
client.on('message_create', async (msg) => {
    // Delegamos todo el trabajo sucio al enrutador (Handler)
    await commandHandler(client, msg);
});

// Despertar al bot
client.initialize();
