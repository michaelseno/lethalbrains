var supertest = require("supertest")
  , should = require("should")
  , server = supertest.agent("http://localhost:8080")

describe("Mocha Automation",function(){
  it("277377",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(403) 
    .end(function(err,res){
      res.status.should.equal(403)
      done()
    })
  }) 
  it("277378",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(403) 
    .end(function(err,res){
      res.status.should.equal(403)
      done()
    })
  }) 
  it("277379",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(403) 
    .end(function(err,res){
      res.status.should.equal(403)
      done()
    })
  }) 
  it("277380",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(403) 
    .end(function(err,res){
      res.status.should.equal(403)
      done()
    })
  }) 
  it("277381",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(403) 
    .end(function(err,res){
      res.status.should.equal(403)
      done()
    })
  }) 
})



