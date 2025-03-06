const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  customerDetails: {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    address: String,
    date: String
  },
  products: [{
    name: String,
    description: String,
    quantity: Number,
    price: Number,
    total: Number
  }],
  summary: {
    subtotal: Number,
    tax: Number,
    grandTotal: Number
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bill', billSchema);