const values = require('./measures.json')

module.exports = {
  getAllMeasures() {
    return values;
  },
  getOneMeasure(id) {
    return values.find(measure => measure.id === parseInt(id));
  },
  addMeasure(measure) {
    const id = values.length + 1;
    values.push({
      ...{"id": id},
      ...measure
    });
  }
}