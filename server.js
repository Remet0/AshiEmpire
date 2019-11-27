const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
} else {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
