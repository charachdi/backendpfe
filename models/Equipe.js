module.exports = (sequelize, DataTypes) => {
    const Equipe  = sequelize.define("Equipe", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
        },
      Nom_equipe: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Service: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      
      
    });

    Equipe.associate = function(models) { 
        Equipe.hasMany(models.User)
    };
   
    return Equipe;
  };