const express = require("express");
const router = express.Router();
const adminController = require('../controllers/AdminControllers');

router.get('/', adminController.getAllAdmins);
router.get('/getAdmin/:id', adminController.getAdminById);
router.put('/updateAdmin/:id', adminController.updateAdminById);
router.delete('/deleteAdmin/:id', adminController.deleteAdminById);
router.post('/createAdmin', adminController.createAdmin);

module.exports = router;