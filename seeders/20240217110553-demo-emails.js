// Example: seeders/20240217110553-demo-emails.js
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
    // Delete all records in the Users table
    return queryInterface.bulkDelete('Users', null, {});
  }
};
