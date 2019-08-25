'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index() {
        const {ctx} = this;
        ctx.body = '新闻模块';
    }

    async list() {
        const {ctx} = this;
        ctx.body = await ctx.model.News.find({});
    }

    async create() {
        const {ctx} = this;
        const news = ctx.request.body;
        const res = {};
        if (news) {
            const result = await ctx.model.News.create(news);
            res.status = 201;
            res.message = '添加成功';
            res.data = result;
            ctx.body = res;
            return;
        }
        ctx.body = {status: 500, message: '失败'};
    }

    async update() {
        const {ctx} = this;
        const news = ctx.request.body;
        const res = {};
        if (news) {
            const result = await ctx.model.News.findByIdAndUpdate(news._id, news);
            res.status = 201;
            res.message = '修改成功';
            res.data = result;
            ctx.body = res;
            return;
        }
        ctx.body = {status: 500, message: '失败'};
    }

    async remove() {
        const {ctx} = this;
        const _id = ctx.params._id;
        console.log('id: ' + _id);
        const res = {};
        if (_id) {
            const result = await ctx.model.News.remove({_id});
            res.status = 201;
            res.message = '删除成功';
            res.data = result;
            ctx.body = res;
            return;
        }
        ctx.body = {status: 500, message: '失败'};
    }
}

module.exports = NewsController;
