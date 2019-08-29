'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dorms', [
      {
        name:'Rumah Bang Haji',
        type:'Putri',
        room:3,
        size:'2 x 5 m',
        price: 150000,
        lat:'920943857585',
        long:'220094758459',
        cityId:1,
        userId:1
      },
      {
        name:'Rumah Bang Jono',
        type:'Putra',
        room:2,
        size:'4 x 5 m',
        price: 450000,
        lat:'920943857585',
        long:'220094758459',
        cityId:1,
        userId:1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('dorms', null, {});
  }
};
