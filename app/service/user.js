const Service = require('egg').Service;
const resourceData = require('../../data.json');
const uuid = require('uuid/v4');

/**
 * user service crud
 */
class UserService extends Service {

    async login(name, password) {
        const {ctx} = this;
        let user_by_name = await ctx.model.User.findOne({name});
        if (!user_by_name) return {message: `未找到 ${name} 的帐号`};
        let user = await ctx.model.User.findOne({name, password});
        if (!user) return {message: `帐号密码不匹配`};
        else return user;
    }

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

    async insertData() {
        const {ctx} = this;
        resourceData.list.forEach(item => {
            item._id = uuid();
            this.create(item);
        });
        return {num: resourceData.list.length};
    }

    async deleteAll() {
        const {ctx} = this;
        const ids = await ctx.model.User.find({},{_id: 1});
        ids.forEach(item => this.delete(item._id));
        return {num: ids.length};
    }
}

module.exports = UserService;
