// const { Sequelize, DataTypes } = require("sequelize")
const { DataTypes } = require('sequelize');

module.exports = (Sequelize,DataTypes) =>{
    const challenges = Sequelize.define('challenges', {
        ID_challenge:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING(100)
        },
        start_date:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        end_date:{
            type:DataTypes.DATEONLY,
        }
    },
    {
        timestamps: false 
    })

    challenges.associate=function(models){
    challenges.belongsToMany(models.results,{through:'results_challenges',foreignKey:'ID_challenges', otherForeign:'ID_results', as:'results'});
    }



    return challenges
}