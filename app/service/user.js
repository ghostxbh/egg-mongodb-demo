const Service = require('egg').Service;

/**
 * user service crud
 */
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

    async update(id, user) {
        const {ctx} = this;
        user.password = ctx.helper.encrypt(user.password);
        return await ctx.model.User.update({'_id': id}, user);
    }

    async findOne(id) {
        const {ctx} = this;
        let [data] = await ctx.model.User.find({_id: id});
        return data;
    }

    async find(param) {
        const {ctx} = this;
        return await ctx.model.User.find(param, {
            _id: 1,
            name: 1,
            age: 1,
            gender: 1,
            phone: 1,
            email: 1,
            create_time: 1,
        });
    }

    async findPage(page, size) {
        const {ctx} = this;
        return await ctx.model.User.find({}, {
            _id: 1,
            name: 1,
            age: 1,
            gender: 1,
            phone: 1,
            email: 1,
            create_time: 1,
        }).skip(page * size).limit(size);
    }
}

module.exports = UserService;
