
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const nftRoutes = require('./routes/nftRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const ipfsRoutes = require('./routes/ipfsRoutes');
const tokenRoutes = require('./routes/tokenRoutes');

const app = express();

app.use(express.json());

app.use('/api/nft', nftRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/ipfs', ipfsRoutes);
app.use('/api/token', tokenRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

module.exports = app;