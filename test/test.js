var supertest = require("supertest")
  , should = require("should")
  , server = supertest.agent("http://localhost:8080")

describe("Server launch test",function(){
  it("should return landing page",function(done){
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



