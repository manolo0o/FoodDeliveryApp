const express = require ('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// ROUTES FILE
const productRoutes = require('./routes/productRoutes.js');


// MIDDLEWARES 

const app = express();
app.use(express.json());

// API ROUTES
app.use('/products', productRoutes);

// .ENV CONFIG

dotenv.config({path: "./config/.env"})
const config = {
    port: process.env.EXPRESS_PORT,
    host: process.env.EXPRESS_HOST,
};

// Iniciar el servidor
app.listen(config.port, config.host, () => {
    console.log(`Servidor corriendo en http://${config.host}:${config.port}`);
});

app.get('/', (req, res) => {
    res.send("ola q mas")
});

require('dotenv').config();
const ConnectToDatabase = require('./config/database.js');

// async function testDatabaseConnection() {
// const dbConnection = new ConnectToDatabase();

// try {
//     await dbConnection.connectOpen();
//         console.log("Conexión exitosa a la base de datos");
//     } catch (error) {
//         console.error("Error al conectar a la base de datos:", error.message);
//     }
// }

// testDatabaseConnection();
