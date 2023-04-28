module.exports = (sequelize,DataTypes) => {

    const RecStats = sequelize.define("RecStats",{
        
        recstat: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        orderkey:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        

    });

    return RecStats;
}