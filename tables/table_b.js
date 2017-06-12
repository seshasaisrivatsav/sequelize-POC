/**
 * Created by sesha on 6/12/17.
 */


var model = require('./../model');
var Sequelize = model.Sequelize;
var Utils = require('./../utils');
var table_a = require('./table_a');

var table_b = model.db.define('table_b', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },

    colA: {
        type: Sequelize.INTEGER,
        allowNull : true
    },

    colB: {
        type: Sequelize.INTEGER,
        allowNull : true
    }
}, {
    tableName : 'table_b'
});


module.exports= table_b;

Utils.oneToManyRelationship(table_a,table_b,'tableA_id',"tableAs");