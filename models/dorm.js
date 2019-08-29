'use strict';
module.exports = (sequelize, DataTypes) => {
  const dorm = sequelize.define('dorm', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    room: DataTypes.INTEGER,
    size: DataTypes.STRING,
    price: DataTypes.BIGINT,
    lat: DataTypes.STRING,
    long: DataTypes.STRING,
    photo: DataTypes.STRING,
    description: DataTypes.STRING,
    wc: DataTypes.BOOLEAN,
    wifi: DataTypes.BOOLEAN,
    keyRoom: DataTypes.BOOLEAN,
    bed: DataTypes.BOOLEAN,
    electric: DataTypes.BOOLEAN,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    region: DataTypes.STRING,
    village: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  dorm.associate = function(models) {
    // associations can be defined here
    dorm.belongsTo(models.user);
  };
  return dorm;
};