const express = require('express');
const app = express();
const port = 5678;
const measures = require('./measures');
const validator = require('express-joi-validation').createValidator({});
const schemas = require('./measures/validationSchemas');

app.use(express.json());

app.get('/measures',
  measures.list
);

app.get('/measure/:id',
  measures.get
);

app.post('/measure',
  validator.body(schemas.insertSchema),
  measures.add
);

app.put('/measure/:id',
  validator.body(schemas.insertSchema),
  measures.modify
)

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
