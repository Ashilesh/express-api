import supertest from 'supertest'
import { app } from '../app.js'

const URL = "/test"

describe(`GET ${URL}`, function () {

    it("it should have status code 404", function (done) {
        supertest(app)
            .get(URL)
            .expect(404)
            .end(function (err, res) {
                if (err) {
                    done(err)
                    return
                };
                done();
            });
    });

    it("it should contain proper error response", function (done) {
        const response = {
            "errorMsg": [
                {
                    "msg": "Invalid URL",
                    "param": "/test",
                    "location": "URL"
                }
            ]
        }
        supertest(app)
            .get(URL)
            .expect(response).end(function (err, res) {
                if (err) return done(err)
                done()
            })
    })
});