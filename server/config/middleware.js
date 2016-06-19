const bodyParser = require('body-parser');

module.exports = function (app, express) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // serve static asset at '/'
  app.use(express.static(__dirname + '/../../client'));
};
