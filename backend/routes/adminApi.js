const adminRouter = require('express').Router();
const { Application } = require('../db/models');

adminRouter.get('/adminApplications', async (req, res) => {
  try {
    const applications = await Application.findAll({
      raw: true,
      //  where: isChecked = false
    });
    res.json(applications);
  } catch (error) {
    res.json({ success: false });
  }
});

adminRouter.get('/adminApplicationsAccepted', async (req, res) => {
  try {
    const applications = await Application.findAll({
      raw: true,
      //  where: isChecked = true
    });
    res.json(applications);
  } catch (error) {
    res.json({ success: false });
  }
});

adminRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { isAdmin } = req.body;

    if (isAdmin) {
      Application.update({ isAdmin }, { where: { id }, raw: true, returning: true })
        .then((updatedData) => {
          const [, [updatedGroup]] = updatedData;
          return res.json(updatedGroup);
        });
    }
  } catch (error) {
    res.json({ success: false });
  }
});
