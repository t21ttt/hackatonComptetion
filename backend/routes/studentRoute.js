const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getAllStudents);
router.get('/getStudent/:id', studentController.getStudentById);
router.put('/updateStudent/:id', studentController.updateStudentById);
router.delete('/deleteStudent/:id', studentController.deleteStudentById);
router.post('/createStudent', studentController.createStudent);

module.exports = router;