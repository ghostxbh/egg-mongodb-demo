'use strict';

const Controller = require('egg').Controller;

/**
 * home controller index
 */
class HomeController extends Controller {
    async index() {
        const {ctx} = this;
        ctx.body = {msg: 'This is egg-mongodb-demo'};
        ctx.body = {...ctx.body, code: 200};
    }
}

module.exports = HomeController;
