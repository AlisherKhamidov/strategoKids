/* eslint-disable camelcase */
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

kidsApi.post('/', (req, res) => {
  try {
    const {
      user_id,
      name,
      secondName,
      middleName,
      birthDate,
      group_id,
      photo,
    } = req.body;
    Kid.create({
      user_id,
      name,
      secondName,
      middleName,
      birthDate,
      group_id,
      photo,
    }).then((newKid) => res.json({ newKid }));
  } catch (error) {
    res.json({ success: false });
  }
});

module.exports = kidsApi;
