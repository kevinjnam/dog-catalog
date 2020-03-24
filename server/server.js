const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const cache = require('./cache');
const breedsController = require('./controllers/breedsController');

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/breeds', breedsController.get, (req, res) => {
  res.status(200).json(res.breeds);
});

app.post(
  '/breeds/selected',
  cache.checkBreeds,
  breedsController.addSelected,
  cache.addBreeds,
  (req, res) => {
    res.status(200).json(res.selectedImages);
  }
);

//Catch all other routes
app.all('*', (req, res) => {
  res.sendStatus(404);
});

//Global Error Handler
const defaultError = {
  log: 'Express error handler caught unknown middleware error',
  status: 400,
  message: { err: 'An error occurred' }
};

function errorHandler(err, req, res, next) {
  const errorObj = { ...defaultError, ...err };
  console.error(errorObj.log);
  return res.json({
    status: errorObj.status,
    message: errorObj.message
  });
}

app.use((err, req, res, next) => {
  return errorHandler(err, req, res, next);
});

module.exports = app.listen(PORT, () =>
  console.log(`Listening on port: ${PORT}`)
);
