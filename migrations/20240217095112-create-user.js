'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Check if the column exists before attempting to add it
    const [results] = await queryInterface.describeTable('Users');
    if (!results.email) {
      await queryInterface.addColumn('Users', 'email', {
        type: Sequelize.STRING,
        allowNull: true, // or false, depending on your requirements
      });
    }
  },

  async down(queryInterface, Sequelize) {
    // Revert the changes if needed
    await queryInterface.removeColumn('Users', 'email');
  }
};
