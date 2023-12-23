

const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');
router.get('/', gradeController.getAllGrade);
router.get('/getGrade/:id', gradeController.getGradeById);

module.exports = router;