// app.js
require('dotenv').config({ path: "./config/.env" }); // Carga el archivo .env al inicio

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Inicia Express
const app = express();
app.use(express.json()); // Middleware para parsear JSON

// Importa las rutas
const productRoutes = require('./routes/productRoutes.js');
const categoryRoutes = require('./routes/categoryRoutes.js');

app.use(cors({
    origin: 'http://localhost:5173'
}));
// Configuración del servidor desde .env
const config = {
    port: process.env.EXPRESS_PORT,
    host: process.env.EXPRESS_HOST,
};


// Función asíncrona para conectar y luego iniciar el servidor
async function startServer() {
    try {
        // Configuración de la conexión a MongoDB
        const connectionString = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`;
        
        // Conectar a MongoDB con parámetros de tiempo de espera
        await mongoose.connect(connectionString, {
            serverSelectionTimeoutMS: 5000,  // Timeout de conexión con el servidor (en milisegundos)
            socketTimeoutMS: 45000,  // Timeout para operaciones de socket (en milisegundos)
        });
        
        console.log("Conexión exitosa a la base de datos");

        // Iniciar el servidor solo después de conectar a MongoDB
        app.listen(config.port, config.host, () => {
            console.log(`Servidor corriendo en http://${config.host}:${config.port}`);
        });

    } catch (error) {
        console.error("Error al conectar a la base de datos:", error.message);
        process.exit(1); // Finaliza la app si hay un error de conexión
    }
}

// Rutas de la API
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

// Ruta inicial de prueba
app.get('/', (req, res) => {
    res.send("ola q mas");
});

// Ejecuta la conexión y luego inicia el servidor
startServer();
