const Controller = require('egg').Controller;

/**
 * user controller
 */
class CellectionController extends Controller {

    async create() {
        const {ctx, service} = this;
        const cellection = ctx.request.body;
        try {
            await service.cellection.create(cellection);
            return ctx.helper.success(ctx);
        } catch (e) {
            return ctx.helper.error(ctx, e.message);
        }
    }

    async delete() {
        const {ctx, service} = this;
        const _id = ctx.params._id;
        try {
            let data = await service.cellection.delete(_id);
            return ctx.helper.success(ctx, data);
        } catch (e) {
            return ctx.helper.error(ctx, e.message);
        }
    }

    async update() {
        const {ctx, service} = this;
        const cellection = ctx.request.body;
        try {
            let data = await service.cellection.update(cellection._id, cellection);
            return ctx.helper.success(ctx, data);
        } catch (e) {
            return ctx.helper.error(ctx, e.message);
        }
    }

    async findOne() {
        const {ctx} = this;
        const _id = ctx.params._id;
        try {
            let data = await ctx.service.cellection.findOne(_id);
            return ctx.helper.success(ctx, data);
        } catch (e) {
            return ctx.helper.error(ctx, e.message);
        }
    }

    async find() {
        const {ctx} = this;
        const userId = ctx.params.userId;
        try {
            let data = await ctx.service.cellection.find(userId);
            return ctx.helper.success(ctx, data);
        } catch (e) {
            return ctx.helper.error(ctx, e.message);
        }
    }

}

module.exports = CellectionController;
