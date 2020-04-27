const Model = require('../mocks/article/list');

module.exports = app => {

  return class ArticleController extends app.Controller {

    async analysys() {
      const {
        ctx
      } = this;
      let pageIndex = ctx.request.query.page;
      let pageSize = ctx.request.query.pageSize;
      await ctx.render('home/index.js', await Model.getPage(pageIndex, pageSize));
    }

    async trends() {
      const {
        ctx
      } = this;
      let pageIndex = ctx.request.query.page;
      let pageSize = ctx.request.query.pageSize;
      await ctx.render('home/index.js', await Model.getPage(pageIndex, pageSize));
    }

    // 接口请求
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