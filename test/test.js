// I am wondering whether my use of ES6 syntax will cause problems

const assert = require('assert');
const supertest = require('supertest');

// smoke test
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});



// set up way to access port where program is running
const server = supertest.agent("http://localhost:3000");

describe("Home page test", () => {
  it("should return status of 200", (done) => {
    server
      .get("/")
      .expect("Content-Type", /json/)
      .expect("200")
      .end(function(err, res) {
        assert.equal(res.status, 200);
        done();
      });
  });
});
