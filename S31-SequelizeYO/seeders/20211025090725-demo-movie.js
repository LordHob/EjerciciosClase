'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('movies', [{
      title: 'Black sheep',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Matrix',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('movies', null, {});

  }
};
