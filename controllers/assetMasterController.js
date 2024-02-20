const { Asset, AssetCategory,AssetHistory, Sequelize } = require('../models');
const { Op } = Sequelize;
const assetMasterController = {
  renderAssetMasterDashboard: async (req, res) => {
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

      res.render('asset_master', { assets, assetCategories });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  renderAddAsset: async (req, res) => {
    try {
      const assetCategories = await AssetCategory.findAll();
      res.render('add_asset', { assetCategories });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  handleAddAsset: async (req, res) => {
    try {
      const { serialNumber, make, model, purchaseDate, assetCategoryId } = req.body;
      await Asset.create({
        serialNumber,
        make,
        model,
        purchaseDate,
        assetCategoryId,
      });
      res.redirect('/asset_master');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  renderEditAsset: async (req, res) => {
    try {
      const assetId = req.params.id;
      const asset = await Asset.findByPk(assetId, {
        include: AssetCategory, 
      });
      const assetCategories = await AssetCategory.findAll();
      res.render('edit_asset', { asset, assetCategories });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  handleEditAsset: async (req, res) => {
    try {
      const { id } = req.params;
      const { model, purchaseDate, assetCategoryId } = req.body;

      const parsedIssueDate = new Date(purchaseDate);

      await Asset.update(
        { model, purchaseDate: parsedIssueDate, assetCategoryId },
        { where: { id } }
      );

      res.redirect('/asset_master');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  renderIssueAsset: async (req, res) => {
    try {
      const assetId = req.params.id;
      const asset = await Asset.findByPk(assetId, {
        include: AssetCategory, 
      });
      const assetCategories = await AssetCategory.findAll();
      res.render('issue_asset', { asset, assetCategories });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  handleIssueAsset : async (req, res) => {
    try {
      const { id } = req.params;
      const { issuedTo, issueDate } = req.body;
  
      const asset = await Asset.findByPk(id);
  
      if (!asset) {
        return res.status(404).send('Asset not found');
      }
  
      await asset.update({
        issuedTo,
        issueDate,
        returnDate:null,
        returnReason:null,
      });
  
      await AssetHistory.create({
        assetId: id,
        issuedTo: issuedTo,
        issuedDate: issueDate,
      });
  
      res.redirect('/asset_master');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },



  renderReturnAsset : async (req, res) => {
    try {
      const { id } = req.params;
      const asset = await Asset.findByPk(id);
      res.render('return_asset', { asset });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },





   handleReturnAsset : async (req, res) => {
    try {
      const { id } = req.params;
      const { returnDate, returnReason } = req.body;
  
      const asset = await Asset.findByPk(id);
  
      if (!asset) {
        return res.status(404).send('Asset not found');
      }
  
      const issuedTo = asset.issuedTo || '';
  
      await asset.update({
        returnDate,
        returnReason,
        issuedTo: null, 
        issueDate: null, 
      });
  
      await AssetHistory.create({
        assetId: id,
        issuedTo: issuedTo,
        issuedDate: asset.issueDate,
        returnedDate: returnDate,
        returnReason,
      });
  
      res.redirect('/asset_master');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  renderScrapAsset : async (req, res) => {
    try {
      const assetId = req.params.id;
      const asset = await Asset.findByPk(assetId);
  
      if (!asset) {
        return res.status(404).send('Asset not found');
      }
  
      res.render('scrap_asset', { asset });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  handleScrapAsset : async (req, res) => {
    try {
      const { id } = req.params;
      const { scrapReason } = req.body;
  
      const asset = await Asset.findByPk(id);
  
      if (!asset) {
        return res.status(404).send('Asset not found');
      }
  
      await asset.update({
        scrapStatus: scrapReason, 
      });
  
      res.redirect('/asset_master');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },
  

   renderAssetHistory : async (req, res) => {
    try {
      const assetId = req.params.id;
  
      const asset = await Asset.findByPk(assetId, {
        include: [{ model: AssetHistory }],
      });
  
      if (!asset) {
        return res.status(404).send('Asset not found');
      }
  
      res.render('asset_history', { assetHistory: asset.AssetHistories });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }











};

module.exports = assetMasterController;
