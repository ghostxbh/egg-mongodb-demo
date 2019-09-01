const Controller = require('egg').Controller;
const resourceData = require('../../data.json');

/**
 * user controller
 */
class UserController extends Controller {

    async login() {
        const {ctx, service} = this;
        let {name, password} = ctx.request.body;
        password = ctx.helper.encrypt(password);
        try {
            let user = await service.user.login(name, password);
            if (user.message) return ctx.helper.success(ctx, user);
            const token = ctx.helper.jwtset(JSON.stringify(user));
            ctx.cookies.token = token;
            return ctx.helper.success(ctx, {token});
        } catch (e) {
            return ctx.helper.error(ctx, e.message);
        }
    }

    async create() {
        const {ctx, service} = this;
        const userInfo = ctx.request.body;
        try {
            let user = await ctx.model.User.findOne({name: userInfo.name});
            if (user) return ctx.body = {code: 500, message: `帐号 ${userInfo.name} 已存在`};
            await service.user.create(userInfo);
            return ctx.helper.success(ctx);
        } catch (e) {
            return ctx.helper.error(ctx, e.message);
        }
    }

    async delete() {
        const {ctx, service} = this;
        const _id = ctx.params._id;
        try {
            let data = await service.user.delete(_id);
            return ctx.helper.success(ctx, data);
        } catch (e) {
            return ctx.helper.error(ctx, e.message);
        }
    }

    async update() {
        const {ctx, service} = this;
        const userInfo = ctx.request.body;
        try {
            let data = await service.user.update(userInfo._id, userInfo);
            return ctx.helper.success(ctx, data);
        } catch (e) {
            return ctx.helper.error(ctx, e.message);
        }
    }

    async findOne() {
        const {ctx} = this;
        const _id = ctx.params._id;
        try {
            let data = await ctx.service.user.findOne(_id);
            return ctx.helper.success(ctx, data);
        } catch (e) {
            return ctx.helper.error(ctx, e.message);
        }
    }

    async find() {
        const {ctx} = this;
        const reqParam = ctx.request.query;
        try {
            let data = await ctx.service.user.find(reqParam);
            return ctx.helper.success(ctx, data);
        } catch (e) {
            return ctx.helper.error(ctx, e.message);
        }
    }

    async findPage() {
        const {ctx} = this;
        let {page, size} = ctx.request.query;
        if (typeof page == "string") page = Number(page);
        if (typeof size == "string") size = Number(size);
        try {
            let data = await ctx.service.user.findPage(page, size);
            return ctx.helper.success(ctx, data);
        } catch (e) {
            return ctx.helper.error(ctx, e.message);
        }
    }

    async insertData() {
        const {ctx} = this;
        try {
            await resourceData.list.forEach(x => ctx.service.user.create(x));
            return ctx.helper.success(ctx, resourceData.list.length, 200, `成功添加 ${resourceData.list.length} 条数据`);
        } catch (e) {
            return ctx.helper.error(ctx, e.message);
        }
    }
}

module.exports = UserController;
