const express = require('express')
const router  = express.Router()
const LookupController = require('../controllers/lookup.controller')
const EmployeeController = require('../controllers/employee.controller')
const asyncMiddleware = require('../middleware/async.middleware')
const lkup = new LookupController()
const emp = new EmployeeController();

router
  .get(   '/data', asyncMiddleware( async (req, res, next) => {
    return lkup.LookupList(req,res,next);
  }))
  .get(   '/employee', asyncMiddleware( async (req, res, next) => {
    return emp.EmployeeList(req,res,next);
  }))
  ;

module.exports = router;
