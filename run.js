/**
 * Created by sesha on 6/12/17.
 */


var model = require('./model');


var table_a = require('./tables/table_a');
var table_b = require('./tables/table_b');







exports.createTables = function (req, res) {
    table_a.sync({force: true})
        .then(function (a) {
            console.log(a);
        });

    table_b.sync({force: true})
        .then(function (a) {
            console.log(a);
        });

    res.json({"message" :" created tables boi"})
};