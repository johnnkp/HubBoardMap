process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../app');
const expect = chai.expect;
const login = require('./login');


chai.use(chaiHttp);
let cookie;

describe('Auth Verify', ()=>{
    before(done=>{
        login()
            .then(returnedCookie=>{
                cookie = returnedCookie;
                done();
            })
            .catch(err=>{
                done(new Error("Login failed: " + err));
            });
    })
    describe('Success',()=>{
        it('return 200',done=>{
            chai.request(server)
                .get('/api/user/authVerify')
                .set('Cookie',cookie)
                .then(res=>{
                    expect(res).to.have.status(200);
                    done();
                })
                .catch(err=>{
                    throw err;
                })
        })
    })
})