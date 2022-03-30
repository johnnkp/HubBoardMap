process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../app');
const expect = chai.expect;

chai.use(chaiHttp);


describe('POST /api/auth/login', ()=>{
    it('correct password', function (done) {
        chai.request(server)
            .post('/api/auth/login')
            .send({
                username: "testac",
                password: "testing"
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('success',true);
                done();
            });
    });
    it('incorrect password', function (done) {
        chai.request(server)
            .post('/api/auth/login')
            .send({
                username: "testac",
                password: "wrongpassword"
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('success',false);
                expect(res.body).to.have.property('error_code',3);
                done();
            });
    });
})