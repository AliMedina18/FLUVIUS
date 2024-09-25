// const { Sequelize, DataTypes } = require("sequelize")
const { DataTypes } = require('sequelize');

module.exports = (Sequelize,DataTypes) =>{

    const results_challenges= Sequelize.define('results_challenges', {
        ID_resuls_challenges:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ID_challenges:{
            type:DataTypes.INTEGER,
            references:{
                model: 'challenges',
                key:'ID_challenge'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        ID_results:{
            type:DataTypes.INTEGER,
            references:{
                model: 'results',
                key:'ID_result'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        litros:{
            type:DataTypes.INTEGER
        }
    },
    {
        timestamps: false 
    })

    return results_challenges
}