
const mongoose = require('mongoose');

const ipfsSchema = new mongoose.Schema({
  data: String,
  ipfsHash: String,
});

module.exports = mongoose.model('IPFS', ipfsSchema);