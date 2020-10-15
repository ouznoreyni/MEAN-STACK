const Sequelize = require("sequelize");
const config = require('config');

// Option 1: Passing a connection URI
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') 
// Option 2: Passing parameters separately (other dialects)
/* const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: config.get('dialects')
});
*/

exports.sequelize = new Sequelize(config.get('db'), config.get('user'), config.get('password'), {
    host: config.get('host'),
    dialect: config.get('dialects'),
    pool: {
        max: config.get('pool.max'),
        min: config.get('pool.min'),
        acquire: config.get('pool.acquire'),
        idle: config.get('pool.idle')
    }
});

