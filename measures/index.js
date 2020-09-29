const handlers = require('./handlers');

exports.list = (req, res) => {
  res.status(200);
  res.send(handlers.getAllMeasures());
}

exports.get = (req, res) => {
  res.status(200);
  res.send(handlers.getOneMeasure(req.params.id));
}

exports.add = (req, res) => {
  handlers.addMeasure(req.body);
  res.sendStatus(201);
}

exports.modify = (req, res) => {
  handlers.modifyMeasure(req.params.id, req.body);
  res.sendStatus(204);
}

exports.delete = (req, res) => {
  handlers.deleteMeasure(req.params.id);
  res.sendStatus(204);
}