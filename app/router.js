'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);

    // user operation
    router.post('/user/login', controller.user.login);
    router.get('/user/load', controller.user.insertData);
    router.get('/user/list', controller.user.find);
    router.post('/user', controller.user.create);
    router.delete('/user/:_id', controller.user.delete);
    router.put('/user', controller.user.update);
    router.get('/user/:_id', controller.user.findOne);
    router.get('/user/', controller.user.findPage);
};
