const express = require('express');
const router = express.Router();
const nftController = require('./controllers/nftController');
const transactionController = require('./controllers/transactionController');
const ipfsController = require('./controllers/ipfsController');
const tokenController = require('./controllers/tokenController');
const contractController = require('./controllers/contractController');

router.post('/nft/metadata', nftController.getNFTMetadata);
router.post('/transactions', transactionController.getTransactions);
router.post('/ipfs/store', ipfsController.storeData);
router.post('/token/balance', tokenController.getTokenBalance);
router.post('/contract/transfer', contractController.transferTokens);

module.exports = router;