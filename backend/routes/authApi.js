const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

authRouter.get('/user', async (req, res) => {
  const { user } = res.locals;
  if (user) {
    res.json({
      isLoggedIn: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        // password: user.password,
        isAdmin: user.isAdmin,
      },
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});
authRouter.post('/register', async (req, res) => {
  const {
    name, email, phone, password,
  } = req.body;

  // console.log(req.body);

  const existingUser = await User.findOne({ where: { phone } });
  if (existingUser) {
    res.status(422).json({ error: 'Такой пользователь уже существует' });
    return;
  }

  const user = await User.create({
    name,
    email,
    phone,
    password: await bcrypt.hash(password, 10),
    isAdmin: false,
  });

  // кладём id нового пользователя в хранилище сессии (сразу логиним пользователя)
  req.session.user = {
    id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin,
  };
  res.json({ id: user.id, phone: user.phone, isAdmin: user.isAdmin });
});

authRouter.post('/login', async (req, res) => {
  const { phone, password } = req.body;
  const existingUser = await User.findOne({ where: { phone } });

  // проверяем, что такой пользователь есть в БД и пароли совпадают
  if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
    // кладём id нового пользователя в хранилище сессии (логиним пользователя)
    // req.session.user = { id: existingUser.id, isAdmin: existingUser.isAdmin };
    req.session.user = existingUser;
    res.json({ id: existingUser.id, phone: existingUser.phone, isAdmin: req.session.user.isAdmin });
  } else {
    res.status(401).json({ error: 'Такого пользователя не существует либо неверный пароль' });
  }
});

authRouter.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
  res.clearCookie('user_sid');
});

module.exports = authRouter;
