const handlers = require('./handlers');

exports.list = (req, res) => {
  res.send(handlers.getAllMeasures());
}

exports.get = (req, res) => {
  res.send(handlers.getOneMeasure(req.params.id));
}