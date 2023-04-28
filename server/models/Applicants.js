 
module.exports = (sequelize,DataTypes) => {

    const Applicants = sequelize.define("Applicants",{
         
        appName: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        contactNO: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        civilstat: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        source:{
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        docstat:{
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        position:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        company:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        verified:{
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        
    });
     
     Applicants.associate = (models) => {
        Applicants.hasMany(models.AppStats, {
          onDelete: "cascade",
        });
      };

   
    
    return Applicants;
};
