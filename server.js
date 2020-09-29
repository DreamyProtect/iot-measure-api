const express = require('express');
const app = express();
const port = 5678;
const measures = require('./measures');

app.get('/measures', measures.list);
app.get('/measure/:id', measures.get);
app.

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
