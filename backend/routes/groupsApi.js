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

module.exports = groupsApi;
