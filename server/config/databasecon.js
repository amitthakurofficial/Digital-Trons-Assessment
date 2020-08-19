const mongoose = require('mongoose');

const mongoUri = 'mongodb+srv://amit:Amit123@cluster0.9nwwn.mongodb.net/test';

const connect = function () {
  return mongoose.connect(mongoUri, {
    useNewUrlParser: true
  });
};

module.exports = {
  connect: connect
};
