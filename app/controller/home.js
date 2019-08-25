'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async news() {
    const { ctx } = this;
    ctx.body = await ctx.model.News.find({});
  }
}

module.exports = HomeController;
