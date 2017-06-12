/**
 * Created by sesha on 6/12/17.
 */


/**
 * Function to define a one to many relationship in any model
 * @param modelObj1 Has many objects of modelObj2
 * @param modelObj2 Belongs to modelObj1
 * @param foreignKeyName Foreign Key of the relationship
 * @param prop The property on which the relationship is made
 */
exports.oneToManyRelationship = function(modelObj1, modelObj2, foreignKeyName, prop){
    modelObj1[prop] = modelObj1.hasMany(modelObj2, {
        foreignKey: foreignKeyName,
        constraints: false,
        scope:{
            item_type: modelObj1.tableName
        }
    });
    modelObj1[modelObj2.tableName] = modelObj2.belongsTo(modelObj1, {
        foreignKey: foreignKeyName,
        constraints: false,
        as: modelObj1.tableName
    });
};

/**
 * Function to define a one to many relationship in any model
 * @param modelObj1 Has one object of modelObj2
 * @param modelObj2
 * @param foreignKeyName Foreign Key of the relationship
 * @param foreignKeyNull Whether the foreign key can be null or not
 *                       true - foreign key value can be null
 *                       false - foreign key value cannot be null
 */
exports.oneToOneRelationship = function(modelObj1, modelObj2, foreignKeyName,foreignKeyNull){
    modelObj1[modelObj2.tableName] = modelObj1.belongsTo(modelObj2, {
        foreignKey: foreignKeyName,
        as: modelObj2.tableName,
        allowNull:foreignKeyNull
    });
};
