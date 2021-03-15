module.exports = (sequelize, DataTypes) => {
    const Service  = sequelize.define("Service", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
        },
      Nom_service: {
        type: DataTypes.STRING,
        allowNull: true
      },
      
      
      
    });

    // Equipe.associate = function(models) { 
    //     Equipe.hasMany(models.User)
    // };
   
    return Service;
  };