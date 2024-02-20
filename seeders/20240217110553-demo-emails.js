'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      
      {
        username: 'employee2',
        email: 'employee2@kttelematic.com',
        password: 'admin@123',
        role: 'employee',
        activityStatus: 'inactive',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
