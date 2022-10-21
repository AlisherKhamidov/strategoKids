require('dotenv').config();

const express = require('express');

// роутеры
const applicationApi = require('./routes/applicationsApi');
const eventsApi = require('./routes/eventsApi');

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

app.listen(PORT, () => console.log(`👩‍👧‍👦 Server started at ${PORT} port 👩‍👧‍👦`));
