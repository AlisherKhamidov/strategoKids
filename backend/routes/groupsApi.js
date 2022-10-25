const groupsApi = require('express').Router();
const { Group } = require('../db/models');

groupsApi.get('/', async (req, res) => {
  try {
    const groups = await Group.findAll();
    res.json(groups);
  } catch (error) {
    res.json({ success: false });
  }
});
groupsApi.post('/', (req, res) => {
  try {
    const { title, img, info } = req.body;
    Group.create({
      title,
      img,
      info,
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
