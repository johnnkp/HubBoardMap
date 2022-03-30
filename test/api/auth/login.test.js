process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../app');
const expect = chai.expect;

chai.use(chaiHttp);


describe('POST /api/auth/login', ()=>{
    it('Case: correct password', function (done) {
        chai.request(server)
            .post('/api/auth/login')
            .send({
                username: "testAccount",
                password: "password"
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('success',true);
                expect(res.header).to.have.property('set-cookie');
                done();
            });
    });

    it('Case: invalid username', function (done) {
        chai.request(server)
            .post('/api/auth/login')
            .send({
                username: "1",
                password: "Password"
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('success',false);
                expect(res.body).to.have.property('error_code',1);
                done();
            });
    });

    it("Case: invalid password", function (done) {
        chai.request(server)
            .post('/api/auth/login')
            .send({
                username: "testAccount",
                password: "1"
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('success',false);
                expect(res.body).to.have.property('error_code',1);
                done();
            });
    });

    it("Case: login without verified email", function (done) {
        chai.request(server)
            .post('/api/auth/login')
            .send({
                username: "testAccount00",
                password: "password"
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('success',false);
                expect(res.body).to.have.property('error_code',2);
                done();
            });
    });

    it('Case: incorrect password', function (done) {
        chai.request(server)
            .post('/api/auth/login')
            .send({
                username: "testAccount",
                password: "incorrectPassword"
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('success',false);
                expect(res.body).to.have.property('error_code',3);
                done();
            });
    });

    it("Case: user not found", function (done) {
        chai.request(server)
            .post('/api/auth/login')
            .send({
                username: "notFound",
                password: "password"
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('success',false);
                expect(res.body).to.have.property('error_code',4);
                done();
            });
    });
})