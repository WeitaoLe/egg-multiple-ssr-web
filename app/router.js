module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/about', app.controller.about.index);
  app.get('/joinus', app.controller.about.joinus);
  app.get('/about/opt', app.controller.about.opt);
  app.get('/about/service', app.controller.about.tmservice);
  app.get('/about/privacy', app.controller.about.privacy);
  app.get('/about/culture', app.controller.about.culture);
  app.get('/about/team', app.controller.about.team);
  app.get('/map', app.controller.about.map);
  app.get('/trens', app.controller.article.trends);
  app.get('/analysys', app.controller.article.analysys);
};