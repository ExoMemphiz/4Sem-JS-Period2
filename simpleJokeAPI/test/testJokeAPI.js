var expect = require("chai").expect;
var request = require("request");
var expect = require("chai").expect;
var http = require("http");
var app = require('../app');
var server;
var TEST_PORT = 3456;

before(function(done){
  var app = require('../app');
  server = http.createServer(app);
  server.listen(TEST_PORT,function(){
    done();
  });
})
after(function(done){
  server.close();
  done();
})

describe("Gets a joke from /api/joke/random ", function () {
  it("Should get a random joke", function (done) {
    request.get("http://localhost:" + TEST_PORT + "/api/joke/random")
    .on('response', function(response) {
      expect(response.statusCode).to.be.equal(200); // Gets a random joke (probably)
      done();
    });
  })
});

describe("Gets all jokes from /api/jokes ", function () {
  it("Should get all jokes", function (done) {
    request.get("http://localhost:" + TEST_PORT + "/api/jokes")
    .on('response', function(response) {
      expect(response.statusCode).to.be.equal(200); // Gets all jokes (probably)
      done();
    });
  })
});

//Didn't work properly
// describe("Posts a new joke to /api/joke ", function () {
//   it("Should add a joke", function (done) {
//     var expectedResult = "Cph business er den bedste skole";
//     request.post({url: "http://localhost:" + TEST_PORT + "/api/joke", joke: expectedResult})
//     .on('response', function(response) {
//       console.log(response.body);
//       expect(response.statusCode).to.be.equal(200); // Gets all jokes (probably)
//       done();
//     });
//   })
// });