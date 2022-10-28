/* eslint-disable max-len */

const router = require('express').Router();
const { Application } = require('../db/models');

// /api/Applications
router
  .route('/')
  .post((req, res) => {
    const {
      kidName, birthDate, parentName, phone, experience,
    } = req.body;

    // console.log(kidName, phone);
    // console.log('🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 ');
    // console.log(kidName, birthDate, parentName, phone, experience);
    if (kidName.length < 2) {
      res.status(404).json({ error: 'Введите полное имя, пожалуйста' });
    }
    if (phone.length < 11) {
      return res.status(404).json({ error: 'Введите корректный номер, пожалуйста' });
    }
    if (kidName && birthDate) {
      Application.create({
        kidName, birthDate, parentName, phone, experience, isChecked: false,
      })
        .then((newApplication) => res
          .status(201)
          .json({ newApplication, create: true, message: 'Заявка создана' }))
        .catch((error) => res.status(500).json({ message: error }));
    } else {
      res.status(400).json({ created: false });
    }
  });

module.exports = router;
