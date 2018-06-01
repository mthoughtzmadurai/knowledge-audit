module.exports = function(err,req,res,next){

  if (res.headersSent) {
    return next(err)
  }

  let errorObject = {
    path  : req.path,
    method: req.method,
    message: err.message,
    pathMessage: `encountered an error trying to ${req.method} ${req.path}`,
    requestBody: null,
    error: (process.env.NODE_ENV === 'dev') ? err : {}
  }

  let status = 500

  if((req.method === 'POST' || req.method === 'PUT') && req.body){
    errorObject.message += ' with request body'
    errorObject.requestBody = req.body
  }

  if(err.name === 'SequelizeValidationError'){
    status = 400
  }

  if(err.status === 404){
    status = 404
  }

  if(err.message.match(/^Unauthorized/)){
    errorObject.message = 'Unauthorized'
    status = 401
  }

  if(err.message.match(/^Database/)){
    errorObject.message = err.message
    status = 500
  }

  return res.status(status).json(errorObject)
}
