

const { Asset, AssetCategory,AssetHistory, Sequelize } = require('../models');
const { Op } = Sequelize;

const assetDistributorController = {
  renderassetDistributorDashboard: async (req, res) => {
    try {
      const assetCategories = await AssetCategory.findAll();

      const { assetCategory, make, model } = req.query;

      const whereClause = {};
      if (assetCategory) {
        whereClause.assetCategoryId = assetCategory;
      }

      if (make) {
        whereClause.make = { [Op.like]: `%${make}%` };
      }

      if (model) {
        whereClause.model = { [Op.like]: `%${model}%` };
      }

      const assets = await Asset.findAll({
        where: whereClause,
        include: [{ model: AssetCategory }],
      });

      res.render('asset_distributor', { assets, assetCategories });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

};

module.exports = assetDistributorController;
