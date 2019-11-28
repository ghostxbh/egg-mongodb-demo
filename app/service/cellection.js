const Service = require('egg').Service;
const uuid = require('uuid/v4');

/**
 * cellection service crud
 */
class CellectionService extends Service {

    async create(cellection) {
        const {ctx} = this;
        data._id = uuid();
        return ctx.model.Cellection.create(cellection);
    }

    async delete(id) {
        const {ctx} = this;
        return ctx.model.Cellection.delete({_id: id});
    }

    async update(id, cellection) {
        const {ctx} = this;
        return ctx.model.User.update({'_id': id}, cellection);
    }

    async findOne(id) {
        const {ctx} = this;
        return ctx.model.User.findOne({_id: id});
    }

    async find(userId) {
        const {ctx} = this;
        return await ctx.model.User.find({user_id: userId});
    }
}

module.exports = CellectionService;
