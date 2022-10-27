const groupsApi = require('express').Router();
const multer = require('multer');
const path = require('path');
const { Group } = require('../db/models');

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
groupsApi.get('/', async (req, res) => {
  try {
    const groups = await Group.findAll();
    res.json(groups);
  } catch (error) {
    res.json({ success: false });
  }
});
groupsApi
  .route('/')
  .post(upload.array('image'), async (req, res) => {
    try {
      const image = req.files.map((el) => (el.originalname));
      const imgStr = `./images/${image}`;
      console.log('=====================');
      console.log(imgStr);
      const {
        title, description,
      } = req.body;
      Group.create({
        title,
        img: imgStr,
        info: description,
      }).then((newGroup) => res.json({ newGroup }));
    } catch (error) {
      res.json({ success: false });
    }
  });
groupsApi.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Group.destroy({ where: { id } })
      .then((deletedGroup) => (
        deletedGroup ? res.json({ id }) : res.status(404).json({ deleted: false })));
  } catch (error) {
    res.json({ success: false });
  }
});

groupsApi.put('/:id', (req, res) => {
  try {
    const { id } = req.params;

    const { title, img, info } = req.body;

    if (title && img && info) {
      Group.update({ title, img, info }, { where: { id }, raw: true, returning: true })
        .then((updatedData) => {
          const [, [updatedGroup]] = updatedData;
          return res.json(updatedGroup);
        });
    }
  } catch (error) {
    res.json({ success: false });
  }
});

module.exports = groupsApi;
