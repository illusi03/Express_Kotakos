'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    telp: DataTypes.STRING,
    gender: DataTypes.STRING,
    job: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.hasMany(models.booking)
  };
  return user;
};