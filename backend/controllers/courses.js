const { Course } = require('../models/course');
exports.course_all = async (req, res) => {
    const courses = await Course.findAll();
    return res.json({ courses });
}

exports.course_details = async (req, res) => {
    const { course: id } = req.params;
    try {
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ error: `Error retrieving course with id ${id}` })
        }
        return res.json({ course });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
exports.course_post = async (req, res) => {
    // Validate request

    // Save course in the database
    try {
        const course = await Course.create({
            title: req.body.title,
            description: req.body.description,
        });
        res.json({ course });
    } catch (error) {
        return res.status(500).json({
            error:
                error.message || "Some error occurred while creating the course."
        });
    }

}
exports.course_patch = async (req, res) => {
    // Validate request

    //update
    try {
        const { course: id } = req.params;
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ error: `course with id ${id} is not found` })
        }
        await Course.update({ ...req.body }, {
            where: { id }
        });
        return res.json({ message: `course with id ${id} is updated` });
    } catch (error) {
        res.status(500).json({
            error:
                error.message || "Some error occurred while updating the course."
        });
    }
}
exports.course_delete = async (req, res) => {
    const { course: id } = req.params;
    try {
        const deleted = await Course.destroy({
            where: { id }
        });
        if (deleted) {
            return res.json({ message: `course with id ${id} is deleted` });
        }
        return res.status(404).json({ error: `Could not delete course with id ${id}` })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }

}