'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // news domain
  router.get('/news', controller.news.index);
  router.get('/news/list', controller.news.list);
  router.post('/news/add', controller.news.create);
  router.post('/news/update', controller.news.update);
  router.get('/news/del/:_id', controller.news.remove);


};
