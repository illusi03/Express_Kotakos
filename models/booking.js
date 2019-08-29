'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    checkInDate: DataTypes.DATE,
    checkOutDate: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    dormId: DataTypes.INTEGER
  }, {});
  booking.associate = function(models) {
    // associations can be defined here
    booking.belongsTo(models.user);
    booking.belongsTo(models.dorm);
  };
  return booking;
};