const { validationResult } = require('express-validator');
const { insertUser, findOneUserByNameEmailOrOauthId, findOneUserByEmail, findOneUserByNameAndPassword } = require('../models/userModel.cjs');

module.exports = class UserController {
    async crearUsuario(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

            // Verificar si el usuario ya existe
            const userExist = await findOneUserByNameEmailOrOauthId(req.body);

            if (userExist) {
                return res.status(409).json({ message: 'Usuario ya registrado' });
            }

            // Guardar el nuevo usuario
            const newUser = await insertUser(req.body);
            return res.status(201).json(newUser);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }

    async logUsuario(req, res) {
        try {
            const { email, password } = req.body;
            const user = await findOneUserByEmail(email);

            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            // Verificamos la contraseña directamente
            if (password !== user.password) {
                return res.status(401).json({ message: 'Contraseña incorrecta' });
            }

            return res.status(200).json({ message: 'Usuario loggeado', user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error en el servidor' });
        }
    }
}
