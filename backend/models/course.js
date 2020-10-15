const { Model, DataTypes } = require("sequelize");
const { sequelize } = require('./db');

exports.Course = sequelize.define("course", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING
    },
    percentComplete: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});
