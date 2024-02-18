const { AssetCategory } = require('../models');

const assetCategoryMasterController = {
  renderAssetCategoryMasterDashboard: async (req, res) => {
    try {
      const assetCategories = await AssetCategory.findAll();
      res.render('asset_category_master', { assetCategories });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  renderAddAssetCategory: (req, res) => {
    res.render('add_asset_category');
  },

  handleAddAssetCategory: async (req, res) => {
    try {
      const { name } = req.body;
      await AssetCategory.create({ name });
      res.redirect('/asset_category_master');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  renderEditAssetCategory: async (req, res) => {
    try {
      const assetCategoryId = req.params.id;
      const assetCategory = await AssetCategory.findByPk(assetCategoryId);
      res.render('edit_asset_category', { assetCategory });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  handleEditAssetCategory: async (req, res) => {
    try {
      const assetCategoryId = req.params.id;
      const { name } = req.body;

      const assetCategory = await AssetCategory.findByPk(assetCategoryId);
      if (!assetCategory) {
        return res.status(404).send('Asset Category not found');
      }

      assetCategory.name = name;
      await assetCategory.save();

      res.redirect('/asset_category_master');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = assetCategoryMasterController;

