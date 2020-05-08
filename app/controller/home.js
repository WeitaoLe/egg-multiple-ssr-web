const Model = require('../mocks/article/list');

module.exports = app => {

  return class HomeController extends app.Controller {

    async index() {
      const {
        ctx
      } = this;
      let pageIndex = ctx.request.query.page;
      let pageSize = ctx.request.query.pageSize;
      await ctx.render('home/index.js');
    }

  };
};