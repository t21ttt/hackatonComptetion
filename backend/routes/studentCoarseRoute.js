const express = require("express");
const router = express.Router();
const StudentCoarseController = require("../controllers/StudentCoarseController");

router.post(
  "/createStudentCoarse",
  StudentCoarseController.createStudentCoarse
);

module.exports = router;