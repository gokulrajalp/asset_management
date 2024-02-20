'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Assets', 'returnReason', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Assets', 'scrapStatus', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('Assets', 'returnReason');
    await queryInterface.removeColumn('Assets', 'scrapStatus');
  },
};
