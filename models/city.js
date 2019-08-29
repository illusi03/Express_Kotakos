'use strict';
module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define('city', {
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    lat: DataTypes.STRING,
    long: DataTypes.STRING,
    isFavorite: DataTypes.BOOLEAN
  }, {});
  city.associate = function(models) {
    // associations can be defined here
  };
  return city;
};