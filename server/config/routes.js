const exampleController = require('../db/example/exampleController.js');

module.exports = function (app, express) {
  // example get and post request
  app.get('/api/example', exampleController.findAll);
  app.post('/api/example', exampleController.addOne);

};
