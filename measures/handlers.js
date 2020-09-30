let values = require('./measures.json')
const mongo = require('../mongo')
const collection = 'measures'

module.exports = {
  getAllMeasures() {
    return mongo.CLIENT.then(db => {
      return db.db(mongo.DB)
      .collection(collection)
      .find({})
      .toArray()
    });
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
  },
  deleteMeasure(id) {
    values = values.filter(measure => measure.id !== parseInt(id));
  }
}