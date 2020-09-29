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
  },
  modifyMeasure(id, newValues) {
    values.forEach(measure => {
      if (measure.id === parseInt(id)) {
        measure.name = newValues.name;
        measure.type = newValues.type;
        measure.unit = newValues.unit;
        measure.value = newValues.value;
      }
    })
  }
}