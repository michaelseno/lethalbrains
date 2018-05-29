var supertest = require("supertest")
  , should = require("should")
  , server = supertest.agent("http://localhost:8080")

describe("Server launch test",function(){
  it("should return landing page 1",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(403) 
    .end(function(err,res){
      res.status.should.equal(403)
      done()
    })
  })
  it("should return landing page 2",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(403) 
    .end(function(err,res){
      res.status.should.equal(403)
      done()
    })
  })
  it("should return landing page 3",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(403) 
    .end(function(err,res){
      res.status.should.equal(403)
      done()
    })
  })
  it("should return landing page 4",function(done){
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



