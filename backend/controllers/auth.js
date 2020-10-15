const bcrypt = require('bcrypt');
const config = require('config');
const { validateUser, validateLogin } = require("../validations/user")
const { User } = require('../models/user');
const generateToken = require('../utils/generateToken');

exports.signup = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const user = { ...req.body, password: hash };
        if (req.body.isAdmin) {
            user.isAdmin = req.body.isAdmin;
        }

        await User.create(user);

        delete user.password;

        const token = generateToken(user);

        return res.header("x-auth-token", token).json({ user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.login = async (req, res) => {
    //validate data
    const { error } = validateLogin(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const userFinded = await User.findOne({ where: { username: req.body.username } });
    if (!userFinded) return res.status(404).json({ error: "Utilisateur n'existe pas" });

    const passwordValid = await bcrypt.compare(req.body.password, userFinded.password);
    if (!passwordValid) return res.status(400).json({ error: "login ou mot de passe incorrect" });

    const user = userFinded.dataValues;
    delete user.password;

    const token = generateToken(user);

    return res.header('x-auth-token', token).json({ user });
};


exports.logout = (req, res) => {
    return res.json({ data: "logou" })
}
