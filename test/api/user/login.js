const chai = require("chai");
const server = require("../../../app");


// Login and return cookie if successfully logged in
module.exports = ()=>{
    const testUser = {
        username: "testAccount",
        password: "password"
    };
    return new Promise((resolve,reject)=>{
        chai.request(server)
            .post("/api/auth/login")
            .send(testUser)
            .end((err,res)=>{
                if (err){
                    reject(err);
                }
                else if (res.body.success) {
                    resolve(res.header['set-cookie'][0]);
                } else {
                    reject(res.body.message);
                }
            });
    });
}