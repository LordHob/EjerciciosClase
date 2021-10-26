'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('categories', [{
        type: 'zombies',
        age: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'unicorns',
        age: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('categories', null, {});
     
  }
};
