'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Assets', {
      fields: ['assetCategoryId'],
      type: 'foreign key',
      name: 'fk_assetCategoryId',
      references: {
        table: 'AssetCategories',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Assets', 'fk_assetCategoryId');
  },
};
