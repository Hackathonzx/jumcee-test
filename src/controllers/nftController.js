
const Web3 = require('web3');
const mongoose = require('mongoose');
const NFT = require('../models/NFT');

const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);

exports.getNFTMetadata = async (req, res) => {
  const { contractAddress, tokenId } = req.body;

  try {
    const contract = new web3.eth.Contract(ABI, contractAddress);
    const metadata = await contract.methods.tokenURI(tokenId).call();

    const nft = new NFT({ contractAddress, tokenId, metadata });
    await nft.save();

    res.json(metadata);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving NFT metadata' });
  }
};