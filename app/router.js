module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/about', app.controller.about.index);
  app.get('/joinus', app.controller.about.joinus);
  app.get('/about/opt', app.controller.about.opt);
  app.get('/about/serviceterms', app.controller.about.serviceterms);
  app.get('/about/privacy', app.controller.about.privacy);
  app.get('/about/culture', app.controller.about.culture);
  app.get('/about/team', app.controller.about.team);
  app.get('/map', app.controller.about.map);
  app.get('/article/analysys-dynamic', app.controller.article.analysysDynamic);
  app.get('/article/analysis-report', app.controller.article.analysis);
  app.get('/article/product-dynamic', app.controller.article.productDynamic)
  app.get('/article/analysis/detail/:id', app.controller.article.detail)
  app.get('/article/detail/:id', app.controller.article.detail)
  app.get('/404', app.controller.error.error)
};