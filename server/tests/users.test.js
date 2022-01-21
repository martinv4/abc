let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('searchUser', () => {

  describe('find user', () => {
      it('leia vastav konto', (done) => {
        let searchQuery = {
          bothNames: "konto"
        }
        chai.request(server)
            .post('/api/search/user')
            .type('json')
            .set('Content-Type', 'application/json')
            .send(searchQuery)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('result');
                res.body.result.should.be.a('array');
                res.body.result.should.not.be.empty;
              done();
            });
      });
  });

  describe('find user by ID', () => {
      it('leia kontod ja tagasta nimed', (done) => {
        let searchQuery = {
          IDs: ["61e9d408bcc41619a0a35f18", "61e9d7e5bcc41619a0a35f2d"]
        }
        chai.request(server)
            .post('/api/search/usersbyids')
            .type('json')
            .set('Content-Type', 'application/json')
            .send(searchQuery)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('returnData');
                res.body.returnData.should.be.a('array');
                res.body.returnData.should.not.be.empty;
              done();
            });
      });
  });

});