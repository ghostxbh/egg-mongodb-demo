"use strict";
const Crypto = require('crypto');
const jwt = require('jsonwebtoken');
/**
 * helper
 * @type {{encrypt(*=): *, success(*, *, *=, *=): *, error(*, *=, *=, *=): *}}
 */
module.exports = {
    encrypt(pwd) {
        return Crypto.createHmac('sha1', this.config.pwd_salt).update(pwd).digest('hex');
    },
    success(ctx, data, code = 200, message = 'ok') {
        return ctx.body = {
            code, message, data
        }
    },
    error(ctx, message = 'error', code = 500, data = null) {
        return ctx.body = {
            code, message, data,
        }
    },
    jwtset(data) {
        return jwt.sign(data, this.config.pwd_salt);
    }
};
