'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dorms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      room: {
        type: Sequelize.INTEGER
      },
      size: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.BIGINT
      },
      lat: {
        type: Sequelize.STRING
      },
      long: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      wc: {
        type: Sequelize.BOOLEAN
      },
      wifi: {
        type: Sequelize.BOOLEAN
      },
      keyRoom: {
        type: Sequelize.BOOLEAN
      },
      bed: {
        type: Sequelize.BOOLEAN
      },
      electric: {
        type: Sequelize.BOOLEAN
      },
      province: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      village: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dorms');
  }
};