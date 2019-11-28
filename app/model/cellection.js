"use strict";

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const CellectionSchema = new Schema({
        _id: {
            type: String,
            required: true
        },
        name: { // 名称
            type: String,
            required: true,
        },
        num: { // 数量
            type: Number,
        },
        des: { // 描述
            type: String,
        },
        remark: { // 备注
            type: String,
        },
        user_id: { // 所属人
            type: String,
        },
        source: { // 来源
            type: String,
        },
        create_time: { // 创建时间
            type: Date,
            default: Date.now(),
        },
    });
    return mongoose.model('Cellection', CellectionSchema, 'cellection');
};
