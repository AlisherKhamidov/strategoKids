require('dotenv').config();

const express = require('express');

// роутеры
const applicationApi = require('./routes/applicationsApi');
const groupsApi = require('./routes/groupsApi');

// конфигурация сервера
const serverConfig = require('./config/serverConfig');

// app как серверное приложение на основе Express
const app = express();
const PORT = process.env.PORT ?? 4000;

// подключение конфигурации сервера
serverConfig(app);

// подключение роутеров (обработчики)
app.use('/api/applications', applicationApi);
app.use('/api/groups', groupsApi);

app.listen(PORT, () => console.log(`👩‍👧‍👦 Server started at ${PORT} port 👩‍👧‍👦`));
