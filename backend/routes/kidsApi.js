const kidsApi = require('express').Router();
const { Kid } = require('../db/models');

// '/api/kids'
kidsApi.get('/', async (req, res) => {
  try {
    const kids = await Kid.findAll();
    res.json(kids);
  } catch (error) {
    res.json({ success: false });
  }
});

module.exports = kidsApi;
