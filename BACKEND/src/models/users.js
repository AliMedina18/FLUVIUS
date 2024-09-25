// const { Sequelize, DataTypes } = require("sequelize")
const { DataTypes } = require('sequelize');

module.exports = (Sequelize,DataTypes) =>{
    const users = Sequelize.define('users', {
        ID_user:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50)
        },
        email:{
            type:DataTypes.STRING(100),
            unique:true
        },
        password:{
            type:DataTypes.STRING(150),

        },
        state:{
            type:DataTypes.BOOLEAN
        },
        ID_roles:{
            type:DataTypes.INTEGER,
            references:{
                model: 'roles',
                key:'ID_rol'
            }
        }
    })

    users.associate=(models)=>{
        users.hasMany(models.roles, {foreignKey:'ID_rol'});
    }



    return users
}