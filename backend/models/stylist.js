module.exports = function (sequelize, DataTypes) {
    const Stylist = sequelize.define('Sylist', {
      
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        }
    });
    return Stylist;
  }

