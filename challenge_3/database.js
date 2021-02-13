const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('--- Database connected ---'));

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