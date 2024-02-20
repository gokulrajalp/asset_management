'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const [results] = await queryInterface.describeTable('Users');
    if (!results.email) {
      await queryInterface.addColumn('Users', 'email', {
        type: Sequelize.STRING,
        allowNull: true, 
      });
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'email');
  }
};
