const ConnectToDatabase = require('./infraestructure/database/mongodb.cjs')
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./application/routes/routes-auth.cjs');
require('./application/middlewares/passport-setup.cjs');
require('dotenv').config({ path: '../.env' });


const startApp = async () => {

    let connectToDatabase = new ConnectToDatabase();
    await connectToDatabase.open();

    const app = express();

    app.use(session({
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: true
    }));


    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/auth', authRoutes);

    app.get('/', (req, res) => {
        res.send('Bienvenido a la aplicación de autenticación');
    });

    app.listen({ port: process.env.EXPRESS_PORT, host: process.env.EXPRESS_HOST }, () => {

        console.log(`http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`);
    });
}

startApp();