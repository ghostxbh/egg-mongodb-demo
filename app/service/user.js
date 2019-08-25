const Service = require('egg').Service;

class UserService extends Service {
    async create(user) {
        const {ctx} = this;
        user.password = ctx.helper.encrypt(user.password);
        return await ctx.model.User.create(user);
    }

    async delete(id) {
        const {ctx} = this;
        return await ctx.model.User.delete({_id: id});
    }

    async update(user) {
        const {ctx} = this;
        user.password = ctx.helper.encrypt(user.password);
        return await ctx.model.User.update(user);
    }

    async find(id) {
        const {ctx} = this;
        return await ctx.model.User.find({_id: id});
    }
}
