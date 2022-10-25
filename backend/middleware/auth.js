const { User } = require('../db/models');

// проверка авторизоаван ли юзер
const sessionChecker = (req, res, next) => {
  if (req.session.userId) {
    res.redirect('/');
  }
  next();
};

// локальные переменные
const resLocals = (req, res, next) => {
  if (req.session.userId) {
    res.locals.userId = req.session.userId; // user.id - когда из сессии
  }
  next();
};

// ищем юзера в Бд по айди
const getUser = async (req, res, next) => {
  if (req.session.userId) {
    res.locals.user = await User.findByPk(Number(req.session.userId), { raw: true });
  }
  next();
};

module.exports = { resLocals, getUser, sessionChecker };
