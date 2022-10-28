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

likesApi.post('/', (req, res) => {
  try {
    const {
      kid_id,
      event_id,
    } = req.body;
    Like.create({
      kid_id,
      event_id,
    }).then((newLike) => res.json({ newLike }));
  } catch (error) {
    res.json({ success: false });
  }
});

module.exports = likesApi;
