'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AssetHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AssetHistory.init({
    issuedDate: DataTypes.DATE,
    returnedDate: DataTypes.DATE,
    reason: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AssetHistory',
  });
  return AssetHistory;
};