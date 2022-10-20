/* eslint-disable max-len */

const router = require('express').Router();
const { Application } = require('../db/models');

// /api/Applications
router
  .route('/')
  .get((req, res) => {
    Application.findAll({ raw: true })
      .then((allApplications) => res.json(allApplications))
      .catch((error) => res.status(500).json({ message: error.message }));
  })
  .post((req, res) => {
    const {
      kidName, birthDate, parentName, phone, experience, isChecked,
    } = req.body;

    if (kidName && birthDate) {
      Application.create({
        kidName, birthDate, parentName, phone, experience, isChecked,
      })
        .then((newApplication) => res
          .status(201)
          .json({ newApplication, create: true, message: 'Application added' }))
        .catch((error) => res.status(500).json({ message: error.message }));
    } else {
      res.status(400).json({ created: false });
    }
  });

module.exports = router;
