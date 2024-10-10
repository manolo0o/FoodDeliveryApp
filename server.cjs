const express = require('express');
const session = require('express-session');
const passport = require('passport');
const ConnectToDatabase = require('./server/config/db.cjs');
const passportConfig = require('./server/middlewares/passport.cjs');
const authRoutes = require('./server/routes/auth.cjs');
const cors = require('cors');
const rateLimit = require('express-rate-limit');


const startApp = async () => {
    const app = express();

    // 🟡 Crea una nueva instancia de ConnectToDatabase.
    let connectToDatabase = new ConnectToDatabase();
    // 🟡 Abre la conexión a la base de datos.
    await connectToDatabase.open();

    // Configuración de Passport
    passportConfig(passport);

    app.use(cors({
        origin: 'http://localhost:5173', // Ajusta esto a la URL de tu cliente
        credentials: true // Permite el uso de cookies
    }));


    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(session({
        secret: process.env.SESSION_SECRET || 'el_secreto',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false, // Cambia a true si estás usando HTTPS
            httpOnly: true,
            maxAge: 3600000 // 1 hora
        }
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => {
        console.log('Session:', req.session);
        next();
    });


    // Rutas
    app.use('/auth', authRoutes);
    //rutas versionadas

    // // Rate limiting middleware for v2 routes
    // const v2Limiter = rateLimit({
    //     windowMs: 15 * 60 * 1000, // 15 minutes
    //     max: 100 // limit each IP to 100 requests per windowMs
    // });

    // Routes v1
    // app.use('/api/v1/users', require('./server/routes/v1/userRoutes'));
    // app.use('/api/v1/foods', require('./server/routes/v1/foodRoutes'));
    // app.use('/api/v1/ratings', require('./server/routes/v1/ratingRoutes'));
    // app.use('/api/v1/orders', require('./server/routes/v1/orderRoutes'));

    // // Routes v2 (con rate limiting)
    // app.use('/api/v2/users', v2Limiter, require('./server/routes/v1/userRoutes'));
    // app.use('/api/v2/foods', v2Limiter, require('./server/routes/v1/foodRoutes'));
    // app.use('/api/v2/ratings', v2Limiter, require('./server/routes/v1/ratingRoutes'));
    // app.use('/api/v2/orders', v2Limiter, require('./server/routes/v1/orderRoutes'));

    
    // 🟡 Inicia el servidor en el puerto y host especificados en las variables de entorno.
    app.listen({ port: process.env.EXPRESS_PORT, host: process.env.EXPRESS_HOST }, () => {
        // 🟡 Imprime la URL del servidor en la consola.
        console.log(`http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`);
    });
};

// 🟡 Llama a la función para iniciar la aplicación.
startApp();