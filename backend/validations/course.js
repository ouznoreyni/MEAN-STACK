const Joi = require('joi');

exports.validateCourse = (course) => {
    const schema = Joi.object({
        title: Joi.string()
            .min(3)
            .max(250)
            .required(),
        description: Joi.string().min(5),
        percentComplete: Joi.number().min(0).max(100),
        favorite: Joi.boolean()
    });
    const { title, description, percentComplete, favorite } = course;
    return schema.validate({ title, description, percentComplete, favorite });
}