const chai        = require('chai')
const chaiHttp    = require('chai-http')
      chai.use(chaiHttp);
const expect      = chai.expect
const express     = require('express')
const Auth        = require('../middleware/okta.auth')
const config      = require('../config/config')
const auth        = new Auth(config)

/* test this module */
const me          = require('./me.route')

/* stub auth requests */
auth.request = function(options,callback){
  callback(null,null,JSON.stringify({
    active: true,
    sub: 'aaaa',
    profile:{
      email: 'somebody@example.com'
    }
  }))
}

describe("Me", function(){

  describe("/GET", function(){

    it("returns userInfo",function(done){

      const app = express()

      /* add userInfo middleware */
      app.use(auth.addUserInfo)

      app.use('/me',me)

      chai.request(app)
      .get('/me')
      .set('Authorization','Bearer aaaa')
      .end((err,res)=>{
        expect(res.body.email).to.equal('somebody@example.com')
        done()
      })

    })


  })

})
