const { User } = require('../db/models');

// проверка авторизоаван ли юзер
const sessionChecker = (req, res, next) => {
  if (req.session.user) {
    res.redirect('/');
  }
  next();
};

// локальные переменные
const resLocals = (req, res, next) => {
  // if (req.session.user) {
  //   console.log(req.session, 'RESLOCALS RESLOCALS RESLOCALS RESLOCALS RESLOCALS RESLOCALS RESLOCALS RESLOCALS RESLOCALS RESLOCALS RESLOCALS')
  //   res.locals.user = req.session.user; // user.id - когда из сессии
  // }
  next();
};

// ищем юзера в Бд по айди
const getUser = async (req, res, next) => {
  // const { userId } = req.session;
  // const user = userId && (await User.findByPk(userId));
  // res.locals.user = user;
  if (req.session.user) {
    res.locals.user = await User.findByPk(Number(req.session.user.id), { raw: true });
  }
  next();
};

module.exports = { resLocals, getUser, sessionChecker };
