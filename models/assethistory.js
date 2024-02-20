
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AssetHistory extends Model {
    static associate(models) {
      AssetHistory.belongsTo(models.Asset, { foreignKey: 'assetId' });
    }
  }

  AssetHistory.init(
    {
      issuedTo: DataTypes.STRING,
      issuedDate: DataTypes.DATE,
      returnedDate: DataTypes.DATE,
      returnReason: DataTypes.STRING,
      assetId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'AssetHistory',
    }
  );

  return AssetHistory;
};
