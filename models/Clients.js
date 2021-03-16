module.exports = (sequelize, DataTypes) => {
    const Clients  = sequelize.define("Clients", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
        },
    Nom_client:{
        type: DataTypes.STRING,
        allowNull: true
      },
      
      
      
      
    });

    // Equipe.associate = function(models) { 
    //     Equipe.hasMany(models.User)
    // };
   
    return Clients;
  };