// migrations/xxxxxx-update-asset-model.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    


    await queryInterface.addColumn('Assets', 'issuedTo', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('Assets', 'issuedTo');
  },
};
