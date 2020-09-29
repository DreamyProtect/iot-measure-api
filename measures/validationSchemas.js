const Joi = require('joi')

const insertSchema = Joi.object({
  value: Joi.number().required(),
  unit: Joi.string().required().valid(...['celcius','fahrenheit']),
  type: Joi.string().required(),
  name: Joi.string().required()
})

module.exports = {
  insertSchema
}