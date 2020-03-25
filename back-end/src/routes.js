const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => {
  return response.send('Hello Node');
});


module.exports = routes;