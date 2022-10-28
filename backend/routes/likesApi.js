/* eslint-disable camelcase */
const likesApi = require('express').Router();
const { Like } = require('../db/models');

// '/api/likes'
likesApi.get('/', async (req, res) => {
  try {
    const likes = await Like.findAll();
    res.json(likes);
  } catch (error) {
    res.json({ success: false });
  }
});

likesApi.post('/', async (req, res) => {
  try {
    const {
      kid_id,
      event_id,
    } = req.body;
    const likes = await Like.findAll({ where: { kid_id, event_id }, raw: true });

    if (!likes.length) {
      Like.create({
        kid_id,
        event_id,
      }).then((newLike) => res.json({ newLike }));
    }
  } catch (error) {
    res.json({ success: false });
  }
});

module.exports = likesApi;
