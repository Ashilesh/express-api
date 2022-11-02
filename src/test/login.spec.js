import supertest from 'supertest'
import assert from 'assert'
import { app } from '../app.js'

const URL = "/api/v1/login"


describe(`POST ${URL}`, function () {

    it("it should have status code 400 when sending bad request", function (done) {
        supertest(app)
            .post(URL)
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) {
                    done(err)
                    return
                };
                done();
            });
    });

    it("it should contain proper error response when sending only username", function (done) {
        const request = {
            "username": "test"
        }
        const response = {
            "errorMsg": [
                {
                    "msg": "Invalid value",
                    "param": "password",
                    "location": "body"
                }
            ]
        }
        supertest(app)
            .post(URL)
            .send(request)
            .expect(response).end(function (err, res) {
                if (err) return done(err)
                done()
            })
    })

    it("it should contain proper error response when sending only password", function (done) {
        const request = {
            "password": "test"
        }
        const response = {
            "errorMsg": [
                {
                    "msg": "Invalid value",
                    "param": "username",
                    "location": "body"
                }
            ]
        }
        supertest(app)
            .post(URL)
            .send(request)
            .expect(response).end(function (err, res) {
                if (err) return done(err)
                done()
            })
    })

    it("it should contain proper error response when sending invalid username", function (done) {
        const request = {
            "username": "t",
            "password": "test"
        }
        const response = {
            "errorMsg": [
                {
                    "value": "t",
                    "msg": "Invalid value",
                    "param": "username",
                    "location": "body"
                }
            ]
        }
        supertest(app)
            .post(URL)
            .send(request)
            .expect(response).end(function (err, res) {
                if (err) return done(err)
                done()
            })
    })

    it("it should contain proper status code when user not found", function (done) {
        const request = {
            "username": "test",
            "password": "test"
        }

        supertest(app)
            .post(URL)
            .send(request)
            .expect(404).end(function (err, res) {
                if (err) return done(err)
                done()
            })
    })

    it("it should contain proper error response when user not found", function (done) {
        const request = {
            "username": "test",
            "password": "test"
        }
        const response = {
            "msg": "No user found with this credentials"
        }
        supertest(app)
            .post(URL)
            .send(request)
            .expect(response).end(function (err, res) {
                if (err) return done(err)
                done()
            })
    })

    it("it should contain proper status code when user found", function (done) {
        const request = {
            "username": "ash",
            "password": "ash"
        }

        supertest(app)
            .post(URL)
            .send(request)
            .expect(200).end(function (err, res) {
                if (err) return done(err)
                done()
            })
    })

    it("it should contain proper response when user found", function (done) {
        const request = {
            "username": "ash",
            "password": "ash"
        }
        const response = {
            "msg": "Succefully signed In"
        }
        supertest(app)
            .post(URL)
            .send(request)
            .expect(response).end(function (err, res) {
                if (err) return done(err)
                done()
            })
    })
});