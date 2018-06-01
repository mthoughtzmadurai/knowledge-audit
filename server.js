require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors')
const Auth = require('./server/middleware/okta.auth.js')
const config = require('./server/config/config')
const errorHandler = require('./server/handlers/error.handler')

let auth = new Auth(config);
const app = express();

app.use(cors('/api/v1/*'))
// if(process.env.NODE_ENV !== 'test'){
//   app.use(auth.addUserInfo)
//   app.use(logger('dev'))
// }

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));



// Swagger Documentation ======================================================

app.use('/api-docs/', require('./docs'));


// Routes =====================================================================

app.use('/api/v1/', require('./server/routes'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Error Handling =============================================================

app.use(errorHandler);

module.exports = app;
