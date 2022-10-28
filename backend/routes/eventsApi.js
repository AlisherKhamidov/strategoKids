/* eslint-disable max-len */

const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const { Event } = require('../db/models');

const imagePath = path.join(process.env.PWD, 'public/images');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imagePath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// /api/Events
router
  .route('/')
  .get((req, res) => {
    console.log('get');
    Event.findAll({ raw: true })
      .then((allEvents) => res.json(allEvents))
      .catch((error) => res.status(500).json({ message: error.message }));
  })
  .post(upload.array('image'), async (req, res) => {
    const image = req.files.map((el) => (el.originalname));
    const imgStr = `./images/${image}`;
    const {
      title, description, isTournament,
    } = req.body;
    let switcher = false;
    if (isTournament === 'on') { switcher = true; }
    Event.create({
      title, description, photo: imgStr, isTournament: switcher,

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
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Event.destroy({ where: { id } }).then((deletedEvent) => (deletedEvent
      ? res.json({ id })
      : res.status(404).json({ deleted: false })));
  } catch (error) {
    res.json({ success: false });
  }
});
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    title, description, photo, isTournament,
  } = req.body;
  if (title && description && photo && isTournament) {
    Event.update(
      {
        title, description, photo, isTournament,
      },
      { where: { id }, raw: true, returning: true },
    )
      .then((updatedData) => {
        const [, [updatedEvent]] = updatedData;

        return res.json(updatedEvent);
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  } else {
    res.status(400).json({ updated: false });
  }
});

module.exports = router;
