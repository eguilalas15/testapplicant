module.exports = (sequelize,DataTypes) => {

    const AppStats = sequelize.define("AppStats",{
        
        recstat: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        recresult: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recNextstat: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });

    return AppStats;
}