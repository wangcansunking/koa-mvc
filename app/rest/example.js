'use strict';

const Response = require('../model/Response');
const Constants = require('../model/Constants');
const PATH = '/example';

const exampleService = require('../service/exampleService');

let exampleRouter = new require('koa-router')();

module.exports = exampleRouter;

exampleRouter
    .get(PATH, function* () {
        this.body = Response.generateSuccessResponse(exampleService.query(this.request.query));
    })
    .post(PATH, function* () {
        let result = exampleService.add(this.request.body);

        if (result) {
            this.body = Response.generateSuccessResponse(result);
        } else {
            this.body = Response.generateResponse(Constants.paramWrong);
            this.status = this.body.status;
        }
    })
    .delete(PATH, function* () {
        this.body = Response.generateSuccessResponse(exampleService.remove(this.request.query));
    })
    .put(PATH, function* () {
        let result = exampleService.update(this.request.body);

        if (result) {
            this.body = Response.generateSuccessResponse(result);
        } else {
            this.body = Response.generateResponse(Constants.paramWrong);
            this.status = this.body.status;
        }
    });
