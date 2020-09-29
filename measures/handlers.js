const values = require('./measures.json')

module.exports = {
  getAllMeasures(){
    return values;
  },
  getOneMeasure(id){
    return values.find(measure => measure.id === parseInt(id));
  }
  
}