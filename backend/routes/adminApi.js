const adminRouter = require('express').Router();
const { Application } = require('../db/models');

adminRouter.get('/adminApplications', async (req, res) => {
  try {
    const applications = await Application.findAll({
      raw: true,
      // where: { isChecked: false },
    });
    console.log(applications);
    return res.json(applications);
  } catch (error) {
    res.json({ success: false });
  }
});

// adminRouter.put('/change', async (req, res) => {
//   try {
//     // console.log('yyyyy')
//     const { appId, status } = req.body;
//     // console.log(req.body);
//     const currentApplication = await Application.findOne({ where: { id: appId } });
//     if (currentApplication) {
//       currentApplication.isChecked = status;
//       await currentApplication.save();
//       return res.json({ status: currentApplication.isChecked, appId });
//     }
//   } catch (error) {
//     res.json({ success: false });
//   }
// });
adminRouter.put('/change', (req, res) => {
  try {
    const { appId, status } = req.body;

    // if (status) {
    Application.update({ isChecked: status }, { where: { id: appId }, raw: true, returning: true })
      .then((updatedData) => {
        const [, [updatedApplication]] = updatedData;
        res.json(updatedApplication);
      });
    // }
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = adminRouter;
