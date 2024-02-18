// models/asset.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    static associate(models) {
      Asset.belongsTo(models.AssetCategory, { foreignKey: 'assetCategoryId' });
      Asset.hasMany(models.AssetHistory, { foreignKey: 'assetId' });
    }
  }

  Asset.init(
    {
      serialNumber: DataTypes.STRING,
      make: DataTypes.STRING,
      model: DataTypes.STRING,
      issueDate: DataTypes.DATE,
      returnDate: DataTypes.DATE,
      returnReason: DataTypes.STRING,
      scrapStatus: DataTypes.STRING,
      assetCategoryId: DataTypes.INTEGER,
      issuedTo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Asset',
    }
  );

  return Asset;
};
