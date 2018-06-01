const express = require('express')
const router  = express.Router()
const Auth    = require('../middleware/okta.auth')
const config  = require('../config/config')

const auth = new Auth(config);

// route controllers
router.use('/'                  ,               require('./api.route'))
router.use('/me'                ,               require('./me.route'))
router.use('/lookup'                ,               require('./lookup.route'))

module.exports = router
