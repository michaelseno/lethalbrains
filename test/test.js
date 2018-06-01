var supertest = require("supertest")
  , should = require("should")
  , server = supertest.agent("http://localhost:8080")

describe("Server launch test",function(){
  it("should return landing page 1st attempt",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(403) 
    .end(function(err,res){
      res.status.should.equal(200)
      done()
    })
  }) 
  it("should return landing page 2nd attempt",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(403) 
    .end(function(err,res){
      res.status.should.equal(200)
      done()
    })
  }) 
  it("should return landing page 3rd attempt",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(403) 
    .end(function(err,res){
      res.status.should.equal(200)
      done()
    })
  }) 
  it("should return landing page 4th attempt",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(403) 
    .end(function(err,res){
      res.status.should.equal(200)
      done()
    })
  }) 
  it("should return landing page 5th attempt",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(403) 
    .end(function(err,res){
      res.status.should.equal(200)
      done()
    })
  }) 
})



