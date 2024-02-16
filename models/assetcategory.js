'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AssetCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AssetCategory.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AssetCategory',
  });
  return AssetCategory;
};