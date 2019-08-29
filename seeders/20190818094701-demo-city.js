'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cities', [
      {
        name:'Jakarta',
        isFavorite:1,
      },
      {
        name:'Tasikmalaya',
        isFavorite:0
      },
      {
        name:'Yogyakarta',
        isFavorite:0
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
    return queryInterface.bulkDelete('cities', null, {});
  }
};
