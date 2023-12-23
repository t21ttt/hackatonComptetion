const StudentCoarseModel = require("../models/studentCoarseModel");

exports.createStudentCoarse = async (req, res) => {
  try {
    const { selectedCourses } = req.body;

    const studentCoarse = await StudentCoarseModel.create({
      selectedCourses,
    });

    res.json(studentCoarse);
  } catch (err) {
    res.json(err);
  }
};