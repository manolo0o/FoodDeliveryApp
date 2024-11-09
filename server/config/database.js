require("dotenv").config({ path: './config/.env' });
const { MongoClient } = require('mongodb');

class ConnectToDatabase {
    static instanceConnect;
    db;
    connection;
    user;
    #password;

    constructor(
        { user, pwd } = { user: process.env.MONGO_USER, pwd: process.env.MONGO_PASS }
    ) {
        if (ConnectToDatabase.instanceConnect && this.connection) {
            return ConnectToDatabase.instanceConnect;
        }
        this.user = user;
        this.setPassword = pwd;
        ConnectToDatabase.instanceConnect = this;
    }

    async connectOpen() {
        // Construir el URI de conexión
        const connectionString = `mongodb://${this.user}:${this.getPassword}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`;
        console.log("Intentando conectar a:", connectionString);
    
        this.connection = new MongoClient(connectionString);
        try {
            await this.connection.connect();
            this.db = this.connection.db();
            console.log("Conexión exitosa a la base de datos");
        } catch (error) {
            console.error("Error al conectar a la base de datos:", error);
            this.connection = undefined;
            throw new Error('Error connecting');
        }
    }
    
    async connectClose() {
        if (this.connection) {
            await this.connection.close();
            console.log("Conexión cerrada");
        } else {
            console.log("No hay ninguna conexión abierta que cerrar");
        }
    }
    
    get getPassword() {
        return this.#password;
    }

    set setPassword(pwd) {
        this.#password = pwd;
    }
}

module.exports = ConnectToDatabase;
