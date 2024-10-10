const { body, query, param } = require("express-validator");

module.exports = class UserValidator {
    validateUserData = () => {
        return [
            body('nick').notEmpty().isString().withMessage('Envia el NickName'),
            body('email').notEmpty().isEmail().withMessage('Envia el email'),
            body('password').notEmpty().isString().withMessage('Envia la contraseña'),
            query().custom((value, { req }) => {
                if (Object.keys(req.query).length > 0) {
                    throw new Error(`No mandar nada en la url`);
                }
                return true;
            })
        ];
    };

    validateUserLogin = () => {
        return [
            body('email').notEmpty().isEmail().withMessage('Envia un email válido'),
            body('password').notEmpty().isString().withMessage('Envia la contraseña'),
            query().custom((value, { req }) => {
                if (Object.keys(req.query).length > 0) {
                    throw new Error(`No mandar nada en la url`);
                }
                return true;
            })
        ];
    };
    
    
}