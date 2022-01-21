let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server');
let should = chai.should();

chai.use(chaiHttp);

describe('chat', () => {

  describe('message from acc2 to acc1', () => {
      it('sõnumivahetus 2 konto vahel (nimed ats ja marvin)', (done) => {
        let sendChatData = {
          sender: "61e9d422bcc41619a0a35f19",
          receiver: "61e9d408bcc41619a0a35f18",
          message: "success"
        }
        chai.request(server)
            .post('/api/chat/sendchat')
            .type('json')
            .set('Content-Type', 'application/json')
            .send(sendChatData)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
              done();
            });
      });
  });

});