/**
 * Created by sesha on 6/12/17.
 */


var model = require('./../model');
var Sequelize = model.Sequelize;



var table_a = model.db.define('table_a', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },

    col1: {
        type: Sequelize.INTEGER,
        allowNull : true
    },

    col2: {
        type: Sequelize.INTEGER,
        allowNull : true
    }
}, {
    tableName : 'table_a'
});


module.exports= table_a;