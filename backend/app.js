require('dotenv').config();
const path = require('path');

const express = require('express');

// роутеры
const applicationApi = require('./routes/applicationsApi');
const eventsApi = require('./routes/eventsApi');
const groupsApi = require('./routes/groupsApi');
const authApi = require('./routes/authApi');
const kidsApi = require('./routes/kidsApi');
const adminApi = require('./routes/adminApi');

// конфигурация сервера
const serverConfig = require('./config/serverConfig');

// app как серверное приложение на основе Express
const app = express();
const PORT = process.env.PORT ?? 4000;

// подключение конфигурации сервера
serverConfig(app);

// подключение роутеров (обработчики)
app.use('/api/applications', applicationApi);
app.use('/api/events', eventsApi);
app.use('/api/groups', groupsApi);
app.use('/api/auth', authApi);
app.use('/api/kids', kidsApi);
app.use('/api/admin', adminApi);

app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../frontend/build/index.html'),
  );
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`👩‍👧‍👦 Server started at ${PORT} port 👩‍👧‍👦`));
