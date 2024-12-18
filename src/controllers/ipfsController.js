
const ipfsClient = require('ipfs-http-client');
const IPFS = require('../models/IPFS');

const ipfs = ipfsClient.create();

exports.storeData = async (req, res) => {
  const { data } = req.body;

  try {
    const result = await ipfs.add(data);
    const ipfsHash = result.path;

    const ipfsData = new IPFS({ data, ipfsHash });
    await ipfsData.save();

    res.json({ ipfsHash });
  } catch (error) {
    res.status(500).json({ error: 'Error storing data on IPFS' });
  }
};