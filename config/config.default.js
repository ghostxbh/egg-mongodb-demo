/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1565853265100_6817';

    // add your middleware config here
    config.middleware = [];
    // mongoose
    config.mongoose = {
        url: 'mongodb://127.0.0.1/apiExample'
    };
    // pwd salt
    config.pwd_salt = 'egg.mongoose.salt';
    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
        },
        domainWhiteList: ['http://127.0.0.1:8080'],
    };

    config.cors = {
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    return {
        ...config,
        ...userConfig,
    };
};
