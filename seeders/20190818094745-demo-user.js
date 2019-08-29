'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        username:'admin',
        password:'admin',
        name:'Bambang',
        nohp:'085223441412',
      },
      {
        username:'userDua',
        password:'userDua',
        name:'userDuaNamaNya',
        nohp:'085223441412',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};
