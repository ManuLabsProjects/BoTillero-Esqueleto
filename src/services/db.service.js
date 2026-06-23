// src/services/db.service.js
const Database = require('better-sqlite3');
const path = require('path');

// Creamos o conectamos al archivo de la base de datos en la raíz del proyecto
const dbPath = path.join(__dirname, '../../botillero.db');
const db = new Database(dbPath);

// Inicializamos la tabla de estadísticas si no existe
db.prepare(`
    CREATE TABLE IF NOT EXISTS stats (
        action TEXT PRIMARY KEY,
        count INTEGER DEFAULT 0
    )
`).run();

// Función para sumar 1 al contador de stickers
const addStickerCount = () => {
    db.prepare(`
        INSERT INTO stats (action, count) 
        VALUES ('stickers_created', 1) 
        ON CONFLICT(action) 
        DO UPDATE SET count = count + 1
    `).run();
};

// Función para leer el total de stickers creados
const getStickerCount = () => {
    const row = db.prepare("SELECT count FROM stats WHERE action = 'stickers_created'").get();
    return row ? row.count : 0;
};

module.exports = {
    addStickerCount,
    getStickerCount
};
