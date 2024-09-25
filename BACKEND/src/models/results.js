// const { Sequelize, DataTypes } = require("sequelize")
const { DataTypes } = require('sequelize');

module.exports = (Sequelize,DataTypes) =>{
    const results = Sequelize.define('results', {
        ID_result:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        poins: {
            type: DataTypes.INTEGER
        },
        sub_total:{
            type:DataTypes.FLOAT,
        },
        
    },{
        timestamps: false 
    })

    results.associate= function(models){
    results.belongsToMany(models.challenges, { through:'results_challenges', foreignKey:'ID_resuls', otherKey:'ID_challenges', as:'chanllenges'});
    }



    return results
}