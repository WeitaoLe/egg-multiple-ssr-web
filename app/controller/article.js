const Model = require('../mocks/article/list');

module.exports = app => {

  return class ArticleController extends app.Controller {

    async analysis() {
      const {
        ctx
      } = this;
      let pageIndex = ctx.request.query.page;
      let pageSize = ctx.request.query.pageSize;
      let columnId = '8,22';
      await ctx.render('article/analysisreport/index.js', await Model.getPage(pageIndex, pageSize, columnId));
    }

    async analysysDynamic() {
      const {
        ctx
      } = this;
      let pageIndex = ctx.request.query.page;
      let pageSize = ctx.request.query.pageSize;
      let columnId = 1051;
      await ctx.render('article/analysysdynamic/index.js', await Model.getPage(pageIndex, pageSize, columnId));
    }

    async productDynamic() {
      const {
        ctx
      } = this;
      let pageIndex = ctx.request.query.page;
      let pageSize = ctx.request.query.pageSize;
      let columnId = 10184;
      await ctx.render('article/productdynamic/index.js', await Model.getPage(pageIndex, pageSize, columnId));
    }

    async detail() {
      const {
        ctx
      } = this;
      let id = ctx.params.id
      console.log('routeId============', id)
      await ctx.render('article/detail.js', await Model.getDetail(id));
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