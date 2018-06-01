const chai        = require('chai')
const chaiHttp    = require('chai-http')
      chai.use(chaiHttp);
const expect      = chai.expect
const express     = require('express')
const errorHandler = require('../handlers/error.handler')

const Auth        = require('./okta.auth')

const requestStub = function(options,callback){
  callback(null,null,JSON.stringify({
    active: true,
    sub: 'aaaa',
    profile:{
      email: 'somebody@example.com'
    }
  }))
}

const requestStubInactive = function(options,callback){
  callback(null,null,JSON.stringify({
    active: false,
    sub: 'aaaa',
    profile:{
      email: 'somebody@example.com'
    }
  }))
}


const goodConfig = {
  oktaSettings:{
    orgUrl: 'foo',
    clientSecret: 'foo',
    apiToken: 'foo',
    clientId: 'foo'
  }
}
const requiredParams = [
  'orgUrl',
  'clientId',
  'clientSecret',
  'apiToken'
]

describe("Okta middleware", function(){

  it("requires okta settings",function(){

    try{
      new Auth({})
    }catch(err){
      expect(err).to.be.an('error')
      expect(err.message).to.equal('no oktaSettings found')
    }

  })

  requiredParams.map( function(param){
    it(`requires the ${param} parameter`,function(){

      // clone the good configuration
      let badConfig = JSON.parse(JSON.stringify(goodConfig));

      // remove one of the parameters
      delete badConfig.oktaSettings[param];

      try{
        new Auth(badConfig)
      }catch(err){
        expect(err).to.be.an('error')
        expect(err.message).to.equal(`oktaSettings missing required parameter ${param}`)
      }

    })
  })

  it("adds userInfo",function(done){
    let auth = new Auth(goodConfig)

    /* stub requests */
    auth.request = requestStub

    const app = express()
    /* add userInfo middleware */
    app.use(auth.addUserInfo)

    app.use(errorHandler)

    app.get('/api/v1',function(req,res){
      expect(req.userInfo).to.not.be.an('undefined')
      expect(req.userInfo.email).to.equal('somebody@example.com')
      res.send('ok')
    })

    chai.request(app)
    .get('/api/v1')
    .set('Authorization','Bearer aaaa')
    .end((err,res)=>{
      done()
    })

  })

  it("protects a route: unauthorized when auth inactive",function(done){
    let auth = new Auth(goodConfig)

    /* stub requests */
    auth.request = requestStubInactive

    const app = express()

    /* temporarily set ENV to prod */
    process.env.NODE_ENV = 'prod'

    /* protect the route here*/
    app.get('/test',/* ---> */auth.protect/* <--- */,function(req,res){
      res.send('ok')
    })

    app.use(errorHandler)

    chai.request(app)
      .get('/test')
      .end((err,res)=>{
        expect(err).to.be.an('error')
        expect(err.message).to.equal('Unauthorized')
        process.env.NODE_ENV = 'test'
        done()
      })
  })

  it("protects a route: unauthorized when no Auth",function(done){

    let auth = new Auth(goodConfig)

    /* stub requests */
    auth.request = requestStub

    const app = express()

    /* temporarily set ENV to prod */
    process.env.NODE_ENV = 'prod';

    /* protect the route here*/
    app.get('/test',/* ---> */auth.protect/* <--- */,function(req,res){
      res.send('ok')
    });

    app.use(errorHandler)

    chai.request(app)
    .get('/test')
    .end((err,res)=>{
      expect(err).to.be.an('error')
      expect(err.message).to.equal('Unauthorized')
      /* set ENV back to test */
      process.env.NODE_ENV = 'test';
      done()
    })

  })

  it("protects a route: ok when Auth present",function(done){

    let auth = new Auth(goodConfig)

    /* stub requests */
    auth.request = requestStub

    const app = express()

    /* protect the route here*/
    app.get('/test',/* ---> */auth.protect/* <--- */,function(req,res){
      res.send('ok')
    });

    app.use(errorHandler)

    chai.request(app)
    .get('/test')
    .set('Authorization','Bearer aaaa')
    .end((err,res)=>{
      expect(res.text).to.equal('ok')
      done()
    })

  })


})
