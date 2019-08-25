"use strict";
const Crypto = require('crypto');

module.exports = {
    encrypt(pwd) {
        return Crypto.createHmac('sha1', this.config.pwd_salt).update(pwd).digest('hex');
    }
};
