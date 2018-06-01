const express = require('express')
const router  = express.Router()

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerV1Document = require('./v1/swagger.json');

const swaggerDefinition = {
  info: {
    title: 'P+W App Boilerplate API Documentation',
    version: '1.0.0',
    description: 'Provides Swagger docs for P+W Boilerplate App',
  },
  host: 'localhost:3000',
  basePath: '/',
};

const swaggerOptions = {
  swaggerDefinition: swaggerDefinition,
  apis: ['../routes/*.js'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(swaggerOptions);

router.get('/v1/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
});

router.use('/v1', swaggerUi.serve, swaggerUi.setup(swaggerV1Document));

module.exports = router
