const Promise = require("bluebird");
const Example = Promise.promisifyAll(require('./exampleModel.js'));

module.exports = {
  findAll(req, res) {
    Example.find({})
      .then((results) => {
        console.log('results sent in finaAll!')
        res.send(results);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  addOne(req, res) {
    // req.body example
    // {
    //   "name":"Michelle",
    //   "count":1
    // }
    const entry = new Example(req.body);
    entry.save((err, model) => {
      if (err) {
        console.log('Error in addOne!');
        res.status(500).send(err);
      }
      res.send(model);
    });
  }
};