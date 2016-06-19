const Example = require('./exampleModel.js');

module.exports = {
  findAll(req, res) {
    console.log('findAll fired!')
    res.send('OK');
  },
  addOne(req, res) {
    console.log('addOne fired!')
    res.send('OK');
  }
};