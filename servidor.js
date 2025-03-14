// Servidor HTTP simple para resolver problemas de CORS
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir archivos estáticos desde el directorio actual
app.use(express.static(__dirname));

// Agregar encabezados CORS para todas las respuestas
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Ruta principal que sirve el index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
    console.log(`Abre esta URL en tu navegador para evitar problemas de CORS`);
}); 