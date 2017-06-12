/**
 * Created by sesha on 6/12/17.
 */


var Sequelize = require('sequelize');
var config = require('./credentials');

// create a connection
var db = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
    host: config.DB_HOST,
    dialect: 'mysql',

    pool: {
        max: 100,
        min: 0,
        idle: 10000
    }
});




// test the connection
db
.authenticate()
.then(function (res) {
    console.log(res + "")
});

var exportVariables = {
    db:db,
    Sequelize : Sequelize
};



module.exports = exportVariables;