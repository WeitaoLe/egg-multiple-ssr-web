// const Model = require('../mocks/article/list');

module.exports = app => {

  return class AboutController extends app.Controller {

    async index() {
      const {
        ctx
      } = this;
      await ctx.render('about/index.js');
    }

    async opt() {
      const {
        ctx
      } = this;
      await ctx.render('about/opt.js');
    }

    
    async team() {
      const {
        ctx
      } = this;
      await ctx.render('about/team.js');
    }

    
    async privacy() {
      const {
        ctx
      } = this;
      await ctx.render('about/privacy.js');
    }

    async serviceterms() {
      const {
        ctx
      } = this;
      await ctx.render('about/serviceterms.js');
    }

    async culture() {
      const {
        ctx
      } = this;
      await ctx.render('about/culture.js');
    }

    async product() {
      const {
        ctx
      } = this;
      await ctx.render('about/product.js');
    }
    
    async joinus() {
      const {
        ctx
      } = this;
      await ctx.render('joinus/index.js');
    }
    async map() {
      const {
        ctx
      } = this;
      await ctx.render('map/index.js');
    }


  };
};