// модули
const fs = require('fs');
const path = require('path');

// пакеты
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// конфигурации
const sessionConfig = require('./sessionConfig');

// middleware (промежуточные функции)
const removeHead = require('../middleware/removeHead');

// формирование лог файла
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }
);

const serverConfig = (app) => {
  // Запуск промежуточных функций (всегда в коде до обработчиков)
  app.use(morgan('combined', { stream: accessLogStream }));

  // Парсит (разбирает, определяет) тело запроса
  app.use(express.urlencoded({ extended: true }));

  // Парсит JSON
  app.use(express.json());

  // Установка статики
  app.use(express.static('public'));

  // Применение своей промежуточной функции
  app.use(removeHead); // минус заголовок
  app.use(cookieParser());

  // Установка для работы сессий
  app.use(session(sessionConfig));
};

module.exports = serverConfig;
