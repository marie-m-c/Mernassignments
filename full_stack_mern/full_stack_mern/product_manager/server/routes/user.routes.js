// inside of user.routes.js
const Users = require('../controllers/user.controller');

module.exports = (app) => {
  app.post('/api/register', Users.register);
  app.post('/api/login', Users.login);
  app.get('/api/logout', Users.logout);
};
