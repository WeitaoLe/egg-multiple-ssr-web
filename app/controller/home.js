const Model = require('../mocks/article/list');

module.exports = app => {

  return class HomeController extends app.Controller {

    async index() {
      const {
        ctx
      } = this;
      let pageIndex = ctx.request.query.page;
      let pageSize = ctx.request.query.pageSize;
      await ctx.render('home/index.js', await Model.getPage(pageIndex, pageSize));
    }

    async client() {
      const {
        ctx
      } = this;
      await ctx.renderClient('home/index.js', Model.getPage(1, 10));
    }

    async pager() {
      const {
        ctx
      } = this;
      let pageIndex = ctx.request.query.page;
      let pageSize = ctx.request.query.pageSize;
      ctx.body = Model.getPage(pageIndex, pageSize);
    }

  };
};