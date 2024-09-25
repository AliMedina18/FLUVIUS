// const { Sequelize, DataTypes } = require("sequelize")
const { DataTypes } = require('sequelize');

module.exports = (Sequelize,DataTypes) =>{
    const roles= Sequelize.define('roles', {
        ID_rol:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(25),
            defaultValue: 'invite'
        }
        
    },{timestamps: false }
    )


    return roles
}