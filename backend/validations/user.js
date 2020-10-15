const Joi = require('joi');

exports.validateUser = (user) => {
    const schema = Joi.object({
        firstName: Joi.string()
            .min(2)
            .max(250)
            .required(),
        lastName: Joi.string()
            .min(2)
            .max(250)
            .required(),
        username: Joi.string()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string()
            .required()
            .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')),

        passwordConfirmation: Joi.ref('password'),
        isAdmin: Joi.boolean()
    });
    return schema.validate(user);
}

exports.validateLogin = (user) => {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string()
            .required()
            .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$'))
    })
    return schema.validate(user);
}