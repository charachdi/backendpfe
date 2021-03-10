module.exports = (sequelize, DataTypes) => {
    const User  = sequelize.define("User", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
        },
      full_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pwd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_level: {
        type: DataTypes.STRING,
        defaultValue: "user",
        allowNull: true,
      },
      user_img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_spec: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_sex: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tel: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fax: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Website: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_ip: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      approved: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
      activation_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      banned: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
      ckey: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ctime: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tel_ip: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      user_matricule: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      date_reni: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
      
      
    });

    // User.associate = function(models) { 
    //   User.hasMany(models.Post)
    // };
   
    return User;
  };