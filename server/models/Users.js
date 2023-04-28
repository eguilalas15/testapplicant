module.exports = (sequelize,DataTypes) => {

    const Users = sequelize.define("Users",{
        
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        usertype:{
            type: DataTypes.STRING(20),
            allowNull: false,
        }
        

    });

    return Users;
}