// src/services/ai.service.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Inicializamos el SDK con la llave de entorno
// Si no hay llave, evitamos que la aplicación crashee usando un try/catch lógico más adelante
const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

async function consultarIA(mensajeUsuario) {
    if (!genAI) {
        return "⚠️ La Inteligencia Artificial está apagada. Por favor, configura tu GEMINI_API_KEY en el archivo .env";
    }

    try {
        // Usamos el modelo rápido y gratuito de Gemini
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        // Le damos un "System Prompt" implícito para moldear su personalidad
        const promptContexto = `Eres BoTillero, un asistente virtual creado por ManuLabs. 
        Responde de forma concisa, amigable y ligeramente hacker a la siguiente consulta: 
        "${mensajeUsuario}"`;
        
        const result = await model.generateContent(promptContexto);
        const respuesta = result.response.text();
        
        return respuesta;
    } catch (error) {
        console.error("Error en el servicio de IA:", error);
        return "❌ Mis redes neuronales están saturadas en este momento. Intenta más tarde.";
    }
}

module.exports = { consultarIA };
