
const axios = require('axios');
const Transaction = require('../models/Transaction');


exports.getTransactions = async (req, res) => {
  const { address } = req.body;

  try {
    const response = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&sort=desc&apikey=${process.env.ETHERSCAN_API_KEY}`);
    const transactions = response.data.result.slice(0, 5);

    await Transaction.insertMany(transactions);

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving transactions' });
  }
};