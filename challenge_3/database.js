const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:3000/checkout');

const db = mongoose.connection;
db.once('open', () => console.log('Database connected on http://localhost:3000'));

const checkoutForm = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zipcode: Number
  },
  phone: Number,
  payment: {
    card_number: Number,
    expire_mo: Number,
    expire_yr: Number,
    cvv: Number,
    billing_zip: Number
  }
});

const Row = mongoose.model('Row', checkoutForm);

module.exports = db;