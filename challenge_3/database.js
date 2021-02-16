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

module.exports = {

  newCheckout: (data, cb) => {
    console.log(data);
    let newCustomer = new Row({
      name: data.name,
      email: data.email,
      password: data.password,
      address: {
        line1: data.address_ln1,
        line2: data.address_ln2,
        city: data.city,
        state: data.state,
        zipcode: data.zipcode
      },
      phone: data.phone,
      payment: {
        card_number: data.cc_number,
        expire_mo: data.cc_ex_mo,
        expire_yr: data.cc_ex_yr,
        cvv: data.cc_cvv,
        billing_zip: data.cc_zipcode
      }
    });
    newCustomer.save((err, results) => {
      if (err) callback(err);
      cb(null,results._id);
    });
  }

};