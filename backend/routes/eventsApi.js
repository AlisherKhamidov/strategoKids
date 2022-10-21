/* eslint-disable max-len */

const router = require('express').Router();
const { Event } = require('../db/models');

// /api/Events
router
  .route('/')
  .get((req, res) => {
    console.log('get');
    Event.findAll({ raw: true })
      .then((allEvents) => res.json(allEvents))
      .catch((error) => res.status(500).json({ message: error.message }));
  })
  .post((req, res) => {
    console.log('post');
    const {
      title, description, photo,
    } = req.body;
    console.log(title, description);

    // if (kidName && birthDate) {
    Event.create({
      title, description, photo,

    })
      .then((newEvent) => res
        .status(201)
        .json({ newEvent, create: true, message: 'Event added' }))
      .catch((error) => res.status(500).json({ message: error.message }));
    // } else {
    //   res.status(400).json({ created: false });
  },
    //   }
  );

module.exports = router;
